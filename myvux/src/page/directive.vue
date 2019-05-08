<template>
    <div id="app">
       <span v-hello="">{{message}}</span>
       <button @click="add"> 点击开始加1</button>
   </div>
</template>


<script>
import api from '../api/api.js'
	export default {
	    data () {
		    return {
              message:"喜欢"
		    }
	    },
	    mounted(){
	    },
	    methods:{
	        add(){
                console.log(0);
            }
	    }
	}
</script>