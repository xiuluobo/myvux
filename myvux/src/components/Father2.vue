<template>
  <div>
    父组件:
    <span>{{name}}</span>
    <br>
    <br>
    <!-- 引入子组件 定义一个on的方法监听子组件的状态-->
    <son4 v-on:childByValue="childByValue"></son4>
  </div>
</template>
<script>
  import Son4 from './Son4'
  export default {
    components: {
      Son4
    },
    data () {
      return {
        name: ''
      }
    },
    methods: {
      childByValue: function (childValue) {
        // childValue就是子组件传过来的值
        this.name = childValue
      }
    }
  }
</script>