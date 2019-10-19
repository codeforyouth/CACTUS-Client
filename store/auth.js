export const state = () => ({

  redirect_url: [],
  cookies: {}

})

export const mutations = {

  setRedirectUrl(state, payload) {
    state.redirect_url = payload
  },

  setToken(state, payload) {
    this.$cookies.set("token", payload, {path: '/'})
    state.cookies = this.$cookies.getAll()
  },

  setCookies(state, payload){
    state.cookies = payload
  },

  removeToken(state, payload) {
    this.$cookies.remove("token", {path: '/'})
    state.cookies = this.$cookies.getAll()
  }

}

export const actions = {

  async login ({commit}){

    const {headers, data, error} = await this.$resource().get(`/oauth/login/redirect`)

    if(error) {
      throw new Error()
    }

    commit('setRedirectUrl', data)

  },

  async logout ({commit}){

    commit('removeToken')

  },

  async callback({commit}, query){

    const {headers, data, error} = await this.$resource().get(`/oauth/login/callback`, query)

    console.log(data)

    if(error) {
      throw new Error()
    }

    commit('setToken', data)

  },

  syncCookies({commit}){
    let cookies = this.$cookies.getAll()
    commit('setCookies', cookies)
  },

  //getterでのcookieの使い方がよーわからんのでやむなし妥協
  getToken(){
    return this.$cookies.get('token') || ''
  }

}
