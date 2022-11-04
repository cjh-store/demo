import '@unocss/reset/normalize.css'
import 'uno.css'
// 加载全局样式样式
import '@/assets/styles/index.scss'
// 加载全局样式样式
import vant from './vant'
export function setupPlugins(app) {
  Object.keys(vant).forEach((key) => {
    app.provide(key, vant[key as keyof typeof vant])
    // 允许vue3下继续使用vue2中的this调用tl方法
    app.config.globalProperties[key] = vant[key as keyof typeof vant]
  })
}
