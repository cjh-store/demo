const pinia = createPinia()
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export function setupStore(app: any) {
  pinia.use(piniaPluginPersistedstate)
  app.use(pinia)
}

export default pinia
