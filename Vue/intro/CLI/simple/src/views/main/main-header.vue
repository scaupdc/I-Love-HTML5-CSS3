<template>
  <div id="main-header-div">
    <div id="left">
      <div id="logo">ANNTO</div>
      <ul id="menu" v-show="isLogin">
        <li>
          <router-link :to="{name:'index'}">仪表盘</router-link>
        </li>
        <li>
          <router-link :to="{name:'blog'}">博客</router-link>
        </li>
      </ul>
    </div>
    <div id="right">

      <span class="right-text">{{showUserName}}</span>

      <template v-if="isLogin">
        <a @click="logoutModel = true">
          <Icon type="log-out" size="18" color="white"></Icon>
        </a>
        <Modal
          v-model="logoutModel"
          title="退出当前账号？"
          @on-ok="logout">
          <p>您确定要退出当前账号？</p>
        </Modal>
      </template>

      <template v-else>
        <a @click="login">
          <Icon type="log-in" size="18" color="white"></Icon>
        </a>
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
      login () {
        this.$router.push({name: 'login-index'})
      },
      logout(){
        this.$store.dispatch('logout')
        if (!this.$store.state.auth) {
          this.$router.push({name: 'login-index'})
        }
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

  #right a {
    font-size: 18px;
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
    display: inline-block;
  }

  #menu li {
    float: left;
  }

  #menu li a {
    display: block;
    line-height: 44px;
    font-size: 17px;
    color: #222222;
  }

  #menu li a:hover {
    color: white;
  }

  .router-link-active {
    color: white !important;
    font-weight: bold;
  }

  #menu li:first-child {
    margin-right: 20px;
  }

</style>
