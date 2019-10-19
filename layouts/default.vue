<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-primary mb-0">
      <div class="container">
        <a href="/" class="nav-brand">
          <img src="https://fontmeme.com/permalink/190825/d1fedb6ba99c6950dcc7a8f51f0ad212.png" border="0" class="mr-2" width="70">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <form class="form-inline ml-auto" data-background-color>
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
              <input type="text" class="form-control" placeholder="プロジェクトを検索">
            </div>
          </form>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">プロジェクト一覧</a>
            </li>
            <li class="nav-item" v-if="token">
              <a class="nav-link" href="/users/code">ユーザー情報</a>
            </li>
            <li class="nav-item" v-if="token">
              <a class="nav-link" @click="logout">LOGOUT</a>
            </li>
            <li class="nav-item" v-else>
              <a class="nav-link" href="/auth/login">LOGIN</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
  export default {
    computed: {
      token(){
        return this.$store.state.auth.cookies.token
      }
    },
    methods: {
      async logout(){
        await this.$store.dispatch('auth/logout')
      }
    }
  }
</script>

<style>
</style>
