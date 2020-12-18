require('dotenv').config()
var argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const app = express();

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackMiddlewareFactory = require('./middlewares/webpack/middlewareFactory');
const webpackHotMiddleware = require('webpack-hot-middleware')

const webpackConfig = {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(process.cwd(), 'src'), 
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: "/"
    },

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
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(process.cwd(), 'src/index.html'),
            title: "Reblog - Development",
            inject: true,
            publicPath: './'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
    ],

    resolve: {
        alias: {
            "components": path.resolve(process.cwd(), 'src', 'components')
        }
    },
    devtool: 'source-map',
    target: 'web',
    performance: {
        hints: 'warning',
    },
}

const compiler = webpack(webpackConfig);
const webpackMiddleware = webpackMiddlewareFactory.getDevMiddleware(compiler, webpackConfig);

app.use(webpackMiddleware);
app.use(webpackHotMiddleware(compiler));


const fs = compiler.outputFileSystem; 
app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
        if (err)
            res.sendStatus(404);
        else
            res.send(file.toString());
    });
});

app.listen('8080', 'localhost', async err => {
    if (err) {
        return console.log(err.message);
    }
});