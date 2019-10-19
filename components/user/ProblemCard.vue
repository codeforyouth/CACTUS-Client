<template>
  <div class="card" @click="goIssuePage">
    <div class="card-body">
      <h4 class="card-title font-weight-bold">{{problem.title}}</h4>
      <p>{{problem.descripton}}</p>
    </div>
  </div>
</template>

<script>
  export default {

    props: [
      'problem',
    ],

    methods: {
      goIssuePage(e){
        e.preventDefault();
        this.$router.push( `/issues/${this.problem.id}`)
      }
    }

  }
</script>

<style>

</style>
