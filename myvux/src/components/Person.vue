<template>
	<div class="body">
		<div class="head">
			<div class="top">
				<img class="top1" src="../assets/img/head.jpg" />
				<div class="top2">
					<span>李凯悦</span><span>女</span><span>23岁</span>
				</div>
			</div>
			<div class="top3">
				<div class="top4  htop">
					<img src="../assets/img/person.png">
					<div>我的医生</div>
				</div>
				<div class="top5  htop">
					<img src="../assets/img/device.png">
					<div>我的设备</div>
				</div>
			</div>
		</div>
		<div class="items">
			<div class="item1 hitem">
				<img src="../assets/img/icon1.png" >
				<div>健康档案</div>
				<img src="../assets/img/dot_red.png" class="dot_red">
				<img src="../assets/img/array.png" >
			</div>
			<div class="item2 hitem">
				<img src="../assets/img/icon2.png" >
				<div>血糖治疗方式</div>
				<div class="type">请选择您的治疗方式</div>
				<img src="../assets/img/array.png" >
			</div>
			<div class="item3 hitem">
				<img src="../assets/img/icon3.png" >
				<div>健康周报</div>
				<img src="../assets/img/dot_red.png" class="dot_red  on">
				<img src="../assets/img/array.png" >
			</div>
			<div class="item4 hitem">
				<img src="../assets/img/icon4.png" >
				<div>全部日志</div>
				<img src="../assets/img/dot_red.png" class="dot_red">
				<img src="../assets/img/array.png" >
			</div>
			<div class="item5 hitem">
				<img src="../assets/img/icon4.png" >
				<div>我的订单</div>
				<img src="../assets/img/dot_red.png" class="dot_red">
				<img src="../assets/img/array.png" >
			</div>
		</div>
		<div class="bottom">
			<img src="../assets/img/home2.png" class="bottom0">
			<img src="../assets/img/home5.png" class="bottom1">
			<img src="../assets/img/home3.png" class="bottom2">
			<div class="bottom3">首页</div>
			<div class="bottom4 on">我的</div>
		</div>
		<!-- 弹窗和遮罩层 -->
		<div class="modal_msg4"><div>提示信息...</div></div>
		<div class="modal_loading4"><span class="icon-loading"></span>加载中...</div>
		<div class="modal_shelter4"></div>
		<div class="modal_picker">
			<div class="picker_head">
				<div class="picker_lbutton">取消</div>
				<div class="picker_cbutton">选择治疗方式</div>
				<div class="picker_rbutton">确定</div>
			</div>
			<div class="picker_body">
				<div class="picker_item">仅口服降糖药物治疗</div>
				<div class="picker_item">基础胰岛素治疗</div>
				<div class="picker_item">每日两次预混胰岛素治疗</div>
				<div class="picker_item">强化胰岛素治疗</div>
			</div>
		</div>
	</div>
</template>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods : {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
	height: 100%;
	background: #f7f7f7;
}
.head{
	height: 7.75rem;
	background: #fff;
	padding-left:.4rem;
	padding-right:.4rem;
	margin-bottom:.6rem;
}
.top{
	height: 5.04rem;
	border-bottom:1px solid #eee;
	position: relative;
}
.top1{
	position: absolute;
	width:2.75rem;
	height: 2.75rem;
	border-radius: 50%;
	top:1.2rem;
	left:1.1rem;
}
.top2{
	margin-left:5rem;
	padding-top:2.1rem;
	font-size:.8rem;
	color:#212121;
}
.top2>span:nth-child(n+2){
	color:#808080;
	padding-left:.9rem;
}
.top3{
	padding-top:.4rem;
	position: relative;
	display: flex;
	display: -webkit-flex;
	height: 1.35rem;
}
.htop{
	width:50%;
	position: relative;
	height: 1.8rem;
}
.htop img{
	position: absolute;
	top:.3rem;
	left:1.85rem;
	width:1.2rem;
	height: 1.2rem;
}
.htop div{
	font-size:.8rem;
	margin-left:3.55rem;
	padding-top:.3rem;
}
.top4{
	border-right:1px solid #eee;
}
.hitem{
	height: 2.5rem;
	background: #fff;
	line-height: 2.5rem;
	position: relative;
}
.hitem:active{
	background:#eee;
}
.item2:active{
	background:#fff;
}
.item2{
	display: flex;
	display: -webkit-flex;
}
.item2 .type{
	flex:1;
	-webkit-flex:1;
	text-align: right;
	margin-left:0;
	padding-right:1.6rem;
}
.item2 .type:active{
	background:#eee;
}
.hitem>img:first-child{
	position: absolute;
	width:1.4rem;
	height: 1.4rem;
	top:.5rem;
	left:.8rem;
}
.dot_red{
	position: absolute;
    top: .95rem;
    right: 1.7rem;
    width: .5rem;
    height: .5rem;
    display: none;
}
.dot_red.on{
	display: block;
}
.hitem>img:last-child{
	position: absolute;
    width: .4rem;
    height: .7rem;
    top: .85rem;
    right: .8rem;
}
.hitem>div{
	margin-left:2.8rem;
	color:#333;
	font-size:.75rem;
}
.item1{
	border-bottom:1px solid #eee;
}
.item2{
	margin-bottom:.6rem;
}
.item3,.item4{
	border-bottom:1px solid #eee;
}
.bottom{
	position: fixed;
	bottom:0;
	left:0;
	width:100%;
	height: 2.35rem;
	background: #fff;
	border-top:1px solid #eee;
}
.bottom0{
	position: absolute;
	left:3.5rem;
	top:.3rem;
	width:1.2rem;
	height: 1.2rem;
}
.bottom2{
	position: absolute;
	right:3.5rem;
	top:.3rem;
	width:1.2rem;
	height: 1.2rem;
}
.bottom1{
	position: absolute;
    left: 7.85rem;
    width: 3.3rem;
    height: 3.3rem;
    top: -1.1rem;
}
.bottom3{
	position: absolute;
    left: 3.43rem;
    top: 1.44rem;
    font-size: .55rem;
    color: #9BA6AF;
    letter-spacing: .1rem;
}
.bottom4{
	position: absolute;
    right: 3.43rem;
    top: 1.44rem;
    font-size: .55rem;
    color: #9BA6AF;
    letter-spacing: .05rem;
}
.bottom .on{
	color:#6088E0;
}


/*picker.css*/
.type{
    color:#666 !important;
}
.type.on{
    color:#333 !important;
}
.modal_picker{
	display: none;
	font-size:.85rem;
	position: fixed;
	bottom:0;
	left:0;
	width:100%;
	z-index:18888;
	background: #fff;
}
.picker_head{
	height:2.2rem;
	line-height: 2.2rem;
	position: relative;
	text-align: center;
	border-bottom:1px solid #E6E6E6;
}
.picker_lbutton{
	top:0rem;
	position: absolute;
	left:1rem;
	color:#808080;
}
.picker_rbutton{
	top:0rem;
	position: absolute;
	right:1rem;
	color:#1CA3FE;
}
.picker_body{
	padding-top:.5rem;
	padding-bottom:.5rem;
}
.picker_item{
	color:#030E13;
	height:2.2rem;
	line-height: 2.2rem;
	padding-left:1.5rem;
}
.picker_item.on{
	color:#1CA3FE;
	background: url(../assets/img/right.png) no-repeat 90% center;
	background-size:1.2rem;
}
</style>
