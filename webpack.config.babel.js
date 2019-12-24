const path = require('path');
const merge = require('webpack-merge');
const ramda = require('ramda');
const shortid = require('shortid');
const bodyParser = require('body-parser');

const parts = require('./webpack.parts');

let initData = [{
  typeId: 'PjYSsqklZ',
  userId: 'joe_19840729_hotmail_com',
  updatedAt: '2019-12-23T14:09:44Z',
  visibility: 'private',
  spec: {
    duration: 60000,
    topic: '/sample/topic',
    interval: 2000,
    payload: [{
      name: 'g47qEbvh1',
      type: 'id',
      _id_: 'g47qEbvh1',
    }, {
      default: '1',
      name: 'yEWV3sWvO',
      bseed: 4,
      _id_: 'yEWV3sWvO',
      type: 'bool',
      bmax: 5,
      bmin: 1,
    }, {
      name: '8FXpIKikR',
      _id_: '8FXpIKikR',
      default: '1',
      min: 0,
      type: 'decay',
      max: 1000,
    }, {
      dmin: 0,
      default: '1',
      precision: 2,
      name: 'iZYtFCZTX',
      imin: 0,
      _id_: 'iZYtFCZTX',
      imax: 100,
      type: 'float',
      dmax: 99,
    }, {
      name: 'n07c5bg6w',
      _id_: 'n07c5bg6w',
      default: '1',
      min: 0,
      type: 'int',
      max: 1000,
    }, {
      name: 'RcfD65JxR',
      _id_: 'RcfD65JxR',
      type: 'location',
      radius: 1609,
      lat: 38.9072,
      long: 77.0369,
    }, {
      name: 'pVyPCvbJw',
      _id_: 'pVyPCvbJw',
      type: 'object',
      payload: [{
        name: 'L_Fj-98M-',
        type: 'id',
        _id_: 'L_Fj-98M-',
      }],
    }, {
      default: 'a',
      static: true,
      smax: 20,
      name: 'cqOwWBbNm',
      _id_: 'cqOwWBbNm',
      smin: 1,
      type: 'string',
    }, {
      name: '0N4fgzXeW',
      _id_: '0N4fgzXeW',
      default: '1',
      min: 0,
      type: 'sinusoidal',
      max: 1000,
    }, {
      name: '-9Xi0Xvly',
      _id_: '-9Xi0Xvly',
      default: '1',
      static: true,
      type: 'uuid',
    }, {
      name: 'J13-T0DNP',
      _id_: 'J13-T0DNP',
      default: '1',
      static: true,
      type: 'shortid',
    }, {
      name: 'LzsIlYXYK',
      _id_: 'LzsIlYXYK',
      tsformat: 'default',
      default: '1',
      type: 'timestamp',
    }, {
      name: 'u8hlrqnKP',
      arr: ['running', 'stopped', 'starting', 'error'],
      _id_: 'u8hlrqnKP',
      static: true,
      type: 'pickOne',
    }],
  },
  createdAt: '2019-12-19T13:17:54Z',
  name: 'TestDevice',
  custom: true,
}];

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
    before: (app, server) => {
      app.use(bodyParser.json());

      app.get('/api/deviceTypes/', (req, res) => {
        setTimeout(() => res.json(initData), 1000);
      });

      app.get('/api/deviceTypes/:typeId', (req, res) => {
        const found = initData.find((item) => item.typeId === req.params.typeId) || {}
        setTimeout(() => res.json(found), 1000);
      });

      app.post('/api/deviceTypes', (req, res) => {
        const newDeviceType = {
          ...req.body,
          typeId: shortid.generate(),
        };
        initData = [newDeviceType, ...initData];
        setTimeout(() => res.json(newDeviceType), 1000);
      });

      app.put('/api/deviceTypes/:typeId', (req, res) => {
        const idx = initData.findIndex((item) => item.typeId === req.params.typeId);
        initData = ramda.update(idx, ramda.mergeDeepRight(initData[idx], req.body), initData);
        setTimeout(() => res.json(req.body), 1000);
      });
    },
    proxy: {
      '/v1': {
        bypass: (req) => {
          if (!req.url.startsWith('/api')
            && !req.url.startsWith('/lang')
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
