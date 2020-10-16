export const state = () => ({
  permission: null, // user, admin
})

export const mutations = {
  logout(state) {
    state.permission = null
  },
}
