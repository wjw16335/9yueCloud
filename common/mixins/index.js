export default {
	methods: {
		navTo(path, options = {}) {
			// 如果没有输入要跳转的路径，不继续往下执行
			if (!path) {
				console.log("请输入要跳转的路径");
				return
			}

			// 如果islogin:true，要跳转的地址必须登录后才能访问
			if (options.isLogin && !this.$store?.getters.hasLogin) {
				uni.navigateTo({
					url: "/pages/login/login"
				})
				return
			}

			// 如果options.navigator值为true就需要指定对应的跳转方式
			if (options.navigator) {
				uni[options.navigator]({
					url: path
				})
			}

			uni.navigateTo({
				url: path
			})
		}
	}
}
