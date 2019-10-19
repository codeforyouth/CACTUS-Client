export const state = () => ({

  problems: [],

})

export const getters = {

  problems   : (state) => state.problems

}

export const mutations = {

  setproblems(state, payload) {

    state.problems = payload

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

    const {headers, data, error} = await this.$resource().get(`/problems`)

    if(error){
      throw new Error()
    }

    commit('setProblems', data)
  },




}
