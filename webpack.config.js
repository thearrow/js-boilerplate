/* eslint-disable */
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './js/app.js',

  output: {
    path: __dirname,
    filename: 'bundle.js',
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html',
      inject: 'body',
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: [/node_modules/],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg|jpg|png)$/,
        loader: 'file',
      },
    ],
  },
}