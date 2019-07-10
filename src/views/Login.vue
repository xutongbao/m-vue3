<template>
  <div class="m-login">
    <div class="m-login-row">
      <input class="m-login-row-input" type="input" v-model="username" placeholder="请输入用户名" />
    </div>
    <div class="m-login-row">
      <input class="m-login-row-input" type="password" v-model="password" placeholder="请输入密码" />
    </div>
    <div class="m-login-row">
      <button class="m-login-btn" @click="handleLogin()">登陆</button>
    </div>
  </div>
</template>

<script>
import Api from "@/api/index.js";

export default {
  name: "home",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      let data = {
        username: this.username,
        password: this.password
      };
      Api.login(data).then(res => {
        if (res.code === 200) {
          console.log("登陆成功");
          this.$router.push('/list')
        }
      });
      //console.log(this.username + ' ' + this.password)
    }
  }
};
</script>

<style scoped>
.m-login {
  margin: 0 20px;
  padding: 0;
}
.m-login-row {
  margin: 20px 0;
  height: 40px;
}
.m-login-row-input {
  width: 100%;
  height: 40px;
}
.m-login-btn {
  width: 100%;
  height: 40px;
}
</style>
