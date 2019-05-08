<template>
	<div class="body">
		<p>{{352.11 | toRMB}}</p>
		<p>{{657 | toRMB}}</p>
		<p>{{657.22 | toFixed }}</p>
		<p>{{money}}</p>
		<p>{{ money | toFixed }}</p>
		<p>{{ money | toFixed | toRMB }}</p>
	</div>
</template>
<script>
export default {
  data () {
    return {
      money: 826.26
    }
  },
  methods : {
  },
  filters: {
    toFixed: function(money) {
      return money.toFixed(0)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
	font-size:15px;
	line-height: 20px;
}
</style>
