<template>
<div id="app">
  <router-link :to="/">Home</router-link>
  <router-link :to="/article">Article</router-link>
  <router-view></router-view>
</div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style lang="stylus">
</style>