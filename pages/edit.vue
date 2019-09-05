<template>
<div class="container">
  <h3 class="font-weight-bold mt-4 mb-4">新規プロジェクト投稿</h3>
  <div class="form-group mb-4">
    <label>プロジェクト名</label>
    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="ex) 札幌保育園マップ">
  </div>
  <div class="form-group mb-4">
    <label>プロジェクト説明</label>
    <mavon-editor language="en"/>
  </div>
  <div class="form-group mb-4">
    <label>プロジェクト状態</label>
    <div class="form-check form-check-radio">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="exampleRadios" value="option1" >
        <span class="form-check-sign"></span>
        企画中
      </label>
    </div>
    <div class="form-check form-check-radio">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="exampleRadios" value="option1" >
        <span class="form-check-sign"></span>
        作成中
      </label>
    </div>
    <div class="form-check form-check-radio">
      <label class="form-check-label">
        <input class="form-check-input" type="radio" name="exampleRadios" value="option1" >
        <span class="form-check-sign"></span>
        リリース済
      </label>
    </div>
  </div>
  <div class="form-group mb-4">
    <label>Github Url</label>
    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="ex) https://github.com/codeforsapporo/papamama">
  </div>
  <div class="form-group mb-4">
    <label>コーディングポイント</label>
    <div class="row">
      <div class="col-2">
        <select class="form-control">
          <option>js</option>
        </select>
      </div>
      <div class="col-2">
        <select class="form-control">
          <option>js</option>
        </select>
      </div>
      <div class="col-2">
        <select class="form-control">
          <option>js</option>
        </select>
      </div>
    </div>

  </div>
  <div class="form-group mb-4">
    <label>Link</label>
    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="ex) http://papamama.codeforsapporo.org/">
  </div>
  <div class="form-group">
    <button class="btn btn-primary" @click="create">
      <i class="fab fa-pushed mr-2"></i>
      新規プロジェクトを投稿する
    </button>
  </div>
</div>
</template>

<script>

  export default {

    methods: {
      create(){
        this.$router.push('/')
      }
    }

  }
</script>

<style scoped>

</style>
