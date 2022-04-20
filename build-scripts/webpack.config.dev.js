const path = require('path');
const { merge } = require('webpack-merge');

let localWebpackConfig;

try {
  localWebpackConfig = require('./webpack.config.local.js');
} catch (error) {
  localWebpackConfig = {};
}

module.exports = () => merge(
  {
    devtool: 'inline-cheap-module-source-map',
    devServer: {
      historyApiFallback: true,
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
