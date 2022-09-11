const fs = require('fs');
const paths = require('./paths');

module.exports = {
  devServer: {
    client: false,
    webSocketServer: false,
    https: {
      key: fs.readFileSync('sslcert/key.pem', 'utf8'),
      cert: fs.readFileSync('sslcert/cert.pem', 'utf8'),
    },
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
