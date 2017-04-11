<template>
  <div id="main-index-div">
    <div id="header">
      <main-header></main-header>
    </div>
    <div id="content">
      <keep-alive>
        <router-view name="main"></router-view>
      </keep-alive>
    </div>
    <div id="footer">
      <main-footer></main-footer>
    </div>
  </div>
</template>

<script>
  import mainHeader from './main-header.vue'
  import mainFooter from './main-footer.vue'
  export default {
    name: 'main-index',
    components: {
      mainHeader,
      mainFooter
    }
  }
</script>

<style scoped>
  #header {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    height: 44px;
    width: 100%;
    display: flex;
  }

  #footer {
    height: 44px;
    width: 100%;
    display: flex;
  }

  #content {
    align-items: stretch;
    margin-top: 44px;
    min-height: 500px;
    width: 100%;
    display: flex;
    background-color: white;
  }
</style>
