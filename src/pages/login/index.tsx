import React, { FC, useEffect, useState } from 'react';
import { connect, LoginModelState, Dispatch } from 'umi';
import styles from './index.less';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { Toast } from 'antd-mobile';
import { useSetInterval } from '@/utils/useSetInterval';

export interface LoginLayoutProps {
  dispatch: Dispatch;
  login: LoginModelState;
  loading: boolean;
}

export interface SubmitValProps {
  mobile: string;
  code: string;
}

const Login: FC<LoginLayoutProps> = ({ dispatch }) => {
  const [countdown, setCountdown] = useState(60);
  const [showCodeBtn, setShowCodeBtn] = useState(false);
  const [delay, setDelay] = useState(0); // 0 不执行
  const { register, getValues, errors, handleSubmit, trigger } = useForm();

  /**
   * 登录提交
   * @param data 表单数据
   */
  const onSubmit = async (data: SubmitValProps) => {
    if (data) {
      dispatch({
        type: 'login/wxBind',
        payload: { mobile: data.mobile, scene: 8 },
      });
    }
  };

  /**
   * 获取验证码
   */
  const getCode = async () => {
    const mobile = getValues('mobile');
    const mobileControl = await trigger('mobile');
    if (!mobileControl) {
      return Toast.info('请先输入正确的手机号码！', 1);
    }
    setShowCodeBtn(true);
    setDelay(1000);
    dispatch({ type: 'login/sendMsg', payload: { mobile, scene: 8 } });
  };

  useSetInterval(() => {
    if (countdown <= 0) {
      return () => {
        setCountdown(60);
        setDelay(0);
        setShowCodeBtn(false);
      };
    }
    setCountdown(countdown - 1);
  }, delay);

  return (
    <form>
      <div className={styles['login-container']}>
        <h3 className={styles.title}>手机号登录</h3>
        <div className={styles.form}>
          <div className={classNames(styles.inputs, styles.flex)}>
            <input
              style={{ width: '100%' }}
              type="number"
              className={classNames(styles.input)}
              placeholder="请输入手机号"
              name="mobile"
              ref={register({
                required: true,
                pattern: /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/,
              })}
            />
          </div>
          <div className={styles.warning}>
            {errors.mobile?.type === 'required' && '请输入手机号码！'}
            {errors.mobile?.type === 'pattern' && '请输入正确的手机号码！'}
          </div>
          <div
            className={classNames(
              styles.inputs,
              styles.flex,
              styles['v-center'],
            )}
          >
            <div className={styles['input-wrap']}>
              <input
                className={styles.input}
                placeholder="请输入验证码"
                name="code"
                ref={register({ required: true })}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {showCodeBtn ? (
                <div className={styles.countdown}>{countdown}s后重新发送</div>
              ) : (
                <span className={styles['code-btn']} onClick={getCode}>
                  获取验证码
                </span>
              )}
            </div>
          </div>
          <div className={styles.warning}>
            {errors.code && '请输入验证码！'}
          </div>
        </div>
        <div
          className={classNames(styles.btn)}
          onClick={handleSubmit(onSubmit)}
        >
          登录
        </div>
      </div>
    </form>
  );
};

export default connect(({ login }: { login: LoginModelState }) => ({ login }))(
  Login,
);
