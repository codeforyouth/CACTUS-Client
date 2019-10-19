export const state = () => ({
})

export const mutations = {
}

export const actions = {

  /*
  init
  */
  async nuxtServerInit({ dispatch, commit }, { app, req, route, redirect, error }) {

    dispatch('auth/syncCookies')

  }

}
