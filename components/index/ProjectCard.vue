<template>

  <div class="col-3 p-1">
    <div class="card" @click="goDetailPage">
      <img class="card-img-top" :src="project.images[0].url" alt="カードの画像">
      <div class="card-body">
        <h4 class="card-title font-weight-bold">{{project.name}}</h4>
        <div class="mb-2">
          <a class="badge badge-default mr-2" v-for="tag in project.tags" :key="tag.id" :href="`/language/${tag.name}`">{{tag.name}}</a>
        </div>
        <p class="card-text">{{project.copy}}</p>
      </div>
    </div>
  </div>

</template>

<script>

  export default {

    props: [
      'project'
    ],

    methods: {
      goDetailPage(){
        this.$router.push( `/projects/${this.project.id}`)
      }
    }

  }

</script>

<style scoped>

</style>
