const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let common = {
  entry: {
    main: './source/js/main.js'
  },
  output: {
    path: path.resolve('app/client'),
    filename: 'js/[name].js'
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src']
            }
          },
          {
            loader: 'pug-plain-loader'
          }
        ]
      }
    ]
  },
  stats: 'errors-only',
  plugins: [
    new HtmlWebpackPlugin({
      template: './source/pug/index.pug',
      filename: 'index.html'
    })
  ]
}

module.exports = common
