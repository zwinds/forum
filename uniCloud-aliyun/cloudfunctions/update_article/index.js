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
	const randowID = generateRandomNumber(7)
	//随机生成ID编码结束
	//时间戳格式化
	const timestamp = Date.now();
	const date = new Date(timestamp + 8); // 加上8毫秒数
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const hour = date.getHours().toString().padStart(2, '0');
	const minute = date.getMinutes().toString().padStart(2, '0');
	const formattedDate = `${year}.${month}.${day} ${hour}:${minute}`;

	console.log(formattedDate); // 输出：2023.03.16 17:50
	//时间戳格式

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
