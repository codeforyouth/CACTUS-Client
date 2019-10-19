<template>
  <div class="container">
    <div class="mb-5">
      <h3 class="font-weight-bold title mt-5">タイトル</h3>
      <p>タイトルここ</p>
      <h4 class="font-weight-bold">問題点</h4>
      <p>問題点ここ</p>
      <h4 class="font-weight-bold">実現したいこと</h4>
      <p>実現したいことここ</p>
      <h4 class="font-weight-bold">ヒント</h4>
      <p>ヒントここ</p>
    </div>
    <b-button v-b-modal.modal-1 class="btn btn-primary"><i class="fas fa-dove mr-2">解決報告</b-button>
    <b-modal id="modal-1" title="ソリューション投稿" hide-footer centered>
      <b-form-group id="input-group-1" label="タイトル:" label-for="input-1">
        <b-form-input type="text" placeholder="title" v-model="form.title"/>
      </b-form-group>
      <b-form-group id="input-group-2" label="プロジェクトのリンク:" label-for="input-2">
        <b-form-input type="text" placeholder="link" v-model="form.link"/>
      </b-form-group>
      <b-form-group id="input-group-3" label="Github URL:" label-for="input-3">
        <b-form-input type="text" placeholder="repositoryUrl" v-model="form.repositoryUrl"/>
      </b-form-group>
      <b-form-group id="input-group-4" label="メモ:" label-for="input-4" class="mb-5">
        <b-form-input type="text" placeholder="note" v-model="form.note"/>
      </b-form-group>
      <b-button block variant="primary" @click="submitSolution">送信</b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form: {
        title: "",
        link: "",
        repositoryUrl: "",
        note: ""
      }
    }
  },
  methods: {
    submitSolution(e){
      e.preventDefault();
      console.log("this is title: ", this.form.title)
      console.log("this is link: ", this.form.link)
      console.log("this is repositoryUrl: ", this.form.repositoryUrl)
      console.log("this is note: ", this.form.note)
    }
  }
}
</script>

<style scoped>
</style>
