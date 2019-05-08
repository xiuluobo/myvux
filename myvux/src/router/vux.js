import Bar2 from '@/vux/Bar2.vue';
import Toast from '@/vux/toast.vue';
import Loading from '@/vux/loading.vue';

let router=[
    {
        path: '/bar2',
        component: Bar2,
        meta:{
            title:"aaaa"
        },
    },
    {
        path: '/loading',
        component: Loading,
    },
    {
        path: '/toast',
        component: Toast,
        beforEnter(to,from,next){
            //document.getElementById('QF').innerHTML="问诊"
        }
    },
    {
        path:'/login',
        redirect: "/bar2"
    },
    {
        path: "*",
        redirect: "/"
    }
]
export default router