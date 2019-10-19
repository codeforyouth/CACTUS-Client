<template>
  <div class="container">
    <div class="d-flex align-items-center mt-4 mb-5">
      <img src="https://github.com/nakao107107.png" class="rounded-circle mr-2" width="100"></img>
      <h3 class="text-dark mb-0">nakao107107</h3>
    </div>
    <h3 class="font-weight-bold">作成プロジェクト一覧</h3>
    <div class="row">
      <!--<project-card :id="1"/>-->
      <!--<project-card :id="1"/>-->
      <!--<project-card :id="1"/>-->
      <!--<project-card :id="1"/>-->
      <!--<project-card :id="1"/>-->
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

<style scoped>

</style>
