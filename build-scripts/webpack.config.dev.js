const path = require('path');
const { merge } = require('webpack-merge');

let localWebpackConfig;

try {
  // eslint-disable-next-line import/no-unresolved
  localWebpackConfig = require('./webpack.config.local.js');
} catch (error) {
  localWebpackConfig = {};
}

module.exports = () => merge(
  {
    devtool: 'inline-cheap-module-source-map',
    devServer: {
      host: '0.0.0.0',
      port: 4780,
      liveReload: false,
      hot: false,
      static: {
        directory: path.join(__dirname, '../build'),
      },
    },
  },
  localWebpackConfig,
);
