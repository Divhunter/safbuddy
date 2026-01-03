/* scripts/verify-build.js */
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const manifestPath = path.join(buildDir, 'asset-manifest.json');
const offlinePath = path.join(buildDir, 'offline.html');

function log(ok, msg) {
  const tag = ok ? '✅' : '⚠️';
  console.log(`${tag} ${msg}`);
}

try {
  if (!fs.existsSync(buildDir)) {
    console.warn('⚠️ build/ introuvable. As-tu lancé "npm run build" ?');
    process.exit(0);
  }

  if (!fs.existsSync(manifestPath)) {
    console.warn('⚠️ asset-manifest.json introuvable. (CRACO/CRA build ?) ');
  } else {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    const entrypoints = Array.isArray(manifest.entrypoints) ? manifest.entrypoints : [];
    if (entrypoints.length) {
      log(true, `Entrypoints: \n  - ${entrypoints.join('\n  - ')}`);
    } else {
      console.warn('⚠️ Pas d’"entrypoints" dans asset-manifest.json (ok si ancien format).');
    }
  }

  if (fs.existsSync(offlinePath)) {
    log(true, 'offline.html présent dans build/.');
  } else {
    console.warn('⚠️ offline.html manquant dans build/. (si tu utilises le fallback, copie-le via public/)');
  }
} catch (e) {
  console.error('Erreur postbuild:', e);
  process.exit(1);
}
