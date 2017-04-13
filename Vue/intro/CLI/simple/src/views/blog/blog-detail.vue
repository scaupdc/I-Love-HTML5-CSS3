<template>
  <div id="blog-detail-div">
    <h1>{{this.$route.params.blogid}}-title</h1>
    <h6>time</h6>
    <article>content</article>
  </div>
</template>

<script>
  export default {
    name: 'blog-detail'
  }
</script>

<style scoped>
  #blog-detail-div {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
