/*
 * @Author: your name
 * @Date: 2020-12-11 14:26:35
 * @LastEditTime: 2020-12-11 14:33:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umi-app\serverHelper.js
 */
const parseCookie = (ctx) => {
  let cookies = ctx.get('cookie');
  if (!cookies) {
    return [];
  }
  cookies = cookies.split(';');
  const res = {};
  for (const item of cookies) {
    const kv = item.split('=');
    if (kv && kv.length > 0) {
      res[kv[0].trim()] = decodeURIComponent(kv[1]);
    }
  }
  return res;
};

const parseNavLang = (ctx) => {
  // 服务端无法获取navigator.language，所以只能通过Accept-Language来判断浏览器语言。
  let navigatorLang;
  const clientLang = ctx.get('Accept-Language');
  if (clientLang.startsWith('zh')) {
    navigatorLang = 'zh-CN';
  } else if (clientLang.startsWith('en')) {
    navigatorLang = 'en-US';
  }
  return navigatorLang;
};

module.exports = {
  parseCookie,
  parseNavLang,
};
