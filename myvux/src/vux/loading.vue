<template>
    <div class="mytoast">
        <x-button @click.native="show_loading()" type="primary">show_loading</x-button>
        <x-button @click.native="hide_loading()" type="primary">hide_loading</x-button>
        <x-button @click.native="show_loading2()" type="primary">show_loading2</x-button>
        <x-button @click.native="show_loading3()" type="primary">show_loading3</x-button>
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
        show_loading: function() {
            this.$vux.loading.show({
                     text: 'Loading'
                })
        },
        hide_loading:function(){
            this.$vux.loading.hide();
        },
        show_loading2:function(){
            this.$vux.loading.show({
                     text: 'Loading'
                })
        },
        show_loading3:function(){
            this.$vux.loading.show({
                text: '请求中...'
            })
        },
    }
};
</script>

<style lang="less" scoped>
.mytoast{
  padding:1rem;
}

</style>
