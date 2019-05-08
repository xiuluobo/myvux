<template>
    <div id="app">
        <div>deat</div>
        <son msg-father="dad无可奉告"></son>
        <son2 message="dfadfafads"  message2="dfadfafads2"></son2>
        <son3 v-bind:message="pmsg"></son3>
        <!-- 这里的message是子组件props接收的 -->
    </div>
</template>

<script>
  import Son from  './Son'
  import Son2 from  './Son2'
  import Son3 from  './Son3'
  export default {
    name: 'app',
    data(){
        return{
            pmsg: {
                name:"xihuan"
            }
        }
    },
    components:{
      Son,Son2,Son3
    }
  }
</script>


<style>
  
</style>