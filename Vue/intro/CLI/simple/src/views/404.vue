<template>
  <div id="error-page-div">
    <img src="../assets/404.jpg">
    <el-button type="text" @click="handleBack">返回首页</el-button>
  </div>
</template>

<script>
  export default {
    name: 'error-page',
    methods: {
      handleBack(){
        this.$router.push('/index')
      }
    }
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
