const { createProxyMiddleware } = require('http-proxy-middleware');



module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://localhost:7049',
            secure: false,
            changeOrigin: true,
        })
    );
};


//const context = [
//    "/weatherforecast",
//];

//module.exports = function (app) {
//    const appProxy = createProxyMiddleware(context, {
//        target: 'https://localhost:7049',
//        secure: false
//    });

//    app.use(appProxy);
//};

