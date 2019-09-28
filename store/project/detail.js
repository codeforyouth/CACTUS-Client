export const state = () => ({

  project: {},

})

export const getters = {

  project   : (state) => state.project

}

export const mutations = {

  setProject(state, payload) {

    state.project = payload

  }
}

export const actions = {

  async init({ state, commit }, project_id)
  {

    const {headers, data, error} = await this.$resource().get(`/projects/${project_id}`)

    console.log(data)

    if(error){
      throw new Error()
    }

    commit('setProject', data)
  },




}
