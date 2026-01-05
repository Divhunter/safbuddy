/// <reference lib="webworker" />
/* eslint-env serviceworker, worker */
/* global globalThis */

/* service-worker.js — Safbuddy */

/**
 * Alias du global en Service Worker (évite les warnings sur `self`)
 * + typage pour l’autocomplétion VS Code.
 * @type {ServiceWorkerGlobalScope & typeof globalThis}
 */
const sw = /** @type {any} */ (globalThis);

const VERSION = 'v4';
const PRECACHE        = `safbuddy-precache-${VERSION}`;
const RUNTIME_ASSETS  = `safbuddy-runtime-assets-${VERSION}`;
const RUNTIME_IMGS    = `safbuddy-runtime-imgs-${VERSION}`;
const RUNTIME_FONTS   = `safbuddy-runtime-fonts-${VERSION}`;

const OFFLINE_URL = '/offline.html';

/* ——— INSTALL ——— */
sw.addEventListener('install', (event) => {
  console.log('[SW] Install');
  sw.skipWaiting();

  event.waitUntil((async () => {
    const cache = await caches.open(PRECACHE);

    // Base indispensable
    const base = ['/', '/index.html', OFFLINE_URL];

    // Essaie d’ajouter les JS/CSS hashés depuis asset-manifest.json
    try {
      const res = await fetch('/asset-manifest.json', { cache: 'no-store' });
      if (res.ok) {
        const manifest = await res.json();
        const addSet = new Set(base);

        // CRA ≥ v4 : "entrypoints"
        if (Array.isArray(manifest.entrypoints)) {
          manifest.entrypoints
            .filter((p) => p.endsWith('.js') || p.endsWith('.css'))
            .forEach((p) => addSet.add(p));
        }

        // Fallback : "files"
        if (manifest.files && typeof manifest.files === 'object') {
          Object.values(manifest.files)
            .filter((p) => typeof p === 'string' && (p.endsWith('.js') || p.endsWith('.css')))
            .forEach((p) => addSet.add(p));
        }

        await cache.addAll([...addSet]);
      } else {
        await cache.addAll(base);
      }
    } catch {
      // Si échec (offline au 1er install), on precache le minimum
      await cache.addAll(base);
    }
  })());
});

/* ——— ACTIVATE ——— */
sw.addEventListener('activate', (event) => {
  console.log('[SW] Activate');
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter((k) => ![PRECACHE, RUNTIME_ASSETS, RUNTIME_IMGS, RUNTIME_FONTS].includes(k))
        .map((k) => {
          console.log('[SW] Deleting old cache:', k);
          return caches.delete(k);
        })
    );
    await sw.clients.claim();
  })());
});

/* ——— UTILS ——— */
function isNavigationRequest(request) {
  // Traite comme navigation si mode 'navigate' ou Accept: text/html
  return request.mode === 'navigate' ||
    (request.method === 'GET' && request.headers.get('accept')?.includes('text/html'));
}

async function enforceLRULimit(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= maxEntries) return;
  // supprime l’entrée la plus ancienne et recommence
  await cache.delete(keys[0]);
  return enforceLRULimit(cacheName, maxEntries);
}

/* ——— MESSAGE (pour SKIP_WAITING piloté depuis l’app) ——— */
sw.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    sw.skipWaiting();
  }
});

/* ——— FETCH ——— */
sw.addEventListener('fetch', (event) => {
  const { request } = event;

  // Ignore non-GET / extensions / localhost (développement)
  if (request.method !== 'GET' || request.url.startsWith('chrome-extension://')) return;
  if (sw.location.hostname === 'localhost') return;

  const url = new URL(request.url);
  const sameOrigin = url.origin === sw.location.origin;

  // 1) HTML (navigations) → Network-First + fallback offline
  if (isNavigationRequest(request)) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(request, { cache: 'no-store' });
        if (fresh && fresh.ok) {
          // Optionnel : on garde un index frais
          const cache = await caches.open(PRECACHE);
          cache.put('/index.html', fresh.clone());
        }
        return fresh;
      } catch {
        const cache = await caches.open(PRECACHE);
        return (await cache.match('/index.html')) ||
               (await cache.match(OFFLINE_URL)) ||
               new Response('Hors ligne', { status: 503 });
      }
    })());
    return;
  }

  // 2) JS/CSS même origine → Stale-While-Revalidate
  if (sameOrigin && (request.destination === 'script' || request.destination === 'style')) {
    event.respondWith((async () => {
      const cache = await caches.open(RUNTIME_ASSETS);
      const cached = await cache.match(request);
      const fetchPromise = fetch(request).then((res) => {
        if (res && res.ok) cache.put(request, res.clone());
        return res;
      }).catch(() => null);
      return cached || (await fetchPromise) || new Response('', { status: 504 });
    })());
    return;
  }

  // 3) Images → Cache-First (LRU)
  if (request.destination === 'image') {
    event.respondWith((async () => {
      const cache = await caches.open(RUNTIME_IMGS);
      const cached = await cache.match(request);
      if (cached) return cached;
      try {
        // no-cors pour permettre la mise en cache 'opaque' si besoin
        const res = await fetch(request, { mode: 'no-cors' });
        if (res && (res.ok || res.type === 'opaque')) {
          await cache.put(request, res.clone());
          enforceLRULimit(RUNTIME_IMGS, 120);
        }
        return res;
      } catch {
        return new Response('', { status: 504 });
      }
    })());
    return;
  }

  // 4) Fonts → Cache-First (LRU)
  if (request.destination === 'font') {
    event.respondWith((async () => {
      const cache = await caches.open(RUNTIME_FONTS);
      const cached = await cache.match(request);
      if (cached) return cached;
      try {
        const res = await fetch(request, { mode: 'no-cors' });
        if (res && (res.ok || res.type === 'opaque')) {
          await cache.put(request, res.clone());
          enforceLRULimit(RUNTIME_FONTS, 60);
        }
        return res;
      } catch {
        return new Response('', { status: 504 });
      }
    })());
    return;
  }

  // 5) Tout le reste (même origine) → Cache falling back to network, puis mise en cache si OK
  if (sameOrigin) {
    event.respondWith((async () => {
      const cache = await caches.open(RUNTIME_ASSETS);
      const cached = await cache.match(request);
      if (cached) return cached;
      try {
        const res = await fetch(request);
        if (res && res.ok) await cache.put(request, res.clone());
        return res;
      } catch {
        // fallback ultime
        return (await caches.match(OFFLINE_URL)) || new Response('', { status: 504 });
      }
    })());
    return;
  }

  // 6) Cross-origin : réseau + fallback cache si présent
  event.respondWith((async () => {
    try {
      return await fetch(request);
    } catch {
      const cached = await caches.match(request);
      return cached || new Response('', { status: 504 });
    }
  })());
});
