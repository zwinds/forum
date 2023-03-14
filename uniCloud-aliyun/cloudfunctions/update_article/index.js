'use strict';
const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
	const {
		author,
		browse_count,
		classify,
		collection_count,
		comments_count,
		content,
		cover,
		create_time,
		id,
		mode,
		thumbs_up_count,
		title,
		userId
	} = event

	//随机生成ID编码开始
	function generateRandomNumber(length) {
		const characters = '0123456789';
		let result = '';
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		return result;
	}
	const randowID = generateRandomNumber(6)
	//随机生成ID编码结束
	//进行时间戳的转化     
	const date = new Date(); // 创建日期时间对象
	const isoString = date.toISOString(); // 将日期时间对象转化为 ISO 格式的字符串
	const utcDate = new Date(isoString); // 将 ISO 格式的字符串转化为日期时间对象
	const localDate = utcDate.toLocaleString(); // 将日期时间对象转化为本地时间
	const moment = require('moment'); // 引入 Moment.js 库
	const datetimeStr = localDate;
	const formattedDate = moment(datetimeStr).add(8, 'hours').format('YYYY.MM.DD HH:mm');
	console.log(formattedDate); // 输出加上 8 小时后，并格式化为指定格式的日期时间字符串
	//时间戳转化结束

	await db.collection('article').add({
		author: {
			author_name: event.userinfo.author_name,
			avatar: event.userinfo.avatar,
			id: event.userinfo.id,
			status: event.userinfo.status
		},
		browse_count: 0,
		classify: event.classify,
		collection_count: 0,
		comments_count: 0,
		content: event.content,
		cover: event.cover,
		create_time: formattedDate,
		id: randowID, //生成一个6位随机且唯一的编码
		mode: 'column',
		thumbs_up_count: '0',
		title: event.name,
	})
	console.log(event, context)
	return {
		event: event,
		randowID: randowID,
		code: 0,
		data: {
			msg: "发布动态成功！"
		}
	}
};
