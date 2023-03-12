'use strict';
const db = uniCloud.database();


// {
//     "author": {
//         "author_name": "20zhu",
//         "avatar": "//img2.sycdn.imooc.com/58d9c48f0001ad0304070270-160-160.jpg",
//         "id": "2255006",
//         "status": "normal"
//     },
//     "browse_count": 6647,
//     "classify": "数码产品",//分类是什么
//     "collection_count": 42,
//     "comments_count": 10,
//     "content": " xxx"     //内容是什么
//     "cover": [],   //图片是什么
//     "create_time": "2019.03.19 11:46",
//     "id": "283364",
//     "mode": "base",
//     "thumbs_up_count": 42,
//     "title": "小白如何入门爬虫"
// }

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


	await db.collection('feedback').add({
			author: '{
			"author_name": "20zhu",
			"avatar": "//img2.sycdn.imooc.com/58d9c48f0001ad0304070270-160-160.jpg",
			"id": "2255006",
			"status": "normal"
		}
		',
		browse_count: 0,
		classify: '茅台线报',
		collection_count: 0,
		comments_count:0,
		content:"1111"
		cover:''
		create_time:'2019.03.19 11:46'
		id:'6688'
		mode:'base'
		thumbs_up_count:'0'
		title:"测试测试"
	}) return {
	code: 0,
	data: {
		msg: "发布动态成功！"
	}
}
};
