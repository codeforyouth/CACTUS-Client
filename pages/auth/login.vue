<template>
  <div class="container d-flex justify-content-center">
    <button @click="login" class="btn btn-black btn-round"><i class="fab fa-github mr-2"></i>Login with github</button>
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
