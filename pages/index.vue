<template>
  <div class="container mt-3">
    <div class="row">
      <project-card v-for="project in projects" :key="project.id" :project="project"/>
    </div>
  </div>
</template>

<script>

  import ProjectCard from '~/components/index/ProjectCard.vue'
  import { mapGetters } from 'vuex'

  export default {

    components: {
      ProjectCard
    },

    async fetch({store}){

      try {

        await store.dispatch('project/init')

      }catch(e){

        console.log("error")

      }

    },

    computed: {
      ...mapGetters('project', ['projects'])
    }
  }

</script>

<style>

</style>
