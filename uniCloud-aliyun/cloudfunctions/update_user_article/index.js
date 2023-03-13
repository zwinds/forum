'use strict';
const db = uniCloud.database();
const dbCmd = db.command;
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : 777777777!!!!!!', event)

	//需要将ID加入到用户的文章



	//返回数据给客户端
	return {
		event: event,
		code: 0,
		data: {
			msg: "发布成功！"
		}
	}

};
