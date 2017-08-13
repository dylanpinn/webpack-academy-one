const path = require('path');
const ExamplePlugin = require('./ExamplePlugin.js');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.jpeg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.jpe?g$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExamplePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ContextReplacementPlugin()
  ]
};
