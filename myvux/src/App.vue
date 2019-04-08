<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="less">
html,body{
    height:100%;
}
#app{
    height:100%;
}
*{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
}
body{
    font-family:PingFang-SC-Regular;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}

:focus {
    outline: 0;
}

/* remember to highlight inserts somehow! */
ins {
    text-decoration: none;
}
del {
    text-decoration: line-through;
}

/* tables still need 'cellspacing="0"' in the markup */
table {
    border-collapse: collapse;
    border-spacing: 0;
}

/*vux  loading*/
.weui-toast{
    width:6.6em !important;
    min-height: 6.6em !important;
}
</style>