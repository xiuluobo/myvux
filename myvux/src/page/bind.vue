<template>
    <div>
        <header>bind组件</header>
        <header>bind组件2</header>
        <div :class="{'on':miao1on}" class="test">{{miao}}</div>
        <div>{{miao}}</div>
        <button @click="getData()">fdfff</button>
    </div>
</template>


<script>
import api from '../api/api.js'
export default {
    data () {
        return {
            miao:"miao",
            miao1on: true,  
        }
    },
    mounted(){
        
    },
    methods:{
        getData(){
            console.log(this.miao)
        }
    }
}
</script>
<style scoped lang="less">
    .is-active{
        color:red;
    }
    .text-danger{
        color:blue;
    }
    .test{
        color:#ddd;
    }

</style>