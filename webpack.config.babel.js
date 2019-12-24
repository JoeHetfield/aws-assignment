const path = require('path');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const commonConfig = merge([
  {
    entry: {
      app: PATHS.app,
    },
    output: {
      path: PATHS.build,
      filename: '[name].[contenthash].js',
      publicPath: '/',
    },
    resolve: {
      alias: {
        lib: path.resolve(__dirname, 'app/lib/'),
        theme: path.resolve(__dirname, 'app/theme/'),
        utils: path.resolve(__dirname, 'app/utils/'),
        hooks: path.resolve(__dirname, 'app/hooks/'),
        pages: path.resolve(__dirname, 'app/pages/'),
        assets: path.resolve(__dirname, 'app/assets/'),
        config: path.resolve(__dirname, 'app/config/'),
        consts: path.resolve(__dirname, 'app/consts/'),
        schemas: path.resolve(__dirname, 'app/schemas/'),
        actions: path.resolve(__dirname, 'app/actions/'),
        reducers: path.resolve(__dirname, 'app/reducers/'),
        messages: path.resolve(__dirname, 'app/messages/'),
        selectors: path.resolve(__dirname, 'app/selectors/'),
        components: path.resolve(__dirname, 'app/components/'),
      },
      extensions: ['.js', '.jsx'],
    },
  },
  parts.cleanBuildPath(),
  parts.loadJavaScript({ include: PATHS.app }),
  parts.generateHtml({
    title: 'Device Simulator',
    appMountId: 'app',
  }),
]);

const productionConfig = merge([
  { mode: 'production' },
  parts.copyStaticFile({
    copy: [{
      from: 'app/i18n/lang',
      to: 'lang',
    }, {
      from: 'app/assets',
      to: 'assets',
    }, {
      from: 'app/lib',
      to: 'lib',
    }],
  }),
  parts.generateFavicon(),
  // parts.generatePwaManifest(),
  parts.generateServiceWorker(),
]);

const stagingConfig = merge([
  { mode: 'production' },
  parts.copyStaticFile({
    copy: [{
      from: 'app/i18n/lang',
      to: 'lang',
    }, {
      from: 'app/assets',
      to: 'assets',
    }, {
      from: 'app/lib',
      to: 'lib',
    }],
  }),
  parts.generateFavicon(),
  // parts.generatePwaManifest(),
  parts.generateServiceWorker(),
]);

const developmentConfig = merge([
  { mode: 'development' },
  parts.devServer({
    contentBase: [
      path.join(__dirname, 'app'),
      path.join(__dirname, 'app', 'lib'),
      path.join(__dirname, 'app', 'i18n'),
      path.join(__dirname, 'build'),
    ],
    proxy: {
      '/v1': {
        bypass: (req) => {
          console.log(req.method)
          if (!req.url.startsWith('/lang')
            && !req.url.startsWith('/assets')
            && !req.url.startsWith('/workbox')
          ) {
            return '/index.html';
          }
        },
      },
    },
  }),
  parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
  parts.generateFavicon(),
  // parts.generatePwaManifest(),
  parts.generateServiceWorker(),
]);

module.exports = (env) => {
  switch (env) {
    case 'production':
      return merge(commonConfig, productionConfig);
    case 'staging':
      return merge(commonConfig, stagingConfig);
    default:
      return merge(commonConfig, developmentConfig);
  }
};
