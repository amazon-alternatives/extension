const MinifyPlugin = require('babel-minify-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    app: ['./src/app.js'],
    background: ['./src/background.js']
  },
  output: {
    path: path.resolve(__dirname, './addon/'),
    filename: '[name].js'
  },
  plugins: [new MinifyPlugin()]
}
