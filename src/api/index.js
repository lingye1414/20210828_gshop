/* 
包含多个接口请求函数的模块
所有接口请求函数名称都以req开头
函数的返回值: promise对象
*/
import ajax from './ajax'
/**
 * 1、根据经纬度获取位置详情
 * @param {String} latitude 纬度
 * @param {String} longitude 经度
 * @returns promise对象(一步返回的数据是 response.data)
 */
// export function reqAddress(geohash){return ajax(geohash)}
// 简写为以下形式
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodCategory = () => ajax(`/index_category`)
// 3、根据经纬度获取商铺列表
export const reqShopsList = (latitude, longitude) => ajax(`/shops`, {latitude, longitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShopsList = (geohash, keyword) => ajax(`/search_shops`, {geohash, keyword})
// 5、获取一次性验证码
export const reqCaptcha = () => ajax(`/captcha`)
// 6、用户名密码登陆
export const reqLogin_pwd = (name, pwd, captcha) => ajax(`/login_pwd`, {name, pwd, captcha}, 'POST')
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax(`/sendcode`, {phone})
// 8、手机号验证码登陆
export const reqLogin_sms = (phone, code) => ajax(`/login_sms`, {phone, code}, 'POST')
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax(`/userinfo`)
// 10、用户登出
export const reqLogout = () => ajax(`/logout`)