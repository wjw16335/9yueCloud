<template>
	<view class="content">
		<view class="flex">
			<view class="">1</view>
			<view class="">2</view>
		</view>
		
		<!-- common.css -->
		<view class="animate__bounceOut bg-main p-2">111111111</view>
		
		<!-- iconfont -->
		<text class="iconfont icon-mail" style="font-size: 100px;"></text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
