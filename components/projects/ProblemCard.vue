<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title font-weight-bold">生駒市の保育園情報をまとめたマップを作って欲しい</h4>
      <p>生駒市にも保育園が見つからずに悩む方がたくさんいます。生駒市の保育園情報をまとめたマップを作成し、問題を解決しましょう！</p>
      <button class="btn btn-primary" @click="goCreatePage">
        <i class="fas fa-terminal mr-2"></i>
        この問題を解決する！
      </button>
    </div>
  </div>
</template>

<script>
  export default {

    methods: {

      goCreatePage(){
        this.$router.push('/edit')
      }
    }

  }
</script>

<style>

</style>
