let reloadedForSW = false

function sendSkipWaiting(reg) {
  if (reg.waiting) {
    reg.waiting.postMessage({ type: 'SKIP_WAITING' })
  }
}

export function register() {
  if (!('serviceWorker' in navigator)) return

  window.addEventListener('load', () => {
    const swUrl = `${process.env.PUBLIC_URL || ''}/service-worker.js`

    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.log('[SW] Enregistré:', registration)

        // 1) Détecte une nouvelle version téléchargée
        registration.onupdatefound = () => {
          const installing = registration.installing
          if (!installing) return

          installing.onstatechange = () => {
            // Quand le nouveau SW a fini d'installer
            if (installing.state === 'installed') {
              // S'il y a déjà un contrôleur, c'est qu'une mise à jour est dispo
              if (navigator.serviceWorker.controller) {
                console.log('[SW] Nouvelle version prête (waiting). Activation…')
                // Demande l’activation immédiate
                sendSkipWaiting(registration)
              } else {
                console.log('[SW] Contenu pré-caché pour utilisation hors ligne.')
              }
            }
          }
        }

        // 2) Quand le contrôleur change (nouveau SW actif), on recharge une seule fois
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (reloadedForSW) return // évite les boucles
          reloadedForSW = true
          console.log('[SW] Nouveau contrôleur actif, rechargement...')
          window.location.reload()
        })

        // 3) Vérifie les updates au retour focus (utile si l’onglet reste ouvert longtemps)
        window.addEventListener('focus', () => {
          registration.update().catch(() => {})
        })

        // 4) Vérification périodique (optionnel, léger)
        setTimeout(() => registration.update().catch(() => {}), 60 * 1000)
      })
      .catch((error) => {
        console.error('[SW] Erreur d’enregistrement:', error)
      })
  })
}

export function unregister() {
  if (!('serviceWorker' in navigator)) return
  navigator.serviceWorker.ready
    .then((registration) => registration.unregister())
    .catch(() => {})
}
