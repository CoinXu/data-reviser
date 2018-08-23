
/**
 * @date 2018-08-23
 * @author xuchuanping
 * @description
 */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackConfigBase = require('./webpack.config.base');

module.exports = merge(WebpackConfigBase, {
  devtool: '#source-map',
  entry: path.resolve('test/index.js'),
  output: {
    path: path.resolve(__dirname, 'test'),
    filename: 'test.bundle.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('test')
      }
    })
  ]
});
