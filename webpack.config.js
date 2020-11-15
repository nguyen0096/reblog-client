const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve( process.cwd(), 'src'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: path.resolve(__dirname, 'build')
    },
    
    // Config loader to handle different types of files. Refer to https://webpack.js.org/loaders/
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: path.resolve( process.cwd(), 'src/index.html' ),
            title: "Reblog - Development",
            inject: true,
            publicPath: './'
        })
    ]
}