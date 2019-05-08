<template>
    <div>
        <div>
            <button @click="increment">+1</button>
            <button @click="decrement">-1</button>
        </div>
        <div>
            <h2>{{show_value}}</h2>
            <input type="text" v-model="incrementValue">
            <button @click="incrementWithValue">increment</button>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations,mapActions } from 'vuex'
    export default {
        data() {
            return {
                incrementValue: 0
            }
        },
        computed:{
            ...mapGetters(['show_value']),
        },
        methods: {
            ...mapActions(["increment","decrement"]),
            incrementWithValue() {
                this.$store.dispatch("incrementWithValue", this.incrementValue)
            }
        }
    }
</script>