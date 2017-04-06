<template>
  <div id="app">
    <top-header></top-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import topHeader from './widgets/top-header.vue'
  export default {
    name: 'app',
    components: {
      topHeader
    }
  }
</script>

<style>
  #app {
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
