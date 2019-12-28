/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest');
// const HtmlWebpackTemplate = require('html-webpack-template');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

exports.cleanBuildPath = () => ({
  plugins: [
    new CleanWebpackPlugin(),
  ],
});

exports.generateHtml = ({ title, appMountId }) => ({
  plugins: [
    new HtmlWebpackPlugin({
      title,
      appMountId,
      favicon: './app/assets/favicon.ico',
      template: './templates/index.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no',
      },
    }),
  ],
});

exports.generateFavicon = () => ({
  plugins: [
    new FaviconsWebpackPlugin({
      logo: './app/assets/favicon.png',
      devMode: 'webapp',
      favicons: {
        appName: 'Device Simulator',
        appShortName: 'Device Simulator',
        appDescription: 'Device Simulator',
        developerName: 'JoeHetfield',
        developerURL: null, // prevent retrieving from the nearest package.json
        background: '#34344E',
        theme_color: '#242439',
        display: 'fullscreen',
        orientation: 'portrait',
        start_url: '/',
        // icons: {
        //   coast: false,
        //   yandex: false,
        // },
      },
    }),
  ],
});

exports.devServer = ({
  host,
  port,
  contentBase,
  proxy,
  before,
}) => ({
  devServer: {
    stats: 'errors-only',
    // https: true,
    overlay: {
      errors: true,
      warnings: true,
    },
    host: host || process.env.HOST,
    port: port || process.env.PORT,
    contentBase,
    proxy,
    before,
  },
});

exports.copyStaticFile = ({ copy }) => ({
  plugins: [
    new CopyWebpackPlugin(copy),
  ],
});

exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        include,
        exclude,
        use: {
          loader: 'url-loader',
          options,
        },
      },
    ],
  },
});

exports.loadFonts = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        include,
        exclude,
        use: {
          loader: 'url-loader',
          options,
        },
      },
    ],
  },
});

exports.loadJavaScript = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include,
        exclude,
        use: 'babel-loader',
      },
    ],
  },
});

exports.generateSourceMaps = ({ type }) => ({
  devtool: type,
});

exports.generateServiceWorker = () => ({
  plugins: [
    new WorkboxPlugin.GenerateSW({
      importWorkboxFrom: 'local',
      clientsClaim: true,
      skipWaiting: true,
      exclude: ['index.html', /assets\/help\/.*$/, /lang\/.*$/],
    }),
  ],
});

exports.defineProductioEnv = env => ({
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
  ],
});

exports.visualizer = () => ({
  plugins: [new Visualizer()],
});
