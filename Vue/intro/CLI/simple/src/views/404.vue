<template>
  <div id="error-page-div">
    <img src="../assets/404.jpg">
    <router-link :to="{name:'index'}">返回首页</router-link>
  </div>
</template>

<script>
  export default {
    name: 'error-page'
  }
</script>

<style scoped>
  #error-page-div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 400px;
  }
</style>
