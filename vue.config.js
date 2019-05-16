const path = require('path')
const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin' : '/'

module.exports = {

  publicPath: BASE_URL,
  // 设置别名
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('iview')
      .loader('iview-loader')
      .options({ prefix: false })

    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成mapsource
  productionSourceMap: false,
  devServer: {

  }
}
