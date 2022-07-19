const paths = require('./paths');

module.exports = {
  devServer: {
    client: false,
    webSocketServer: false,
    https: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 4780,
    liveReload: false,
    hot: false,
    static: {
      publicPath: paths.publicPath,
      directory: paths.output,
    },
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
  },
};
