import { RequestConfig, getDvaApp } from 'umi';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createFilter from 'redux-persist-transform-filter';

import { createLogger } from 'redux-logger';
import { Toast } from 'antd-mobile';
import { Reducer, Action } from 'redux';
export const request: RequestConfig = {
  timeout: 10000,
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [],
  responseInterceptors: [],
};

if (
  process.env.UMI_ENV === 'dev' ||
  process.env.UMI_ENV === 'test' ||
  process.env.UMI_ENV === 'gray' ||
  process.env.UMI_ENV === 'ready'
) {
  if (typeof window !== 'undefined') {
    // import('vconsole')
    //   .then((res: any) => {
    //     const vConsole = new res.default();
    //     console.log(vConsole);
    //   })
    //   .catch((err: any) => {
    //     console.log(err);
    //   });
    import('eruda')
      .then((res: any) => {
        const vConsole = res.init();
        console.log(vConsole);
      })
      .catch((err: any) => {
        console.log(err);
      });
    window.addEventListener('DOMContentLoaded', () => {
      const app = getDvaApp();
      persistStore(app._store);
    });
  }
}

export const dva = {
  config: {
    onError(e: { preventDefault: () => void }) {
      e.preventDefault();
    },
    onReducer(reducer: Reducer<unknown, Action<any>>) {
      const globalCollapsedFilter = createFilter('global', ['collapsed']);
      const persistConfig = {
        key: 'root',
        storage,
        whitelist: ['global'],
        transforms: [globalCollapsedFilter],
        stateReconciler: autoMergeLevel2,
      };
      return persistReducer(persistConfig, reducer);
    },
  },
};
