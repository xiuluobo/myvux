<template>
    <div class="mytoast">
        <x-button @click.native="show_toast()" type="primary">show_toast</x-button>
        <x-button @click.native="hide_toast()" type="primary">hide_toast</x-button>
        <x-button @click.native="show_toast2()" type="warn">show_toast2</x-button>
        <x-button @click.native="show_toast3()" type="primary" class="custom-primary-red">show_toast3</x-button>
        <x-button @click.native="show_toast4()" type="primary">show_toast4</x-button>
    </div>
</template>

<script>
import { XButton } from 'vux';
export default {
    components: {
        XButton
    },
    data() {
        return {};
    },
    methods: {
        show_toast: function() {
            this.$vux.toast.text("hello", "top");
        },
        hide_toast:function(){
            this.$vux.toast.hide();
        },
        show_toast2:function(){
            this.$vux.toast.text("hello2", "middle");
        },
        show_toast3:function(){
            this.$vux.toast.show({
                text: '点击这里'
            })
        },
        show_toast4:function(){
            this.$vux.toast.show({
                text: '点击这里',
                type:"warn",//text success warn
                time:"3000",
                isShowMask:"true",
                position:"center",
                width:"8rem"

            })
        }
    }
};
</script>

<style lang="less" scoped>
.mytoast{
  padding:1rem;
}
.custom-primary-red {
  border-radius: 99px!important;
  border-color: #CE3C39!important;
  color: #CE3C39!important;
  &:active {
    border-color: rgba(206, 60, 57, 0.6)!important;
    color: rgba(206, 60, 57, 0.6)!important;
    background-color: transparent;
  }
}
</style>
