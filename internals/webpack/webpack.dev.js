const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getWebpackBaseConfig = require('./webpack.base');

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
        template: path.resolve(process.cwd(), 'src/index.html'),
        title: 'Reblog - Development',
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
