/*
 * @Author: your name
 * @Date: 2020-12-12 10:25:40
 * @LastEditTime: 2020-12-12 10:25:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umi-app\src\models\connect.d.ts
 */
export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login?: boolean;
  };
}

export interface ConnectState {
  loading: Loading;
}
