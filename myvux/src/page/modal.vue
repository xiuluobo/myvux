<template>
  <div>
    <p>hello  {{modal_value}}</p>
    <input type="text" v-model="modal_value">
  </div>
</template>


<script>
import api from '../api/api.js'
	export default {
	    data () {
		    return {
		       modal_value: ''
		    }
	    },
	    mounted(){
	    },
	    methods:{
	        
	    }
	}
</script>