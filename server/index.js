/* eslint-disable consistent-return */
require('dotenv').config();
// var argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// TODO config webpack to show errors when compiling
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackMiddlewareFactory = require('./middlewares/webpack/middlewareFactory');
const webpackConfig = require('../internals/webpack/webpack.dev')();

const compiler = webpack(webpackConfig);
const webpackMiddleware = webpackMiddlewareFactory.getDevMiddleware(compiler, webpackConfig);


// BACKLOG: rewrite path based on app
app.use('/api', createProxyMiddleware({ 
    target: 'http://localhost:8080',
    changeOrigin: true,
}));

app.use(webpackMiddleware);
app.use(webpackHotMiddleware(compiler));

const fs = compiler.outputFileSystem;
app.get('*', (req, res) => {
  fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    if (err) { res.sendStatus(404); } else { res.send(file.toString()); }
  });
});

const serverIP = process.env.DEV_SERVER_IP || '127.0.0.1';
const serverPort = process.env.DEV_SERVER_PORT || '9001';

app.listen(serverPort, serverIP, async (err) => {
  console.log(`Listening on ${serverIP} port ${serverPort}`);
  if (err) {
    return console.log(err.message);
  }
});

// TODO use env variable passed as command arguments
