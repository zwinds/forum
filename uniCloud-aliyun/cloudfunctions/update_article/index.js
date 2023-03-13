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
		title
	} = event
	// "id": "302042",
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
		create_time: Date.now(),
		id: '301911',
		mode: 'column',
		thumbs_up_count: '0',
		title: event.name,
	})
	console.log(event, context)
	return {
		event: event,
		code: 0,
		data: {
			msg: "发布动态成功！"
		}
	}
};
