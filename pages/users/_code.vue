<template>
  <div class="container">
    <div class="d-flex align-items-center mt-4 mb-5">
      <img :src="`https://github.com/${user.github_id}.png`" class="rounded-circle mr-2" width="100"></img>
      <h3 class="text-dark mb-0">{{user.github_id}}</h3>
    </div>
    <h3 class="font-weight-bold">解決した課題一覧</h3>
    <div class="row">
      <problem-card v-for="solution in user.solutions" :key="solution.id" :problem="solution.problem"/>
    </div>
  </div>
</template>

<script>

  import ProblemCard from '~/components/user/ProblemCard.vue'
  import { mapGetters } from 'vuex'

  export default {

    async fetch({store}){
      await store.dispatch('user/init')
    },

    components: {
      ProblemCard
    },

    computed: {
      ...mapGetters('user', ['user'])
    }

  }
</script>

<style scoped>

</style>
