// TODO figure the proper way to config for dev

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getWebpackBaseConfig = require('./webpack.base');

const srcDirname = process.env.WP_SRC_DIR || 'src';

module.exports = function getWebpackDevConfig() {
  return getWebpackBaseConfig({
    mode: 'development',

    entry: [
      'webpack-hot-middleware/client',
      path.resolve(process.cwd(), process.env.WP_SRC_DIR || 'src'),
    ],

    output: {
      filename: '[name].js',
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(process.cwd(), srcDirname, 'index.html'),
        inject: true,
        publicPath: './',
      }),
      new webpack.NoEmitOnErrorsPlugin(),
    ],

    devtool: 'source-map',

    performance: {
      hints: 'warning',
    },
  });
};
