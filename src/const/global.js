// 全局常量
/**
 * 手机号前缀
 */
export const prefixOptions = [
  { value: '+86', text: '+86' }, // 中国大陆
  { value: '+852', text: '+852' }, // 中国香港
  { value: '+886', text: '+886' }, // 中国台湾
  { value: '+853', text: '+853' }, // 中国澳门
  { value: '+60', text: '+60' }, // 马来西亚
  { value: '+1', text: '+1' }, // 美国
  { value: '+81', text: '+81' }, // 日本
  { value: '+82', text: '+82' }, // 韩国
  { value: '+66', text: '+66' }, // 泰国
  { value: '+84', text: '+84' }, // 越南
  { value: '+62', text: '+62' }, // 印度尼西亚
  { value: '+65', text: '+65' }, // 新加坡
  { value: '+61', text: '+61' } // 澳大利亚
]

/**
 * 下载页地址
 */
export const downloadUrl = {
  test: 'http://twww.tangseng.io/download/index.html',
  prod: 'http://down.tangseng.io/download/index.html'
}

/**
 * 提现身份认证 ==> 3010 3011 3012 3013
 */
export const withdrawAuthObj = {
  3010: { btnTxt: '去认证', message: '今日累计提现小于等于1万TF或10万TST，请完成身份认证和高级认证' },
  3011: { btnTxt: '去认证', message: '今日累计提现小于等于1万TF或10万TST，请完成身份认证和高级认证' },
  3012: { btnTxt: '去认证', message: '今日累计提现大于1万TF或10万TST，请完成视频认证' },
  3013: { btnTxt: '确认', message: '今日累计提现已达到单日提取上限，请明天再来提现吧' }
}