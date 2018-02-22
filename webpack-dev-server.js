const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const { webpackPort } = require('./config');

new WebpackDevServer(webpack(webpackConfig), {
    // enable this to be able make requests through proxy to an api
    // proxy: {
    //   '/api': {
    //     target: "http://localhost:3075",
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },

    disableHostCheck: true,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
      // Config for minimal console.log mess.
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
}).listen(webpackPort, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }

  console.log(`Listening at http://localhost:${webpackPort}`);
});