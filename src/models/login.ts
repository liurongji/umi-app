/*
 * @Author: your name
 * @Date: 2020-12-09 15:45:19
 * @LastEditTime: 2020-12-12 10:38:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umi-app\src\models\login.ts
 */
import { Effect, Reducer, history, ImmerReducer, getDvaApp } from 'umi';
import { sendMsg, wxBind } from '@/services/login.service';
import { Toast } from 'antd-mobile';

export interface LoginModelState {
  isError: boolean;
  [key: string]: any;
}

export interface LoginModelType {
  namespace: 'login';
  state: LoginModelState;
  effects: {
    wxBind: Effect;
    sendMsg: Effect;
  };
  reducers: {
    // save: Reducer<LoginModelState>;
    // 启用 immer 之后
    save: ImmerReducer<LoginModelState>;
  };
}

const LoginModel: LoginModelType = {
  namespace: 'login',
  state: {
    userInfo: {
      id: '',
      name: '',
    },
    isError: false,
  },
  effects: {
    *wxBind({ payload }, { call, put }) {
      const response = yield call(wxBind, { ...payload });
      if (response.code === 1) {
        yield put({
          type: 'save',
          payload: {
            userInfo: response.data,
          },
        });
        Toast.success(response.msg, 1);

        history.replace('/');
      } else {
        yield put({
          type: 'save',
          payload: {
            isError: true,
          },
        });
        Toast.info(response.msg, 1);
      }
    },
    *sendMsg({ payload }, { call, put }) {
      const response = yield call(sendMsg, { ...payload });
      if (response.code === 1) {
        yield put({
          type: 'save',
          payload: response.data,
        });
      } else {
        Toast.info(response.msg);
        yield put({
          type: 'save',
          payload: {
            isError: true,
          },
        });
      }
    },
  },
  reducers: {
    // save(state, action) {
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    // },
    // 启用 immer 之后
    save(state, action) {
      state.wxBind = action.payload;
    },
  },
};

export default LoginModel;
