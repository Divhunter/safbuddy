// craco.config.js
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // ----- Fichiers JS sans hash -----
      webpackConfig.output.filename = 'static/js/[name].js';
      webpackConfig.output.chunkFilename = 'static/js/[name].chunk.js';

      // ----- Fichiers CSS sans hash (on modifie l'instance existante, sans require du module) -----
      webpackConfig.plugins = webpackConfig.plugins.map((plugin) => {
        if (plugin && plugin.constructor && plugin.constructor.name === 'MiniCssExtractPlugin') {
          plugin.options = {
            ...(plugin.options || {}),
            filename: 'static/css/[name].css',
            chunkFilename: 'static/css/[name].chunk.css',
          };
        }
        return plugin;
      });

      // ----- Remplacer proprement le WebpackManifestPlugin de CRA (sans en ajouter un 2e) -----
      const manifestIdx = webpackConfig.plugins.findIndex(
        (p) =>
          p &&
          (p.constructor?.name === 'WebpackManifestPlugin' ||
            p?.options?.fileName === 'asset-manifest.json')
      );

      const publicPath = webpackConfig.output.publicPath ?? 'auto';

      const replacementManifest = new WebpackManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath,
        writeToFileEmit: true,
        generate: (seed, files) =>
          files.reduce((acc, file) => {
            const key = file.name;
            if (key === 'main.css') acc['main.css'] = '/static/css/main.css';
            else if (key === 'main.js') acc['main.js'] = '/static/js/main.js';
            else acc[key] = file.path;
            return acc;
          }, seed),
      });

      if (manifestIdx !== -1) {
        webpackConfig.plugins[manifestIdx] = replacementManifest; // remplace l'existant
      } else {
        webpackConfig.plugins.push(replacementManifest); // ajoute si absent (rare)
      }

      // (Optionnel) éviter des ratés de watch sous OneDrive
      webpackConfig.watchOptions = {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000,
      };

      return webpackConfig;
    },
  },

  devServer: (devServerConfig) => {
    devServerConfig.hot = true;
    devServerConfig.liveReload = true;
    devServerConfig.watchFiles = {
      paths: ['src/**/*', 'public/**/*'],
      options: { usePolling: true, interval: 1000, aggregateTimeout: 300 },
    };
    return devServerConfig;
  },

  env: { FAST_REFRESH: true },
};
