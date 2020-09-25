export const state = () => ({
  permission: 'user',
})

export const mutations = {
  logout(state) {
    state.permission = null
  },
}
