<template>
    <div id="test">
        <!-- 组件内部使用@click必须加上.native -->
        <x-button @click.native="show_button('bar')" type="primary">bar</x-button>
        <x-button @click.native="show_button('bar2')" type="primary">bar2</x-button>
        <x-button @click.native="show_button('helloWorld')" type="primary">helloWorld</x-button>
    </div>
</template>

<script>
    import { XButton } from 'vux';
    export default {
        name: 'test',
        data() {
            return {
            }
        },
        components: {
            XButton
        },
        methods: {
            show_button: function(param) {
                this.$router.push({path: '/'+param});
            },
        },
        mounted() {},
        watch: {}
    }
</script>
<style scoped>
#test{
    padding:1rem
}
</style>