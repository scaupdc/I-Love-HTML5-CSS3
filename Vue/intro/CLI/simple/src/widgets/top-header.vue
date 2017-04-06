<template>
  <div id="top-header">
    <img src="../assets/nima.jpg">
    <ul>
      <li>
        <router-link to="/">article</router-link>
      </li>
      <li>
        <router-link to="/about">about</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style lang="css" scoped>
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    height:30px;
  }

  ul li {
    float: left;
    margin-right: 20px;
  }
</style>
