import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from './env'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
import './assets/scss/config.scss'
import './assets/scss/reset.scss'
// mock开关
const mock = true; // 只有mock为true的时候才会被加载，其他的时候是不会被加载的
if (mock) {
  require('./mock/api.js')
}
// 根据前端的跨域的不同进行调整
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000; // 超时一定要设置
// 根据环境变量获取不同的请求地址
axios.defaults.baseURL = env.baseURL
// 接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data
  if (res.status == 0) { // 如果status == 0的时候表示成功
    return res.data
  } else if (res.status == 10) { // 未登录的时候跳转到登陆的界面 // 在公司一般规定的是1008
    window.location.href = '/#/login'
  } else {
    alert(res.msg) //elementUI的时候在改
  }
})



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
