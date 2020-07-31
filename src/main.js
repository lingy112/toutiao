import Vue from 'vue'
// 引入app组件
import App from './App.vue'
//引入 vue-router 路由
import router from './router'
// 引入 vuex 的配置
import store from './store' 


import Vue2Editor from "vue2-editor";

// 引入axios
import axios from "./common/myaxios"
 // 2 在 vue的原型 上添加 axios 
Vue.prototype.$axios = axios ; 

Vue.use(Vue2Editor);

Vue.config.productionTip = false
//创建一个 vue 的实例
new Vue({
  router, //vue - router
  store,//vue x
  render: h => h(App) // 将 App 组件 渲染到 '#app'
}).$mount('#app')
