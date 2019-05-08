<template>
  <div class="hello">
      <p>子组件部分</p>
      <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  props:['message']
}
</script>

<style scoped>

</style>