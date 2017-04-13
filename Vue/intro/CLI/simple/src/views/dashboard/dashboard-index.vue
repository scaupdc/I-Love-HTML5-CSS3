<template>
  <div id="dashboard-index-div">
    <div id="dashboard-left-div">
      <el-menu class="el-menu-vertical-demo" theme="dark" :default-active="getActiveMenu" @select="handleSelect">
        <template v-for="n in 2">
          <el-submenu :index="String(n)">
            <template slot="title"><i class="el-icon-message"></i>报表管理{{n}}</template>
            <template v-for="m in 2">
              <el-menu-item :index="n + '-' + m">报表管理{{n}}-{{m}}</el-menu-item>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </div>
    <div id="dashboard-right-div">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  const pathHeader = '/index/dashboard-'
  export default {
    name: 'dashboard-index',
    methods: {
      handleSelect(key, keyPath) {
        this.$router.push(pathHeader + key)
      }
    },
    computed: {
      getActiveMenu () {
        var path = this.$route.path.toLocaleLowerCase()
        if (path.indexOf(pathHeader) == 0) {
          return path.substring(pathHeader.length)
        } else {
          return "-1"
        }
      }
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
    background-color: #1f2d3d;
  }

  #dashboard-right-div {
    display: flex;
    flex: 1;
    background-color: white;
  }
</style>
