<template>
  <div class="m-login">
    <div class="m-title">用户注册</div>
    <div class="m-login-row">
      <input class="m-login-row-input" type="input" v-model="username" placeholder="请输入用户名" autoComplete="off"/>
    </div>
    <div class="m-login-row">
      <input class="m-login-row-input" type="password" v-model="password" placeholder="请输入密码" autoComplete="off"/>
    </div>
    <div class="m-login-row">
      <input class="m-login-row-input" type="password" v-model="confirmPassword" placeholder="请再次输入密码" autoComplete="off"/>
    </div>    
    <div class="m-login-row">
      <button class="m-login-btn" @click="handleRegister()">立即注册</button>
    </div>
  </div>
</template>

<script>
import Api from "@/api/index.js";
import { jsEncrypt } from '@/utils/index.js';

export default {
  name: "home",
  data() {
    return {
      username: "",
      password: "",
      confirmPassword: ''
    };
  },
  methods: {
    handleRegister() {
      if (this.username === '') {
        alert('用户名不能为空')
        return
      }
      if (this.password !== this.confirmPassword) {
        alert('两次输入的密码不一致')
        return
      }
      let temp = jsEncrypt(this.password)       
      console.log(temp)
      let data = {
        username: this.username,
        password: jsEncrypt(this.password)
      };
      Api.register(data).then(res => {
        if (res.code === 200) {
          console.log("注册成功");
          this.$router.push('/login')
        }
      });
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
.m-title{font-size: 24px;color: #aaaaaa; text-align: center;}
</style>
