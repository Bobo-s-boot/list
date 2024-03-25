import React from 'react';

import { ACTION_ERROR_INTER, MODULE_NAME } from './constant';

import { useQuery } from 'react-query';
import { Component } from './component';
import {
  PROJECT_ITEM_DATA_INTER,
  PROJECT_ITEM_DATA_RAW_INTER,
} from '../../data/project/constant';
import { convertProject } from '../../data/project/convert';
import { getProject } from './action';

export const Container: React.FC<{ id: string }> = ({ id }) => {
  const preFetch = useQuery(MODULE_NAME, () => getProject(id));
  const getData = (): PROJECT_ITEM_DATA_INTER | undefined => {
    const data = preFetch.data as unknown as PROJECT_ITEM_DATA_RAW_INTER;

    if (data) {
      return convertProject(data);
    }
  };

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

  const data = getData();
  return (
    <Component
      data={data}
      isLoading={isLoading()}
      isError={isError()}
      isSuccess={isSuccess()}
      errorMessage={getErrorMessage()}
    />
  );
};
