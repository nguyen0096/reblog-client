const webpackDevMiddleware = require('webpack-dev-middleware');

const webpackMiddlewareFactory = {};

const createWebpackMiddleware = (compiler, publicPath) => {
    return webpackDevMiddleware(compiler, {
        publicPath,
    });
};

webpackMiddlewareFactory.getProdMiddleware = (compiler, config) => {
    return createWebpackMiddleware(
        compiler,
        config.output.publicPath,
    );
};

webpackMiddlewareFactory.getDevMiddleware = (compiler, config) => {
    return createWebpackMiddleware(
        compiler,
        config.output.publicPath,
    );
};

module.exports = webpackMiddlewareFactory;
