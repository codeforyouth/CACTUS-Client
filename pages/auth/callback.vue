
<template>
  <div>

  </div>
</template>

<script>
  export default {
    async fetch({store, route, redirect}){

      try {
        await store.dispatch('auth/callback', route.query)
        return redirect('/')
      }catch(e){
        return redirect('/auth/login')
      }
    }

  }
</script>

<style scoped>
</style>
