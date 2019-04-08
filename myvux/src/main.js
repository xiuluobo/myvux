import Vue from 'vue'
import App from './App'
import router from './router'
import  { ToastPlugin } from "vux"
import  { LoadingPlugin } from 'vux'

Vue.use(ToastPlugin)
Vue.use(LoadingPlugin)


Vue.config.productionTip = false




Vue.prototype.changeJump=function(path,query){
    this.$router.push({
        path,
        query,
    })
}

  

new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>'
})
