import { IRoute } from 'umi';

/*
 * @Author: your name
 * @Date: 2020-12-04 14:35:19
 * @LastEditTime: 2020-12-12 12:31:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umi-app\config\router.config.ts
 */
export default [
  {
    path: '/',
    component: '../layouts/index',
    wrappers: ['@/wrappers/auth'],
    routes: [
      { exact: true, path: '/', component: '@/pages/index', title: '首页' },
      { exact: true, path: '/list', component: '@/pages/list', title: '列表' },
      {
        exact: true,
        path: '/login',
        component: '@/pages/login',
        title: '登录',
      },
    ],
  },
];
