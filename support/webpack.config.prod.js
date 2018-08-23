/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackConfigBase = require('./webpack.config.base');
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(WebpackConfigBase, {
  devtool: '#source-map',
  entry: path.resolve('src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'reviser.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyjsPlugin()
  ]
});
