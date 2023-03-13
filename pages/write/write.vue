<template>
	<el-form ref="form" :model="form" label-width="80px">
		<view class="writeTitle">标题</view>
		<el-input v-model="form.name" maxlength="25" placeholder="请输入标题" clearable></el-input>
		<el-form-item label="选择分类">
			<el-checkbox-group v-model="form.type" :max="1">
				<el-checkbox label="茅台线报" name="type"></el-checkbox>
				<el-checkbox label="数码产品" name="type"></el-checkbox>
				<el-checkbox label="美妆线报" name="type"></el-checkbox>
				<el-checkbox label="球鞋搬运" name="type"></el-checkbox>
			</el-checkbox-group>
		</el-form-item>
		<!-- <el-form-item label="讨论内容"> -->
		<view class="writeTitle">动态内容：</view>
		<el-input type="textarea" :rows="6" v-model="form.content"></el-input>
		<!-- 		</el-form-item> -->
		<!-- 		//上传图片组件 -->
		<!-- 		<el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
			:on-preview="handlePictureCardPreview" :on-remove="handleRemove">
			<i class="el-icon-plus"></i>
		</el-upload>
		<el-dialog :visible.sync="dialogVisible">
			<img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog> -->
		<!-- 		//上传图片组件结束 -->
		<el-form-item>
			<el-button type="primary" @click="onSubmit">发布动态</el-button>
		</el-form-item>
	</el-form>
</template>
<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					type: [],
					content: '',
					userinfo: '',
					cover: [],
					dialogImageUrl: '',
					dialogVisible: false
				},
			};
		},
		methods: {
			// //上传图片方法开始
			// handleRemove(file, fileList) {
			// 	console.log(file, fileList);
			// },
			// handlePictureCardPreview(file) {
			// 	this.dialogImageUrl = file.url;
			// 	this.dialogVisible = true;
			// 	console.log(file, fileList);
			// },
			// // 上传图片方法结束
			async onSubmit() {
				const userinfo = window.localStorage.userInfo
				const userinfoDate = JSON.parse(userinfo)
				let userinfoObj = {
					author_name: userinfoDate.data.author_name,
					avatar: userinfoDate.data.avatar,
					id: userinfoDate.data.id,
					status: userinfoDate.data.status
				}
				const classify = this.form.type.join(", ");
				const dataInfo = {
					name: this.form.name,
					classify: classify,
					content: this.form.content,
					userinfo: userinfoObj,
					cover: ['https://p.ipic.vip/jtq3sz.png']
				};

				const data = await this.$http.update_article(dataInfo, {})
				// const idfind = await this.$http.update_user_article({
				// 	id :'8010388',
				// 	// article_ids:["654321"]
				// })
				uni.showToast({
					title: data.msg,
				})
				console.log(idfind, "idfind!");
			},
		},
	};
</script>

<style lang="scss">
	.writeTitle {
		margin-top: 20px;
		margin-left: 20px;
		margin-bottom: 10px;
	}
</style>
