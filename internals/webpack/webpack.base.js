const path = require('path');

// Base configurations for both dev and prod mode
module.exports = function getWebpackBaseConfig(options) {
  return {
    mode: options.mode,
    entry: options.entry,
    output: {
      path: path.resolve(process.cwd(), process.env.WP_OUTPUT_DIR || 'build'),
      publicPath: process.env.WP_PUBLIC_PATH || '/',
      ...options.output,
    },

    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'],
        },
        {
          test: /\.scss$/,
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
        components: path.resolve(process.cwd(), process.env.WP_SRC_DIR || 'src', 'components'),
        containers: path.resolve(process.cwd(), process.env.WP_SRC_DIR || 'src', 'containers'),
        stores: path.resolve(process.cwd(), process.env.WP_SRC_DIR || 'src', 'stores'),
      },
    },
    devtool: options.devtool,
    optimization: options.optimization,
    performance: options.performance || {},
    target: 'web',
  };
};
