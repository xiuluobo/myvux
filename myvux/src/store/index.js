import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default  new Vuex.Store({
    state: {
        count:0
    },
    mutations: {
        INCREMENT(state) {
            state.count++;
        },
        DECREMENT(state) {
            state.count--
        },
        INCREMENT_WITH_VALUE(state, value){
            state.count +=value;
        }
    },
    getters:{
        show_value(state){//这里的state对应着上面这个state
            return state.count;
        }
    },
    actions: {
        increment(context){
            context.commit("INCREMENT")
        },
        decrement({commit}){
            commit("DECREMENT")
        },
        incrementWithValue({commit}, value){
            commit("INCREMENT_WITH_VALUE",  parseInt(value))
        }
    }
})
// 简写，解构
// increment({commit}){
//     commit("INCREMENT")
// },
 