const { pathResolve } = require('./helpers');

module.exports = {
  indexHtml: pathResolve('src/index.html'),
  mainEntry: pathResolve('src/main.jsx'),
  initialEntry: pathResolve('src/initial.js'),
  rawCodeSamplesEntry: pathResolve('src/raw-code-samples/index.js'),
  output: pathResolve('build'),
  public: pathResolve('src/public'),
  nodeModules: pathResolve('node_modules'),
  benchmarkModule: pathResolve('node_modules/benchmark'),
  rawCodeSamplesFolder: pathResolve('src/raw-code-samples/'),
  src: pathResolve('src/'),
  img: pathResolve('src/img/'),
  raw: pathResolve('src/raw-code-samples/'),
  vendor: pathResolve('vendor/'),
  publicPath: '/',
};
