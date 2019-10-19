export const state = () => ({

  user: {},

})

export const getters = {

  user   : (state) => state.user

}

export const mutations = {

  setUser(state, payload) {

    state.user = payload

  }
}

export const actions = {

  /*
  初回表示用
  */

  async init({ state, commit })
  {

    const {headers, data, error} = await this.$resource().get(`/user`)

    if(error){
      throw new Error()
    }

    commit('setUser', data)
  },


}
