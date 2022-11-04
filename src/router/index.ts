import { createRouter, createWebHashHistory } from 'vue-router'
import Demo from '@/views/demo/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Demo,
    },
  ],
})

export async function setupRouter(app: any) {
  app.use(router)
  await router.isReady()
}

export default router
