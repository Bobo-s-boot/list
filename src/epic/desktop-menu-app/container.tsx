import React from 'react';
import { useLocation } from 'react-router';
import { THEME_MODULE_NAME } from '../../data/theme';
import { useSelector } from '../../lib/store';
import { Component } from './component';
import { AUTH_MODULE_NAME } from '../../data/auth';
import ReactDOM from 'react-dom';

export const Container: React.FC = () => {
  const router = useLocation();

  const isActivePath = (...path: string[]) =>
    path.some((el) => router.pathname.includes(el));

  const { theme, auth } = useSelector((s: any) => ({
    theme: s[THEME_MODULE_NAME],
    auth: s[AUTH_MODULE_NAME],
  }));

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Component
          theme={theme.type}
          isActivePath={isActivePath}
          pathname={router.pathname}
        />,
        document.getElementById('layoutApp1') || document.body,
      )}
    </React.Fragment>
  );
};
