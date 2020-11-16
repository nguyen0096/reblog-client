const webpackDevMiddleware = require('webpack-dev-middleware');

const webpackMiddlewareFactory = {};

webpackMiddlewareFactory.createWebpackMiddleware = (compiler, publicPath) =>  {
    return webpackDevMiddleware(compiler, {
        publicPath,
    });
}

webpackMiddlewareFactory.getProdMiddleware = (compiler, config) => {
    return createWebpackMiddleware(
        compiler,
        config.output.publicPath
    );
}

webpackMiddlewareFactory.getDevMiddleware = (compiler, config) => {

}


module.exports = webpackMiddlewareFactory;