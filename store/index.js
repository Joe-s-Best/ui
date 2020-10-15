export const state = () => ({
  permission: 'admin',
})

export const mutations = {
  logout(state) {
    state.permission = null
  },
}
