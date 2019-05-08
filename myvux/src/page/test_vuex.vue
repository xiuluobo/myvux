<template>
    <div>
        <p>hello  {{modal_value}}</p>
        <p>hello2  {{modal_value2}}</p>
        <p>hello3  {{modal_value3}}</p>
        <input type="text" v-model="modal_value">
        <br/>
        <input type="text" v-model.lazy="modal_value2">
        <br/>
        <input type="text" v-model.number="modal_value3">
    </div>
</template>


<script>
import api from '../api/api.js'
	export default {
	    data () {
		    return {
               modal_value: '11',
               modal_value2: '11',
               modal_value3: '11'
		    }
	    },
	    mounted(){
	    },
	    methods:{
	        
	    }
	}
</script>