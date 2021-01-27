/* eslint-disable consistent-return */
// TODO config webpack to show errors when compiling
// TODO: rewrite path based on app
// TODO use env variable passed as command arguments
// var argv = require('minimist')(process.argv.slice(2));

require('dotenv').config();
const { info } = require('./utils/logging');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy to API server
info('Setting up API proxy using BACKEND_URL: ' + process.env.BACKEND_URL);
app.use('/api', createProxyMiddleware({ 
    target: process.env.BACKEND_URL || 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: {
      '^/api/': '/',
    }
}));


// Setup file serving
const wpHotMid = require('webpack-hot-middleware');
const wpMidFactory = require('./middlewares/webpack/middlewareFactory');
const wpConfig = require('../internals/webpack/webpack.dev')();
const compiler = webpack(wpConfig);
const wpMid = wpMidFactory.getDevMiddleware(compiler, wpConfig);
app.use(wpMid);
app.use(wpHotMid(compiler));

const fs = compiler.outputFileSystem;
app.get('*', (req, res) => {
  fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    if (err) { res.sendStatus(404); } else { res.send(file.toString()); }
  });
});

// Run server
const serverIP = process.env.WEB_SERVER_IP || '127.0.0.1';
const serverPort = process.env.WEB_SERVER_PORT || '9001';

app.listen(serverPort, serverIP, async (err) => {
  console.log(`Listening on ${serverIP}:${serverPort}`);
  if (err) {
    return console.log(err.message);
  }
});
