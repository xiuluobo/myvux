import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Person from '@/components/Person'
import Main from '@/components/Main'
import Filter from '@/components/Filter'
import Father from '@/components/Father'
import Father2 from '@/components/Father2'
import Bind from '@/page/bind'
import Modal2 from '@/page/modal2'
import Axios from '@/page/axios'
import Directive from '@/page/directive'
import Test_vuex from '@/page/test_vuex'
import Increment from '@/page/increment'
import Increment2 from '@/page/increment2'
// 引入vux
import vux from "./vux.js"

Vue.use(Router)

var router = new Router({
    routes: [
        {
            path: '/increment',
            component: Increment
        },
        {
            path: '/increment2',
            component: Increment2
        },
        {
            path: '/bind',
            component: Bind
        },
        {
            path: '/test_vuex',
            component: Test_vuex
        },
        {
            path: '/directive',
            component: Directive
        },
        {
            path: '/modal',
            component: Modal2
        },
        {
            path: '/',
            name: 'Main',
            meta:{
                title:"Main"
            },
            component: Main
        },
        {
            path: '/helloWorld',
            name: 'HelloWorld',
            meta:{
                title:"HelloWorld"
            },
            component: HelloWorld
        },
        {
            path: '/person',
            name: 'Person',
            meta:{
                title:"person"
            },
            component: Person
        },
        {
            path: '/filter',
            name: 'filter',
            meta:{
                title:"filter"
            },
            component: Filter
        },
        {
            path: '/father',
            name: 'Father',
            meta:{
                title:"father"
            },
            component: Father
        },
        {
            path: '/father2',
            name: 'Fathe2',
            meta:{
                title:"father2"
            },
            component: Father2
        },
        {
            path: '/axios',
            name: 'axios',
            meta:{
                title:"axios"
            },
            component: Axios
        },
        // {
        //     path: '/son',
        //     name: 'son',
        //     meta:{
        //         title:"son"
        //     },
        //     component: Son
        // },
        ...vux
    ]
})
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
})


/*router.beforeEach((to, from, next) => {
    var userInfo = window.localStorage.getItem('token');//获取浏览器缓存的用户信息
    if(userInfo){ //如果有就直接到首页咯
        next();
    } else {
        if(to.path=='/login' || to.path=="/bar2"){ //如果是登录页面路径，就直接next()
            next();
        } else { //不然就跳转到登录；
            next('/login');
        }
    }
})*/
export default  router;
