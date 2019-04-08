import Bar2 from '@/vux/Bar2.vue';
import Toast from '@/vux/toast.vue';
import Loading from '@/vux/loading.vue';

let router=[
    {
        path: '/bar2',
        component: Bar2,
        beforEnter(to,from,next){
            //document.getElementById('QF').innerHTML="问诊"
        }
    },
    {
        path: '/loading',
        component: Loading,
        beforEnter(to,from,next){
            //document.getElementById('QF').innerHTML="问诊"
        }
    },
    {
        path: '/toast',
        component: Toast,
        beforEnter(to,from,next){
            //document.getElementById('QF').innerHTML="问诊"
        }
    },
]
export default router