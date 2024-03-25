import React from 'react';
import { useDispatch, useSelector } from '../../lib/store';
import { Component } from './component';
import { resetAuthData } from '../../data/auth/action';
import { useHistory } from 'react-router';
import { AUTH_MODULE_NAME } from '../../data/auth';

export const Container: React.FC = () => {
  const dispatch = useDispatch();

  const { authStore } = useSelector((s: any) => ({
    authStore: s[AUTH_MODULE_NAME],
  }));

  const isSuccess = () => authStore.logged !== true;

  const history = useHistory();

  const onSubmitForm = () => {
    dispatch(resetAuthData());
  };

  if (isSuccess()) {
    history.push('/');
  }

  return <Component onSubmitForm={onSubmitForm} />;
};
