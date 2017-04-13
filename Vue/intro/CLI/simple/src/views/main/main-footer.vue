<template>
  <div id="main-footer-div">
    <div id="content">
      <span class="text-smaller">Powered by
        <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
        &
        <a href="https://www.iviewui.com/" target="_blank">iView</a>
      </span>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'main-footer'
  }
</script>

<style scoped>
  #main-footer-div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #content {
    text-align: center;
    font-size: 12px;
    color: #222222;
  }

  #content a {
    color: #222222;
  }
</style>
