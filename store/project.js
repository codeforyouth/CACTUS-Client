export const state = () => ({

  projects: [],

})

export const getters = {

  projects   : (state) => state.projects

}

export const mutations = {

  setProjects(state, payload) {

    state.projects = payload

  }
}

export const actions = {

  /*
  初回表示用
  */
  async init({ dispatch})
  {
    await dispatch('search')
  },

  /*
  検索を実行する
  */
  async search({ state, commit })
  {

    const {headers, data, error} = await this.$resource().get(`/projects`)

    if(error){
      throw new Error()
    }

    commit('setProjects', data)
  },


}
