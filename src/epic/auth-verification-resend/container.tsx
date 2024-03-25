import React from 'react';

import { Component } from './component';
import { ACTION_ERROR_INTER } from './constant';

import { useMutation } from 'react-query';

import { resendCode } from './action';

export const Container: React.FC<{
  actionCb: Function;
  active: any;
}> = ({ actionCb, active }) => {
  const onButtonAction = () => {
    action.mutate();
  };

  const onSuccess = () => {
    return actionCb();
  };

  const action = useMutation(resendCode, { onSuccess });

  const isLoading = () => {
    if (action.isLoading) {
      return true;
    }
  };
  const isError = () => {
    if (action.isError && !action.isLoading && getErrorMessage()) {
      return true;
    }
  };

  const getErrorMessage = () => {
    const error: ACTION_ERROR_INTER = action.error as ACTION_ERROR_INTER;

    if (error) {
      return error.message;
    }
  };

  return (
    <Component
      onButtonAction={onButtonAction}
      isLoading={isLoading()}
      isError={isError()}
      errorMessage={getErrorMessage()}
      active={active}
    />
  );
};
