import React from 'react';
import { Redirect, useLocation } from 'umi';
export default (props: { children: React.ReactNode }) => {
  const location = useLocation();
  console.log(location);
  const whiteList = ['/login'];
  const { isLogin } = { isLogin: false };
  if (isLogin || whiteList.includes(`${location.pathname}`)) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
