export const state = () => ({

  tag: {},

})

export const getters = {

  tag   : (state) => state.tag

}

export const mutations = {

  setTag(state, payload) {

    state.tag = payload

  }
}

export const actions = {

  /*
  初回表示用
  */

  async init({ state, commit }, language)
  {

    const {headers, data, error} = await this.$resource().get(`/tags/${language}`)

    if(error){
      throw new Error()
    }

    commit('setTag', data)
  },


}
