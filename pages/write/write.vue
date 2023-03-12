<template>
	<el-form ref="form" :model="form" label-width="80px">
		<el-form-item label="标题">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="选择分类">
			<el-checkbox-group v-model="form.type">
				<el-checkbox label="茅台线报" name="type"></el-checkbox>
				<el-checkbox label="数码产品" name="type"></el-checkbox>
				<el-checkbox label="美妆线报" name="type"></el-checkbox>
				<el-checkbox label="球鞋搬砖" name="type"></el-checkbox>
			</el-checkbox-group>
		</el-form-item>
		<el-form-item label="讨论内容">
			<el-input type="textarea"  :rows="12" v-model="form.desc"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">立即创建</el-button>
			<el-button>取消</el-button>
		</el-form-item>
	</el-form>
</template>
<script>
	export default {
		data() {
			return {
				form: {
					name: "",
					region: "",
					date1: "",
					date2: "",
					delivery: false,
					type: [],
					resource: "",
					desc: "",
				},
			};
		},
		methods: {  
			async onSubmit() {
				const list = await this.$http.update_article(list,{ 
					
				})
				  
				console.log("submit!");
			},
		},
	};
</script>

<style>
</style>
