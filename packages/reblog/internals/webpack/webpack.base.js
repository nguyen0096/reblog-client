const path = require('path');
const { getAliases } = require('./utils');

const srcDir = process.env.WP_SRC_DIR || 'src';
const outputDir = process.env.WP_OUTPUT_DIR || 'build';

// Base configurations for both dev and prod mode
module.exports = function getWebpackBaseConfig(options) {
    return {
        mode: options.mode,
        entry: options.entry,
        output: {
            path: path.resolve(process.cwd(), outputDir),
            publicPath: process.env.WP_PUBLIC_PATH || '/',
            ...options.output,
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
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
            alias: getAliases(srcDir),
            extensions: ['.tsx', '.ts', '.js'], // attempt to resolve extensions in order
        },

        devtool: options.devtool,
        optimization: options.optimization,
        performance: options.performance || {},
        target: 'web',
    };
};
