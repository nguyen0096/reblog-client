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
          test: /\.js/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
    plugins: options.plugins.concat([]),

    resolve: {
      alias: {
        components: path.resolve(process.cwd(), process.env.WP_SRC_DIR || 'src', 'components'),
        containers: path.resolve(process.cwd(), process.env.WP_SRC_DIR || 'src', 'containers'),
      },
    },
    devtool: options.devtool,
    optimization: options.optimization,
    performance: options.performance || {},
    target: 'web',
  };
};
