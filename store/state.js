export default {
  userInfo: uni.getStorageSync('userInfo') || null,
  historyList: uni.getStorageSync('historyList') || [],
  labelList:uni.getStorageSync('labelList') || []   // 导航栏标签
}