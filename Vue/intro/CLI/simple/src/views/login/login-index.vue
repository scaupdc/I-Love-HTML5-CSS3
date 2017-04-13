<template>
  <div id="login-index-div">
    <el-card class="box-card" style="width: 440px;">
      <div slot="header" class="clearfix">
        <h3 style="line-height: 30px;">请登录</h3>
      </div>
      <el-input v-model.trim="userName" placeholder="请输入账号" style="margin-bottom: 15px;"></el-input>
      <el-input v-model.trim="password" placeholder="请输入密码" type="password" style="margin-bottom: 15px;"></el-input>
      <el-button type="primary" :loading="loading" @click="login" style="width: 100%;">{{buttonTitle}}</el-button>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'login-index',
    data(){
      return {
        userName: '',
        password: '',
        loading: false
      }
    },
    computed: {
      buttonTitle(){
        return this.loading ? 'loading...' : '登 录'
      }
    },
    methods: {
      login(){
        if (this.userName.length && this.password.length) {
          this.loading = true
          let vmThis = this
          setTimeout(() => {
            vmThis.loading = false
            let user = {
              userName: vmThis.userName,
              password: vmThis.password
            }
            vmThis.loading = false
            this.$store.dispatch('login', user)
            vmThis.$router.push({name: 'index'})
          }, 1500);
        } else {
          this.$message({
            message: '账号和密码不能为空',
            type: 'warning'
          });
        }
      }
    }
  }
</script>

<style scoped>
  #login-index-div {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
</style>
