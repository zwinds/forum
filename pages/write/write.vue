<template>
	<uni-form ref="form" :model="form" label-width="80px">
		<view class="writeTitle">标题</view>
		<uni-easyinput v-model="form.name" placeholder="请输入标题" clearable></uni-easyinput>
		<view class="writeTitle">选择标签</view>
		<uni-data-checkbox mode="tag" v-model="tag" :localdata="typedata"></uni-data-checkbox>
		<view class="writeTitle">动态内容</view>
		<uni-easyinput v-model="form.content" type="textarea" autoHeight placeholder="请输入动态内容"></uni-easyinput>
		<view class="subButton">
			<button class="login-btn" type="primary" @click="onSubmit">发布动态</button>
		</view>

	</uni-form>
</template>
<script>
	export default {
		data() {
			return {
				typedata: [{
					text: '茅台线报',
					value: 0
				}, {
					text: '数码线报',
					value: 1
				}, {
					text: '球鞋线报',
					value: 2
				}, {
					text: '美妆线报',
					value: 3
				}],
				tag: '',
				form: {
					name: "",
					content: "",
					userinfo: "",
					cover: [],
					dialogImageUrl: "",
					dialogVisible: false,
				},
			};
		},
		methods: {
			// //上传图片方法开始
			// // 上传图片方法结束
			async onSubmit() {
				let userinfo = uni.getStorageSync('userInfo'); //使用uni的本地存储解决方案替代window
				console.log(typeof userinfo); // 输出 "object"
				// const userinfoDate = JSON.parse(userinfo);
				console.log(userinfo, "8388838383883!!!");
				let userinfoObj = {
					author_name: userinfo.author_name,
					avatar: userinfo.avatar,
					id: userinfo.id,
					status: userinfo.status,
				};
				console.log(this.tag, "选择动态的数组值");
				let classify = this.tag
				if (this.tag == 0) {
					classify = '茅台线报'
				}
				if (this.tag == 1) {
					classify = '数码线报'
				}
				if (this.tag == 2) {
					classify = '球鞋线报'
				}
				if (this.tag == 3) {
					classify = '美妆线报'
				}
				const dataInfo = {
					name: this.form.name,
					classify: classify,
					content: this.form.content,
					userinfo: userinfoObj,
					cover: [
						"https://p.ipic.vip/gt149h.png",
						"https://p.ipic.vip/04fbm5.png",
						"https://p.ipic.vip/u5gw84.png",
					],
				};

				const data = await this.$http.update_article(dataInfo, {});
				uni.showToast({
					title: data.msg,
				});
			},
		},
	};
</script>

<style lang="scss">
	.text {
		font-size: 12px;
		color: #666;
		margin-top: 5px;
	}

	.uni-px-5 {
		padding-left: 20px;
		padding-right: 20px;
	}

	.uni-pb-5 {
		padding-bottom: 10px;
	}

	.writeTitle {
		font-size: 18px;
		color: #666;
		margin-top: 5px;
		margin-top: 20px;
		margin-left: 20px;
		margin-bottom: 10px;
	}

	.subButton {
		margin-top: 25px;
	}

	.login-btn {
		.login-btn {
			width: 640rpx;
			height: 90rpx;
			border-radius: 10rpx;
			background-color: $base-color;
			color: #FFFFFF;
			font-size: 32rpx;
			@include flex(center);
			margin-top: 80rpx;
		}

	}
</style>
