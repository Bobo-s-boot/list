import React from 'react';

import { Redirect, RouteComponentProps } from 'react-router';
import { AUTH_LOGIN_PAGE_PATH } from '../auth-login';

export const Page: React.FC<RouteComponentProps> = () => {
  return <Redirect to={AUTH_LOGIN_PAGE_PATH} />;
};
