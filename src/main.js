import Vue from 'vue'
import App from './App.vue'
import './assets/css/common.less'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false


// 根据环境变量决定是否引入mock
console.log(process.env.NODE_ENV,process.env.VUE_APP_BACK_END_URL,!process.env.VUE_APP_BACK_END_URL)
if (process.env.NODE_ENV !== 'production' && !process.env.VUE_APP_BACK_END_URL) {
  const Mock = require('./mock/index').default
  Mock.mockData()
} 


 
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
