const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getWebpackBaseConfig = require('./webpack.base');

const srcDirname = process.env.WP_SRC_DIR || 'src';

// TODO figure the proper way to config for prod
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
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
        inject: true,
        publicPath: './',
      }),
    ],

    performance: {
      hints: false,
    },
  });
};
