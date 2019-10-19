export const state = () => ({

  problem: {},

})

export const getters = {

  problem   : (state) => state.problem

}

export const mutations = {

  setProblem(state, payload) {

    state.problem = payload

  }
}

export const actions = {

  async init({ state, commit }, problem_id)
  {
    const {headers, data, error} = await this.$resource().get(`/problems/${problem_id}`)

    if(error){
      throw new Error()
    }

    commit('setProblem', data)
  },




}
