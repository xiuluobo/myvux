import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './api/api.js'
import  { ToastPlugin } from "vux"
import  { LoadingPlugin } from 'vux'

//使用vconsole
import Vconsole from 'vconsole';
const vConsole = new Vconsole();
Vue.use(vConsole)


Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)


Vue.config.productionTip = false
// import axios from 'axios'
// Vue.prototype.$ajax = axios
Vue.prototype.changeJump=function(path,query){
    this.$router.push({
        path,
        query,
    })
}
//指令 全局
Vue.directive('hello', {
    bind:function (el, binding) {
        //el.style["color"]= binding.value;
        var color = Math.floor(Math.random()*1000000);
        el.style.backgroundColor = "#" + color; 
    }
  })


Vue.filter('toRMB', function (value) {
  return `￥${value}`
})
/*Vue.filter('toFixed', function (money) {
  return money.toFixed(1)
})*/
new Vue({
  el: '#app',
  components: { App },
  store,
  router,
  template: '<App/>'
  /*
  	局部注册
   filters: {
    toFixed: function(money) {
      return money.toFixed(1)
    },
  },*/
  // 组件创建前，进行异步数据数据请求
//   beforeCreate() {
//     this.$store.dispatch('getAllData', this)
//   }
})
