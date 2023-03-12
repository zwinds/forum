'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {userId,label_ids} = event
	
	const res = await  db.collection('user').doc(userId).update({
		label_ids
	})
	//返回数据给客户端
	return {
		code:0,
		data:{
			msg:"修改成功"
		}
	}
};
