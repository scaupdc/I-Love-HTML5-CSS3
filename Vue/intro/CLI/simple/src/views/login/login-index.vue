<template>
  <div id="login-index-div">
    <Card dis-hover style="width: 400px;">
      <p slot="title">请先登录</p>
      <p class="input-p">
        <Icon type="person"></Icon>
        <Input v-model.trim="userName" placeholder="请输入账号"></Input></p>
      <p class="input-p">
        <Icon type="locked"></Icon>
        <Input v-model.trim="password" placeholder="请输入密码" type="password"></Input></p>
      <Button type="primary" :loading="loading" @click="login">
        <span v-if="!loading">登 录</span>
        <span v-else>loading...</span>
      </Button>
    </Card>
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
            this.$store.dispatch('login',user)
            vmThis.$router.push({name: 'index'})
          }, 1500);
        } else {
          this.$Message.warning('账号密码不能为空');
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

  .input-p {
    display: flex;
    align-items: center;
  }

  .input-p i {
    margin-right: 10px;
  }

  .input-p {
    margin-bottom: 15px;
  }

  button {
    width: 100%;
  }
</style>
