/*
 * @Author: your name
 * @Date: 2020-12-07 12:27:30
 * @LastEditTime: 2020-12-09 14:59:33
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \umi-app\.umirc.test.ts
 */
import { defineConfig } from 'umi';
import pageRoutes from './config/router.config';

export default defineConfig({
  define: {
    'process.env.UMI_ENV': 'test',
    'process.env.apiUrl': 'https://test-lives-api.chungoulife.com/Api',
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
