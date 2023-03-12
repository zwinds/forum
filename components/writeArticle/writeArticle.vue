<template>
	<view class="main" @click="toWrite()">
		<uni-icons class="nav-bar-search-icon" type="compose" size="35" color="#FFFFFFFF"></uni-icons>
	</view>
</template>

<script>
	export default {
		name: "writeArticle",
		data() {
			return {

			};
		},
		methods:{
			toWrite(){
				uni.navigateTo({
					url:'/pages/write/write'
				})
				console.log("11111ddd");
			}
		}
	}
</script>

<style>
	.main {
		width: 50px;
		height: 50px;
		background-color: #f25037;
		border-radius: 50%;
		display: flex;
		margin-left: auto;
		right: 12px;
	}

	.nav-bar-search-icon {
		margin: 3px auto;
	}
</style>
