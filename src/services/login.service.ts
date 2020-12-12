/*
 * @Author: lrj
 * @Date: 2020-12-08 11:05:27
 * @LastEditTime: 2020-12-08 17:44:27
 * @LastEditors: Please set LastEditors
 * @Description: 登录接口
 * @FilePath: \umi-app\src\services\login.service.ts
 */

import request from '@/utils/request';

/**
 * 发送短信验证码
 * @param data
 */
export const sendMsg = (data: any) => {
  return request.post(`/Index/sendMsg`, {
    data,
  });
};

/**
 * 获取openId
 * @param data
 */
export const wxCodeToAccess = (data: any) => {
  return request.post(`/Index/wxCodeToAccess`, {
    params: data.code,
    data,
  });
};

/**
 * 获取用户信息
 * @param data
 */
export const wxGetUserInfo = (data: any) => {
  return request.post(`/Index/wxGetUserInfo`, { data });
};

/**
 * 手机号登录，绑定手机号
 * @param data
 */
export const wxBind = (data: any) => {
  return request.post(`/Index/wxBind`, { data });
};
