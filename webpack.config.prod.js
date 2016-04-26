/* eslint-disable */
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './js/app.js',

  output: {
    path: 'deploy',
    filename: 'app.js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: '',
      compress: {
        booleans: true,
        conditionals: true,
        dead_code: true,
        drop_console: true,
        evaluate: true,
        hoist_funs: true,
        if_return: true,
        join_vars: true,
        loops: true,
        properties: true,
        sequences: true,
        unused: true,
        warnings: true,
      },
      mangle: true,
    }),
    new ExtractTextPlugin("app.css"),
    new HtmlWebpackPlugin({
      template: 'template.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          comments: false,
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'transform-react-remove-prop-types',
            'transform-react-inline-elements',
            'transform-react-constant-elements',
          ]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass'),
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot|svg|jpg|png|gif)$/,
        loader: 'file',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },
}
