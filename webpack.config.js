/* eslint-disable */
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: "http://0.0.0.0:8000/",
  },

  devtool: 'cheap-module-inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html',
      inject: 'body',
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            ['react-transform', {
              transforms: [{
                transform: 'react-transform-hmr',
                imports: ['react'],
                locals: ['module']
              }, {
                transform: 'react-transform-catch-errors',
                imports: ['react', 'redbox-react']
              }]
            }]
          ]
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
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
