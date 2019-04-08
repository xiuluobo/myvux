import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Person from '@/components/Person'
import Main from '@/components/Main'

// 引入vux
import vux from "./vux.js"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/helloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/person',
            name: 'Person',
            component: Person
        },
        ...vux
    ]
})
