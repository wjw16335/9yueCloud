<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 公共样式 */
	@import url('common/css/free.css');
	/* 引入动画库样式 */
	@import url('common/css/animate.min.css');
    /* 引入iconfont图标 */	
	@import url('common/iconfont/iconfont.css');
	/* 引入主题色 */
	@import url('common/css/common.css');
</style>
