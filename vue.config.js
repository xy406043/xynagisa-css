const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}


const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

module.exports = {
  publicPath: BASE_URL,
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.symlinks(true); //修复热更新
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  runtimeCompiler:true,
  productionSourceMap: false,
//   extract: true,
//   sourceMap: false,
  configureWebpack:{
  }
}

