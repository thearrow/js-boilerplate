/* eslint-disable */
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
  config.set({

    browsers: ['PhantomJS'],

    singleRun: true,

    frameworks: [ 'mocha' ],

    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './js/tests/all.js'
    ],

    preprocessors: {
      './js/tests/all.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'mocha' ],

    plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
      require("karma-mocha-reporter"),
      require("karma-phantomjs-launcher"),
      require("karma-sourcemap-loader")
    ],

    webpack: {
      devtool: 'cheap-module-source-map',
      module: {
        loaders: webpackConfig.module.loaders,
        noParse: [
          /\/sinon\.js/
        ],
      },
      resolve: {
        modulesDirectories: [
          'js',
          'node_modules'
        ],
        alias: {
          sinon: 'sinon/pkg/sinon.js'
        },
        extensions: ['', '.json', '.js']
      },
      plugins: [
        new webpack.IgnorePlugin(/\.json$/),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          __CLIENT__: true,
          __SERVER__: false,
          __DEVELOPMENT__: true,
          __DEVTOOLS__: false  // <-------- DISABLE redux-devtools HERE
        })
      ]
    },

    webpackServer: {
      stats: false,
    }
  });
};
