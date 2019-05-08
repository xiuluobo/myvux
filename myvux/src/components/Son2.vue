<template>
  <div class="hello">
      <p>{{message}}</p>
      <p>{{message2}}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  props:['message','message2']
}
</script>

<style scoped>

</style>