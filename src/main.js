import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from './env'

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000; // 超时一定要设置
// 根据环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL
// 接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data
  if (res.status == 0) {
    return res.data
  } else if (res.status == 10) { // 未登录的时候跳转到登陆的界面
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
