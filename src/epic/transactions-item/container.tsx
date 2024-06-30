import React from 'react';
import { useQuery } from 'react-query';

import { convertTransactions } from '../../data/transactions/convert';
import { Component } from './component';
import { ACTION_ERROR_INTER, MODULE_NAME } from './constant';

import {
  TRANSACTIONS_ITEM_DATA_INTER,
  TRANSACTIONS_ITEM_DATA_RAW_INTER,
} from '../../data/transactions/constant';
import { action } from './action';

export const Container: React.FC<{
  transitionId: string;
  visible: boolean;
  onClose: Function;
}> = ({ transitionId, onClose, visible }) => {
  const preFetch = useQuery(MODULE_NAME, () => action(transitionId));

  const isLoading = () => {
    if (preFetch.isLoading || preFetch.isFetching) {
      return true;
    }
  };

  const isSuccess = () => {
    if (preFetch.isSuccess && !preFetch.isFetching) {
      return true;
    }
  };

  const isError = () => {
    if (preFetch.isError && !preFetch.isLoading && getErrorMessage()) {
      return true;
    }
  };

  const getErrorMessage = () => {
    const error: ACTION_ERROR_INTER = preFetch.error as ACTION_ERROR_INTER;

    if (error) {
      return error.message;
    }
  };

  const getData = (): TRANSACTIONS_ITEM_DATA_INTER | undefined => {
    const data = preFetch.data as unknown as TRANSACTIONS_ITEM_DATA_RAW_INTER;

    if (data) {
      return convertTransactions(data);
    }
  };

  return (
    <Component
      data={getData()}
      isLoading={isLoading()}
      isError={isError()}
      isSuccess={isSuccess()}
      errorMessage={getErrorMessage()}
      visible={visible}
      onClose={onClose}
    />
  );
};
