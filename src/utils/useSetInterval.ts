/*
 * @Author: your name
 * @Date: 2020-12-11 12:06:08
 * @LastEditTime: 2020-12-11 16:17:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umi-app\src\utils\useSetInterval.ts
 */

import { useEffect, useRef } from 'react';

/**
 * 定时器
 * @param callback 执行函数
 * @param delay 执行间隔时间 0 不执行 单位毫秒
 */
export function useSetInterval(
  callback: (() => (() => void) | undefined) | undefined,
  delay: number,
) {
  const savedCallback: any = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === 0) {
      return;
    }
    let timerId: NodeJS.Timeout | null = null;
    const run = () => {
      const returnValue = savedCallback.current();
      if (returnValue) {
        if (returnValue instanceof Function) {
          returnValue();
        } else {
          throw new Error('返回值必须是函数！');
        }
        timerId && clearTimeout(timerId);
        return;
      }
      timerId = setTimeout(run, delay);
    };

    timerId = setTimeout(run, delay);
    return () => {
      timerId && clearTimeout(timerId);
    };
  }, [delay]);
}
