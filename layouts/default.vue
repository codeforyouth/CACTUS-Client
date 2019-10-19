<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-white mb-0">
      <div class="container">
        <a href="/" class="nav-brand">
          <div class="bg-primary p-2">
            <span class="font-weight-bold text-white">CACTUS</span>
          </div>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <form class="form-inline ml-auto">
            <div class="input-group mt-1">
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
    <no-ssr>
      <notifications width="100%" position="bottom"/>
    </no-ssr>
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
