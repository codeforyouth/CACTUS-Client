export const state = () => ({

})

export const getters = {

}

export const mutations = {

}

export const actions = {

  /*
  初回表示用
  */

  async create({ state, commit }, payload)
  {

    const {headers, data, error} = await this.$resource().post(`problems/${payload.id}/solutions`, payload.body)

    if(error){
      throw new Error()
    }

  },


}
