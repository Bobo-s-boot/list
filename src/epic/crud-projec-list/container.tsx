import React from 'react';
import { useQuery } from 'react-query';
import { Component } from './component';
import { action } from './action';
import {
  ACTION_ERROR_INTER,
  ACTION_RESPONSE_INTER,
  DATA_INTER,
  MODULE_NAME,
} from './constant';
import { convertProjectList } from '../../data/project/convert';

export const Container: React.FC<{}> = () => {
  const preFetch = useQuery(MODULE_NAME, action);

  const isLoading = () => {
    if (preFetch.isLoading || preFetch.isFetching) {
      return true;
    }
  };

  const isSuccess = () => {
    if (preFetch.isSuccess && !preFetch.isFetching && getData()) {
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

  const getData = (): DATA_INTER | undefined => {
    const data = preFetch.data as unknown as ACTION_RESPONSE_INTER;

    if (data) {
      return convertProjectList(data);
    }
  };

  return (
    <Component
      data={getData()}
      isLoading={isLoading()}
      isError={isError()}
      isSuccess={isSuccess()}
      errorMessage={getErrorMessage()}
    />
  );
};
