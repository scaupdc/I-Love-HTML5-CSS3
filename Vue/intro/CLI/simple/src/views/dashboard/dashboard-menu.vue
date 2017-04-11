<template>
  <Menu theme="dark" @on-select="onSelectMenu" :active-name="getActiveName" :open-names="getOpenNames">
    <template v-for="n in 2">
      <Submenu :name="String(n)">
        <template slot="title">
          <Icon type="ios-paper"></Icon>
          <span>报表管理{{n}}</span>
        </template>
        <template v-for="m in 2">
          <Menu-item :name="n + '-' + m">报表管理{{n}}-{{m}}</Menu-item>
        </template>
      </Submenu>
    </template>
  </Menu>
</template>

<script>
  const pathHeader = '/index/dashboard-'
  export default {
    name: 'dashboard-menu',
    methods: {
      onSelectMenu (key) {
        this.$router.push(pathHeader + key)
      }
    },
    computed: {
      getActiveName () {
        var path = this.$route.path.toLocaleLowerCase()
        if (path.indexOf(pathHeader) == 0) {
          return path.substring(pathHeader.length)
        } else {
          return -1
        }
      },
      getOpenNames () {
        var path = this.$route.path.toLocaleLowerCase()
        if (path.indexOf(pathHeader) == 0) {
          return [path.substring(pathHeader.length, pathHeader.length + 1)]
        } else {
          return []
        }
      },
    }
  }
</script>

<style scoped>

</style>
