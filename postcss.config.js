const postcssSmartImport = require('postcss-smart-import')
const precss = require('precss')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    postcssSmartImport({ /* ...options */ }),
    precss({ /* ...options */ }),
    autoprefixer({
      browsers: [
        'Chrome >= 35',
        'Firefox >= 38',
        'Edge >= 12',
        'Explorer >= 10',
        'iOS >= 8',
        'Safari >= 8',
        'Android 2.3',
        'Android >= 4',
        'Opera >= 12',
      ],
    }),
  ],
}
