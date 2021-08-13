const { webpackConfig, merge } = require('@rails/webpacker')

const customConfig = {
  resolve: {
    extensions: ['.js', 'es6', '.coffee', '.scss', 'css', 'sass'],
  }
}

module.exports = merge(webpackConfig, customConfig)
