'use strict';
// 获取数据库引用
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const {
		loginName,
		password,
		phone,
		author_name,
		nickname
	} = event;
	//随机生成ID编码开始
	function generateRandomNumber(length) {
		const characters = '0123456789';
		let result = '';
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		return result;
	}
	const randowID = generateRandomNumber(7)
	//随机生成ID编码结束
	await db.collection('user').add({
		id: randowID,
		author_name: event.nickname,
		avatar: '',
		status: 'normal',
		fans_count: 0,
		professional: '普通用户',
		explain: '尊敬的用户，欢迎进入~',
		gender: '男',
		follow_count: 0,
		integral_count: '',
		article_likes_ids: [],
		author_likes_ids: [],
		thumbs_up_article_ids: [],
		label_ids: [],
		loginName: event.loginName,
		password: event.password,
		phone: event.phone,
		article_ids: []
	})
	console.log(event, context)
	//返回数据给客户端
	return {
		event: event,
		code: 1,
		msg: '注册成功！'
	}
}
