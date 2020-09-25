export const state = () => ({
  permission: null,
})

export const mutations = {
  logout(state) {
    state.permission = null
  },
}
