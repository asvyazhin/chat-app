const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());

function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

module.exports = {
  CLIENT_SRC: resolveApp('client'),
  CLIENT_DIST: resolveApp('client/build'),
  NODE_MODULES: resolveApp('node_modules')
};
