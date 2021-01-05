const path = require('path');

const srcDirname = process.env.WP_SRC_DIR || 'src';
const outputDirname = process.env.WP_OUTPUT_DIR || 'build';

// Base configurations for both dev and prod mode
module.exports = function getWebpackBaseConfig(options) {
  return {
    mode: options.mode,
    entry: options.entry,
    output: {
      path: path.resolve(process.cwd(), outputDirname),
      publicPath: process.env.WP_PUBLIC_PATH || '/',
      ...options.output,
    },

    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.jsx?$/,
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'],
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'],
        },
        {
          test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
          use: 'url-loader?limit=100000',
        },
      ],
    },
    plugins: options.plugins.concat([]),

    resolve: {
      alias: {
        components: path.resolve(process.cwd(), srcDirname, 'components'),
        containers: path.resolve(process.cwd(), srcDirname, 'containers'),
        stores: path.resolve(process.cwd(), srcDirname, 'stores'),
        controllers: path.resolve(process.cwd(), srcDirname, 'controllers'),
        utils: path.resolve(process.cwd(), srcDirname, 'utils'),
      },
    },
    devtool: options.devtool,
    optimization: options.optimization,
    performance: options.performance || {},
    target: 'web',
  };
};
