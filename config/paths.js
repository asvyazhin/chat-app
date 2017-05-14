const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  CLIENT_SRC: resolveApp('client'),
  CLIENT_DIST: resolveApp('client/dist'),
  NODE_MODULES: resolveApp('node_modules'),
}
