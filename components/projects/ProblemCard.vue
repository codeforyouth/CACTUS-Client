<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title font-weight-bold">{{problem.title}}</h4>
      <p>{{problem.descripton}}</p>
      <button class="btn btn-outline-primary">
        <i class="fas fa-terminal mr-2"></i>
        解決完了！
      </button>
    </div>
  </div>
</template>

<script>
  export default {

    props: [
      'problem',
    ]

  }
</script>

<style>

</style>
