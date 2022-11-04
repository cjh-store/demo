export const useDemoStore = defineStore('demo', {
  state: () => ({
    admin: false,
    role: [],
    permission: [],
  }),
  getters: {
    getAdmin: (state) => state.admin,
    getRole: (state) => state.role,
    getPermission: (state) => state.permission,
  },
  actions: {},
})
