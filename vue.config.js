/*
 * @Description: vue config 配置覆盖
 * @Version: 2.0
 * @Autor: Ling Long
 * @Date: 2019-12-18 16:52:53
 * @LastEditors  : Ling Long
 * @LastEditTime : 2020-01-20 17:31:06
 */
const path = require("path")

const resolve = dir => {
  return path.resolve(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  lintOnSave: false,

  // 使用运行时编译器的 Vue 构建版本
  runtimeCompiler: true,

  // 开启生产环境SourceMap，设为false打包时不生成.map文件
  productionSourceMap: false,

  chainWebpack: config => {
    // 设置一些常用alias
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))

    // 移除 prefetch 插件，减少首屏加载
    config.plugins.delete("prefetch")
  },

  configureWebpack: config => {
    if (!process.env.NODE_ENV === "production") {
      // 设置一些常用alias
      config.resolve.alias
        .set("@", resolve("src"))
        .set("@assets", resolve("src/assets"))
        .set("@components", resolve("src/components"))

      // 移除 prefetch 插件，减少首屏加载
      config.plugins.delete("prefetch")
      return {
        plugins: [
          new BundleAnalyzerPlugin()
        ]
      }
    }
    // 生产环境
    if (process.env.NODE_ENV === "production") {
      // 生产环境去除console
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true

      // 生产环境打包分析体积
      return {
        plugins: [
          new BundleAnalyzerPlugin()
        ]
      }
    }
  },
  devServer: {
    port: 8888,
    disableHostCheck: true,
    hot: true,
    https: false, // 使用https提供服务
    proxy: {
      "/api": {
        target: process.env.VUE_APP_PROXY_HOST,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}
