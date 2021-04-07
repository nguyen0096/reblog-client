const path = require('path');
const root = path.resolve(__dirname, '../');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],

  webpackFinal: async (config) => {
    config.module.rules.push({
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    return config;
  },
}