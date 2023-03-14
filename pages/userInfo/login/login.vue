<template>
	<view class="login-container">
		<image src="../../../static/img/login_bg.png" class="banner-bg" mode=""></image>
		<!-- 导航 -->
		<view class="login-nav">
			<view class="nav-item" @click="changFormType('account')" :class="{'active':type==='account'}">
				账号登录
			</view>
			<view class="nav-item" @click="changFormType('mobile')" :class="{'active':type =='mobile'}">
				手机登录
			</view>
		</view>
		<!-- 表单部分 -->
		<uni-forms class="form" ref="form" :modelValue="formData">
			<!-- 账号登录部分开始 -->
			<view class="" v-if="type ==='account'">
				<uni-forms-item label="账号" name="loginName">
					<input placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入账号"
						v-model="formData.loginName" />
				</uni-forms-item>
				<uni-forms-item label="密码" name="password">
					<uni-easyinput :inputBorder="false" placeholder-class="placeholder" class="form-input"
						type="password" placeholder="请输入密码" v-model="formData.password"></uni-easyinput>
				</uni-forms-item>
				<!-- 账号登录部分结束 -->
			</view>
			<!-- 手机号登录部分开始 -->
			<view class="" v-else-if="type === 'mobile'">
				<uni-forms-item label="手机号" name="phone">
					<uni-easyinput :inputBorder="false" placeholder-class="placeholder" class="form-input" type="number"
						placeholder="请输入手机号" v-model="formData.phone"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="验证码" name="vCode">
					<input placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入密码"
						v-model="formData.vCode" />
					<SendCode @setCurrentCode="returnCode=$event" class="code-component" @getForm="getForm"></SendCode>
				</uni-forms-item>
			</view>
			<!-- 手机号登录部分结束 -->
			<!-- 注册开始 -->
			<view class="" v-if="type ==='register'">
				<uni-forms-item label="昵称" name="nickname">
					<input placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入昵称"
						v-model="formData.nickname" />
				</uni-forms-item>
				<uni-forms-item label="手机号" name="phone">
					<uni-easyinput :inputBorder="false" placeholder-class="placeholder" class="form-input" type="number"
						placeholder="请输入手机号" v-model="formData.phone"></uni-easyinput>
				</uni-forms-item>
				<uni-forms-item label="账号名称" name="loginName">
					<input placeholder-class="placeholder" class="form-input" type="text" placeholder="请输入账号"
						v-model="formData.loginName" />
				</uni-forms-item>
				<uni-forms-item label="设置密码" name="password">
					<uni-easyinput :inputBorder="false" placeholder-class="placeholder" class="form-input"
						type="password" placeholder="请输入密码" v-model="formData.password"></uni-easyinput>
				</uni-forms-item>
			</view>
			<!-- 注册结束 -->
			<button class="login-btn" v-if="type !== 'register'" @click="_userLoginSubmit">立即登录</button>
			<button class="login-btn" v-if="type ==='register'" @click="userRegister">立即注册</button>
		</uni-forms>
		<view class="footer-select-container">
			<view class="nav-item" @click="changFormType('register')" :class="{'active':type =='register'}">
				注册
			</view>
			<text>忘记密码</text>
		</view>
	</view>
</template>

<script>
	export default {
		onReady() {
			this.$refs.form.setRules(this.userRules)
		},
		data() {
			return {
				type: 'account',
				formData: {
					loginName: '',
					nickname: '',
					password: '',
					phone: "",
					vCode: '',
				},
				returnCode: ''
			}
		},
		methods: {
			async _userLoginSubmit() {
				const res = await this.$refs.form.submit()
				/* 正式向后端发送请求 */
				// console.log(res)
				this._sendUserInfo({
					...res,
					type: this.type
				})
			},
			/* 切换当前表单类型 */
			changFormType(type) {
				this.type = type;
				this.$refs.form.clearValidate([]) // 清空校验规则
			},
			/* 开始发送数据到后端 */
			async _sendUserInfo(data) {
				const res = await this.$http.user_login(data)
				if (res) {
					this.updateUserInfo(res)
					uni.showToast({
						title: '登录成功',
						icon: 'none',
					})

					setTimeout(() => {
						try {
							uni.navigateBack()
						} catch (e) {
							uni.switchTab({
								url: '/pages/index/index'
							})
						}
						// #ifdef H5
						// uni.switchTab({
						//   url: '/pages/index/index'
						// })
						// #endif
						// #ifndef H5
						// uni.navigateBack()
						// #endif
					}, 1500)
				}
			},
			// 发送表单到sendCode组件
			getForm(cb) {
				cb && cb(this.$refs.form)
			},
			// 注册方法
			async userRegister() {
				const res = await this.$refs.form.submit()
				/* 正式向后端发送请求 */
				// console.log(res)
				this._sendReginster({
					...res,
					type: this.type
				})
			},
			async _sendReginster(data) {
				const dataInfo = {
					author_name: this.formData.nickname,
					phone: this.formData.phone,
					loginName: this.formData.loginName,
					password: this.formData.password
				};
				/* 开始发送数据到后端 */
				console.log(dataInfo);
					const res = await this.$http.user_register(dataInfo, {})
				console.log("11111");
				if (res.code == 1) {
					uni.showToast({
						title: '注册成功，请开始登录！',
						icon: 'none',
					})
					setTimeout(() => {
						try {
							uni.navigateBack()
						} catch (e) {
							uni.switchTab({
								url: '/pages/register/register'
							})
						}
						// #ifdef H5
						// uni.switchTab({
						//   url: '/pages/register/register'
						// })
						// #endif
						// #ifndef H5
						// uni.navigateBack()
						// #endif
					}, 1500)
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}

	.code-component {
		flex-shrink: 0;
	}
</style>

<style lang="scss" scoped>
	@import "./css/login.scss";
</style>
