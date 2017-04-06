<template>
  <div id="article-detail">
    <h3><span>[{{$route.params.id}}]</span><span>{{$route.params.model.title}}</span></h3>
    <p>{{$route.params.model.time}}</p>
    <article>{{$route.params.model.content}}</article>
  </div>
</template>

<script>
  export default {
    name: 'article-detail'
  }
</script>

<style lang="css" scoped>
  p {
    font-size: 10px;
  }
</style>
