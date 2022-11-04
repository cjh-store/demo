import { createApp } from 'vue'
import { setupStore } from '@/stores'
import { setupRouter } from '@/router'
import App from './App.vue'
import { setupPlugins } from '@/plugins/index'

const app = createApp(App)

setupPlugins(app)
setupStore(app)
setupRouter(app)
app.mount('#app')
