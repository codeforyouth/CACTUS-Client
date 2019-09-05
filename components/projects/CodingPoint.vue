<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title font-weight-bold">座標表示</h4>
      <a href="https://github.com/codeforsapporo/papamama/blob/master/js/papamamap.js#L19">/js/papamamap.js</a>
      <p>座標表示は以下のコードで実現しています.</p>
      <div class="container bg-light">
        <pre>
          <code>
             new ol.layer.Vector({
                 source: new ol.source.GeoJSON({
                     projection: 'EPSG:3857',
                     url: 'data/Elementary.geojson'
                 }),
                 name: 'layerElementarySchool',
                 style: elementaryStyleFunction,
             })
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
