const path = require('path');

const cwd = process.cwd();

const pathResolve = (relativePath) => path.resolve(cwd, relativePath);

module.exports = {
  indexHtml: pathResolve('src/index.html'),
  mainEntry: pathResolve('src/index.js'),
  rawCodeSamplesEntry: pathResolve('src/raw-code-samples/index.js'),
  output: pathResolve('build'),
  nodeModules: pathResolve('node_modules'),
  benchmarkModule: pathResolve('node_modules/benchmark'),
  rawCodeSamplesFolder: pathResolve('src/raw-code-samples/'),
  src: pathResolve('src/'),
  img: pathResolve('src/img/'),
  raw: pathResolve('src/raw-code-samples/'),
  vendor: pathResolve('vendor/'),
  publicPath: '/',
};
