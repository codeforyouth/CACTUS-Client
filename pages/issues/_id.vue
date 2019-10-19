<template>
  <div class="container">
    <div class="mb-5">
      <h3 class="font-weight-bold title mt-5">{{problem.title}}</h3>
      <h4 class="font-weight-bold">問題点</h4>
      <p>{{problem.issue}}</p>
      <h4 class="font-weight-bold">実現したいこと</h4>
      <p>{{problem.description}}</p>
      <h4 class="font-weight-bold">ヒント</h4>
      <p>{{problem.hint}}</p>
    </div>
    <b-button v-b-modal.modal-1 class="btn btn-primary"><i class="fas fa-dove mr-2">解決報告</i></b-button>
    <b-modal id="modal-1" title="ソリューション投稿" hide-footer centered>
      <b-form-group id="input-group-1" label="タイトル:" label-for="input-1">
        <b-form-input type="text" placeholder="title" v-model="form.title"/>
      </b-form-group>
      <b-form-group id="input-group-2" label="プロジェクトのリンク:" label-for="input-2">
        <b-form-input type="text" placeholder="link" v-model="form.link"/>
      </b-form-group>
      <b-form-group id="input-group-3" label="Github URL:" label-for="input-3">
        <b-form-input type="text" placeholder="repositoryUrl" v-model="form.repository_url"/>
      </b-form-group>
      <b-form-group id="input-group-4" label="メモ:" label-for="input-4" class="mb-5">
        <b-form-input type="text" placeholder="note" v-model="form.note"/>
      </b-form-group>
      <b-button block variant="primary" @click="submitSolution">送信</b-button>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  async fetch({store, params}){

    try {
      await store.dispatch('problem/detail/init', params.id)
    }catch(e){
      console.log("error")
    }

  },

  computed: {
      ...mapGetters('problem/detail', ['problem'])
  },

  data(){
    return{

      id: 0,
      form: {
        title: "",
        link: "",
        repository_url: "",
        note: ""
      }
    }
  },
  methods: {
     async submitSolution(e){

       await this.$store.dispatch('solution/create', {id: this.$route.params.id, body: this.form})
    }
  }
}
</script>

<style scoped>
</style>
