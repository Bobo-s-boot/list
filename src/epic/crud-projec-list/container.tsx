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

export const Container: React.FC<{}> = () => {
  const preFetch = useQuery(MODULE_NAME, action);

  const isLoading = () => {
    return preFetch.isLoading || preFetch.isFetching;
  };

  const isSuccess = () => {
    return preFetch.isSuccess && !preFetch.isFetching;
  };

  const isError = () => {
    return preFetch.isError && !preFetch.isLoading && !!getErrorMessage();
  };

  const getErrorMessage = () => {
    const error: ACTION_ERROR_INTER = preFetch.error as ACTION_ERROR_INTER;
    return error ? error.message : undefined;
  };

  const getData = (): DATA_INTER[] | undefined => {
    const data = preFetch.data as ACTION_RESPONSE_INTER;
    return data ? data.data : undefined;
  };

  return (
    <div className="products-list">
      <h1>Products List</h1>
      {isLoading() && <div>Loading...</div>}
      {isError() && <div>Error fetching products: {getErrorMessage()}</div>}
      {isSuccess() && getData() && getData()!.length > 0
        ? getData()!
            .reverse()
            .map((product) => (
              <Component
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            ))
        : !isLoading() && !isError() && <div>No products available</div>}
    </div>
  );
};
