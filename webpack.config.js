const path = require('path')

module.exports = {
  entry: {
    app: ['./src/app.ts'],
    background: ['./src/background.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, './addon/'),
    filename: '[name].js'
  }
}
