<template>
	<view class="my-content">
		<!-- 绿色背景 -->
		<view class="my-bg"></view>
		
		<i-user-info></i-user-info>
		
		<!-- tab -->
		<i-card-tab></i-card-tab>
	</view>
</template>

<script>
	import iUserInfo from './components/i-user-info.vue'
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		components:{
			iUserInfo
		}
	}
</script>

<style lang="scss">
	.my-content{
		position: relative;
	}
.my-bg{
	height: 340rpx;
	background-color: #5ccc84;
	border-bottom-left-radius: 30rpx;
	border-bottom-right-radius: 30rpx;
}

</style>
