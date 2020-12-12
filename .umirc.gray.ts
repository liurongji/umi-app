import { defineConfig } from 'umi';
import pageRoutes from './config/router.config';

export default defineConfig({
  define: {
    'process.env.UMI_ENV': 'gray',
    'process.env.apiUrl': 'https://gray-lives-api.chungoulife.com/Api',
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
