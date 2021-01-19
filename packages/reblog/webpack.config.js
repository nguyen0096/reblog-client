const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const base = {
    entry: path.resolve(process.cwd(), 'src'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    // Config loader to handle different types of files. Refer to https://webpack.js.org/loaders/
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            // Style loaders. Refer to https://webpack.js.org/loaders/#styling
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
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
        })
    ],
}

module.exports = base;