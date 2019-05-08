<template>
  <div>
    子组件:
    <span>{{aaa}}</span>
  </div>
</template>


<script>
import api from '../api/api.js'
  export default {
    data () {
      return {
        aaa: '我是axios的数据'
      }
    },
    mounted(){
        this.initData();
    },
    methods:{
        initData(){
            const that = this;
            api.getJson("https://www.apiopen.top/journalismApi").then(res=>{
                if(res){
                   console.log(res);
                   that.$vux.toast.text("axios");
                }
                else{
                    that.$vux.toast.text("axioserror");
                }
            });
            // if(!this.token&&!this.openId){
            //     const loginSta = this.$route.query.loginSta;
            //     api.loginStaApi(loginSta)
            //     .then((res)=>{
            //         if(res){
            //             if(res.result.hasOwnProperty('token'))store.dispatch('setToken',res.result.token);
            //             if(res.result.hasOwnProperty('openId'))store.dispatch('setOpenId',res.result.openId);
            //             if(res.result.hasOwnProperty('nickName'))store.dispatch('setNickName',res.result.nickName);
            //             if(res.result.hasOwnProperty('avatar')){store.dispatch('setAcatar',res.result.avatar)};
            //             if(res.result.hasOwnProperty('phoneNum')){store.dispatch('setTel',res.result.phoneNum)};
            //         }
            //         else{
            //             layer.open({
            //               content: '登录失败，请重新登录',
            //               btn: '确定'
            //           });
            //         }
            //     })
            // }
        }
    }
  }
</script>