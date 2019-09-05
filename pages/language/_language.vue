<template>
  <div>
    <section class="bg-warning">
      <div class="container">
        <div class="row">
          <div class="col-4 p-5">
            <img class="card-img-top" src="https://www.terakoya.work/wp-content/uploads/2017/04/javascript.jpg" alt="カードの画像">
          </div>
          <div class="col-8 bg-warning p-5 align-middle">
            <div class="d-flex align-items-center mb-4">
              <h2 class="font-weight-bold text-white mb-0 mr-2">JavaScript</h2>
            </div>
            <p class="text-white">Webサイトに動きをつけるための言語です。最近ではVueやReactなどのフレームワークを使った開発も盛ん！</p>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-3">
      <h3 class="font-weight-bold mt-5 mb-4">JavaScriptを使ったプロジェクト一覧</h3>
      <div class="row">
        <project-card :id="1"/>
        <project-card :id="1"/>
        <project-card :id="1"/>
        <project-card :id="1"/>
        <project-card :id="1"/>
      </div>
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
