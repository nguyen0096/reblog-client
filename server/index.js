/* eslint-disable consistent-return */
require('dotenv').config();
// var argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const express = require('express');
const webpack = require('webpack');

const app = express();

// Webpack
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackMiddlewareFactory = require('./middlewares/webpack/middlewareFactory');
const webpackConfig = require('../internals/webpack/webpack.dev')();

const compiler = webpack(webpackConfig);
const webpackMiddleware = webpackMiddlewareFactory.getDevMiddleware(compiler, webpackConfig);

app.use(webpackMiddleware);
app.use(webpackHotMiddleware(compiler));

const fs = compiler.outputFileSystem;
app.get('*', (req, res) => {
  fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    if (err) { res.sendStatus(404); } else { res.send(file.toString()); }
  });
});

const serverIP = process.env.server_ip || '127.0.0.1';

app.listen('8080', serverIP, async (err) => {
  if (err) {
    return console.log(err.message);
  }
});
