<template>
  <div>
    <section class="bg-info">
      <div class="container">
        <div class="row">
          <div class="col-4 p-5">
            <img class="card-img-top" :src="project.images[0].url" alt="カードの画像">
          </div>
          <div class="col-8 bg-info p-5 align-middle">
            <div class="d-flex align-items-center mb-4">
              <h2 class="font-weight-bold text-white mb-0 mr-2">{{project.name}}</h2>
              <span class="badge badge-primary">{{statusDescription(project.status)}}</span>
            </div>
            <p class="text-white">{{project.copy}}</p>
            <div>
              <a class="badge" v-for="tag in project.tags" :href="`/language/${tag.name}`">{{tag.name}}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div>
      <b-tabs content-class="mt-3" align="center">
        <b-tab title="プロジェクト概要" active>
          <div class="container">
            <div class="mb-5">
              <h3 class="font-weight-bold">プロジェクト概要</h3>
              <h4 class="font-weight-bold">解決したい課題</h4>
              <p>{{project.problem}}</p>
              <h4 class="font-weight-bold">サービス概要</h4>
              <p>{{project.solution}}</p>
              <h4 class="font-weight-bold">今後の課題</h4>
              <p>{{project.todo}}</p>
            </div>

            <div class="mb-5">
              <h3 class="font-weight-bold">参考URL</h3>
              <a :href="project.link">{{project.name}}</a>
            </div>

          </div>
        </b-tab>
        <b-tab title="課題">
          <div class="container">
            <problem-card v-for="problem in project.problems" :problem="problem"/>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>


</template>


<script>
  import CodingPoint from '~/components/projects/CodingPoint.vue'
  import ProblemCard from '~/components/projects/ProblemCard.vue'
  import ReviewCard from '~/components/projects/ReviewCard.vue'

  import { mapGetters } from 'vuex'

  export default {


    async fetch({store, params}){

      try {

        await store.dispatch('project/detail/init', params.id)

      }catch(e){

        console.log("error")

      }

    },

    components: {
      CodingPoint,
      ProblemCard,
      ReviewCard
    },

    methods: {

      statusDescription(status_code){

        switch (status_code) {
          case "PLANNIG":
            return "構想中"
            break
          case "CODING":
            return "実装中"
            break
          case "RELEASE":
            return "リリース済"
            break
          default:
            return "その他"


        }
      }
    },

    computed: {
      ...mapGetters('project/detail', ['project'])
    }



  }
</script>

<style scoped>

</style>
