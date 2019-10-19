<template>
  <div class="container p-5 mt-5">
    <div class="p-4" />
    <div class="justify-content-center align-items-center text-center p-5 mt-5">
      <h1 class="font-weight-bold">🌵 Login to CACTUS 🌵</h1>
      <button @click="login" class="btn btn-black btn-round btn-lg"><i class="fab fa-github mr-2"></i>Login with github</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      async login(){
        this.$router.push('/auth/redirect')
      }
    },

  }
</script>

<style scoped>
</style>
