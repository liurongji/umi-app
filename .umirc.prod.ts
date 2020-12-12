/*
 * @Author: your name
 * @Date: 2020-12-07 13:49:43
 * @LastEditTime: 2020-12-11 14:42:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umi-app\.umirc.prod.ts
 */
import { defineConfig } from 'umi';
import pageRoutes from './config/router.config';

export default defineConfig({
  define: {
    'process.env.UMI_ENV': 'prod',
    'process.env.apiUrl': 'https://prod-lives-api.chungoulife.com/Api',
  },
  // esbuild: {},
  dva: {
    immer: true, // 表示是否启用 immer 以方便修改 reducer
    hmr: true, // 表示是否启用 dva model 的热更新
  },
  ssr: {},
  routes: pageRoutes,
  devServer: {
    compress: 'none',
  },
  dynamicImport: {},
});
