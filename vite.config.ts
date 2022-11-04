import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { setupVitePlugins } from './vite/plugins/index'
import { createBuildConfig } from './vite/build/index'
import PostcssPxToViewport from 'postcss-px-to-viewport' //自适应

export default defineConfig(({ mode, command }) => {
  return {
    base: './',
    server: {
      //使用IP能访问
      host: true,
    },
    logLevel: 'info',
    plugins: setupVitePlugins({ mode, command } as any),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '#': fileURLToPath(new URL('./types', import.meta.url)),
      },
    },
    build: createBuildConfig(),
    css: {
      postcss: {
        plugins: [
          PostcssPxToViewport({
            unitToConvert: 'px', // 要转化的单位
            viewportWidth: 375, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: [], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            landscape: false, // 是否处理横屏情况
          }),
        ],
      },
    },
  }
})
