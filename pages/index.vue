<template>
  <div class="container mt-3">
    <div class="row">
      <project-card :id="1"/>
      <project-card :id="1"/>
      <project-card :id="1"/>
      <project-card :id="1"/>
      <project-card :id="1"/>
    </div>
  </div>
</template>

<script>

  import ProjectCard from '~/components/index/ProjectCard.vue'

  export default {

    components: {
      ProjectCard
    }
  }

</script>

<style>

</style>
