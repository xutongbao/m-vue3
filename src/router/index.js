import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import List from '@/views/List.vue'
import Register from '@/views/Register.vue'
import ForgotPassword from '@/views/ForgotPassword.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: '/login'
    },    
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },    
    {
      path: '/register',
      name: 'register',
      component: Register
    },   
    {
      path: '/forgot_password',
      name: 'forgot_password',
      component: ForgotPassword
    },         
  ]
})
