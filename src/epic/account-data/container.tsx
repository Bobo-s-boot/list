import React from 'react';

import { useQuery } from 'react-query';
import { action } from './action';
import { useDispatch } from '../../lib/store';

import { ACTION_ERROR_INTER, DATA_INTER, MODULE_NAME } from './constant';
// import { setUserData } from '../../data/auth/action';
import { AlertActionElem } from '../../common/alert-action';

export const Container: React.FC<{}> = ({}) => {
  const dispatch = useDispatch();
  const onSuccess = (d: any) => {
    const data: DATA_INTER = d as unknown as DATA_INTER;
    // return dispatch(setUserData(data.data.user));
  };

  const getAccountData = useQuery(MODULE_NAME, action, {
    onSuccess,
  });

  const isError = () => {
    if (
      getAccountData.isError &&
      !getAccountData.isLoading &&
      getErrorMessage()
    ) {
      return true;
    }
  };

  const getErrorMessage = () => {
    const error: ACTION_ERROR_INTER =
      getAccountData.error as ACTION_ERROR_INTER;
    if (error) {
      return error.messages[0];
    }
  };

  return <>{isError() && <AlertActionElem text={getErrorMessage()} />}</>;
};
