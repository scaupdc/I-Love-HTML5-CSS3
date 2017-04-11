<template>
  <div id="dashboard-index-div">
    <div id="dashboard-left-div">
      <dashboard-menu></dashboard-menu>
    </div>
    <div id="dashboard-right-div">
      <router-view name="dashboard"></router-view>
    </div>
  </div>
</template>

<script>
  import dashboardMenu from './dashboard-menu.vue'
  export default {
    name: 'dashboard-index',
    components: {
      dashboardMenu
    }
  }
</script>

<style scoped>
  #dashboard-index-div {
    display: flex;
    flex: 1;
    flex-direction: row;
  }

  #dashboard-left-div {
    width: 240px;
    background-color: #313540;
  }

  #dashboard-right-div {
    display: flex;
    flex: 1;
    background-color: white;
  }
</style>
