<template>
  <div>
    <section :style="{backgroundColor: tag.color}">
      <div class="container">
        <div class="row">
          <div class="col-4 p-5">
            <img class="card-img-top" :src="tag.img_url" alt="カードの画像">
          </div>
          <div class="col-8 p-5 align-middle" :style="{backgroundColor: tag.color}">
            <div class="d-flex align-items-center mb-4">
              <h2 class="font-weight-bold text-white mb-0 mr-2">{{tag.name}}</h2>
            </div>
            <p class="text-white">{{tag.description}}</p>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-3">
      <h3 class="font-weight-bold mt-5 mb-4">{{tag.name}}を使ったプロジェクト一覧</h3>
      <div class="row">
        <project-card v-for="project in tag.projects" :key="project.id" :project="project"/>
      </div>
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

    async fetch({store, route}){

      try {

        await store.dispatch('tag/init', route.params.language)

      }catch(e){

        console.log("error")

      }

    },

    computed: {
      ...mapGetters('tag', ['tag'])
    }

  }

</script>

<style scoped>

</style>
