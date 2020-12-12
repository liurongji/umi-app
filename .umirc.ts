/*
 * @Author: your name
 * @Date: 2020-12-04 10:56:23
 * @LastEditTime: 2020-12-12 12:10:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umi-app\.umirc.ts
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
  ssr: {
    forceInitial: false,
    devServerRender: true,
    mode: 'stream',
    staticMarkup: true,
  },
  routes: pageRoutes,
  devServer: {
    compress: 'none',
  },
  cssLoader: {},
  proxy: {
    '/api': {
      target: 'https://test-lives-api.chungoulife.com/Api',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  targets: {
    chrome: 79,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
  // dynamicImport: {
  //   loading: '@/Loading',
  // },
});
