const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
      rules: [
        {
          test: /\.(s*)css$/,
          use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader"
          ]
        },
        {
          test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
          use: ["url-loader"]
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: ["url-loader"]
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: ["file-loader"]
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          use: ["url-loader"]
        }
      ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
        {from: './src/index.html', to: 'index.html' },
        {from: './assets', to: '/' }
      ], {}
    )
  ]
}
