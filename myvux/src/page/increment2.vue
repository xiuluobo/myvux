<template>
    <div>
        <div>
            <button @click="increment">+1</button>
            <button @click="decrement">-1</button>
        </div>
        <div>
            <h2>{{show_value}}</h2>
            <h2>{{aiya}}</h2>
            <h2>{{aiya2()}}</h2>
            <input type="text" v-model="incrementValue">
            <button @click="incrementWithValue">increment</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                incrementValue: 0
            }
        },
        computed:{
            aiya(){
                return "aiya"
            },
            show_value(){
                return this.$store.state.count;
            }
        },
        methods: {
            aiya2(){
                return "aiya2"
            },
            increment(){
                this.$store.dispatch("increment")
            },
            decrement(){
                this.$store.dispatch("decrement")
            },
            incrementWithValue() {
                this.$store.dispatch("incrementWithValue", this.incrementValue)
            }
        }
    }
</script>