'use strict';
exports.main = async (event, context) => {
  const { phone } = event;
  // 创建一个随机数，返回给前端
  const currentNumber = Math.random().toString().substr(2, 6)

  try {
    const res = await uniCloud.sendSms({
      appid: '__UNI__600EB91', // mainfest.json中进行获取
      smsKey: 'afa41cb8d0be0b007d6f0c948ed8e237',
      smsSecret: '4c8f7e2fdcc3b61e41a2938bdc2a2fb5',
      phone,
      templateId: '12333', // 获取的短信模版
      data: {
        code: currentNumber,
        expMinute: '1',
      }
    })
    // 调用成功，请注意这时不代表发送成功
    return {
      code: 0,
      data: {
        mobileCode: currentNumber,
        msg: "请在手机注意查收验证码",
      }
    }
  } catch (err) {
    return {
      code: 1,
      msg: '短信验证码发送失败'
    }
  }
};
