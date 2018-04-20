var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: ['src', 'poster'],
  	source: 'src',
    object: 'data',
    iframe: 'src',
    embed: 'src',
    a: 'href'
  }
}