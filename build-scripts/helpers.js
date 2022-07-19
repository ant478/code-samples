const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require('glob');

const cwd = process.cwd();

function pathResolve(relativePath) {
  return path.resolve(cwd, relativePath);
}

function getWorkerEntries() {
  const files = glob.sync(pathResolve('src/**/*.worker.js').replace(/\\/g, '/'));

  return files.reduce((entries, file) => {
    const workerId = /(.*[/\\])?(.+?)\.worker\.js$/.exec(file)[2];
    const workerName = `${workerId}-worker`;

    if (workerName in entries) {
      throw new Error('helpers.js: worker names should be unique');
    }

    entries[workerName] = {
      import: file,
      runtime: false,
    };

    return entries;
  }, {});
}

module.exports = {
  pathResolve,
  getWorkerEntries,
};
