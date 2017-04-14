<template>
  <div id="main-header-div">
    <div id="left">
      <div id="logo">ANNTO</div>
      <ul id="menu" v-show="isLogin">
        <!--备注：这里的路由写法比较特殊，在这个场景中，to和:to产生的路由激活效果是不一致的-->
        <!--如下，如果采用注释中的路由跳转写法，当进入二级页面时，顶部的li菜单的激活效果会失效，原因未知-->
        <li>
          <!--<router-link :to="{name:'index'}" exact>仪表盘</router-link>-->
          <router-link to="/index">仪表盘</router-link>
        </li>
        <li>
          <router-link :to="{name:'blog'}">博客</router-link>
          <!--<router-link to="/blog" exact>博客</router-link>-->
        </li>
      </ul>
    </div>
    <div id="right">

      <span class="right-text">{{showUserName}}</span>

      <template v-if="isLogin">
        <el-button type="text" @click="handleLogout" style="color: white">注销</el-button>
      </template>

      <template v-else>
        <el-button type="text" @click="handleLogin" style="color: white">登录</el-button>
      </template>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'main-header',
    data(){
      return {
        logoutModel: false
      }
    },
    computed: {
      isLogin(){
        return this.$store.state.auth
      },
      showUserName(){
        if (this.$store.state.auth) {
          return this.$store.state.user.userName
        } else {
          return '未登录'
        }
      }
    },

    methods: {
      handleLogin () {
        this.$router.push({name: 'login-index'})
      },
      handleLogout(){
        this.$confirm('确定退出登录？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => {
          this.$store.dispatch('logout')
          if (!this.$store.state.auth) {
            this.$router.push({name: 'login-index'})
          }
        }).catch(() => {

        })
      }
    }
  }
</script>

<style scoped>

  #main-header-div {
    flex: 1;
    background-color: #42b983;
    display: flex;
    justify-content: space-between;
  }

  #left {
    margin-left: 50px;
    display: flex;
  }

  #right {
    margin-right: 50px;
    display: flex;
    align-items: center;
  }

  #right i {
    font-size: 18px;
    color: white;
  }

  .right-text {
    margin-right: 10px;
    color: white;
    font-size: 14px;
  }

  #logo {
    color: white;
    font-size: large;
    font-weight: bold;
    line-height: 44px;
    margin-right: 40px;
  }

  #menu {
    padding: 0;
    margin: 0;
    display: inline-block;
    list-style-type: none;
  }

  #menu li {
    float: left;
  }

  #menu li a {
    display: block;
    line-height: 44px;
    font-size: 17px;
    color: #222222;
    text-decoration: none;
  }

  #menu li a:hover {
    color: white;
  }

  .router-link-active {
    color: white !important;
  }

  #menu li:first-child {
    margin-right: 20px;
  }

  .right-text {
    color: #222222;
  }
</style>
