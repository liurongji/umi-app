import { defineConfig } from 'umi';
import pageRoutes from './config/router.config';

export default defineConfig({
  esbuild: {},
  dva: {
    immer: true,
    hmr: true,
  },
  ssr: {},
  routes: pageRoutes,
});
