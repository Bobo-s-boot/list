import React, { useEffect, useMemo, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';

import { ACTION_ERROR_INTER, MODULE_NAME } from './constant';
import { Component } from './component';
import { convertOfficeList } from '../../data/office/convert';
import { action } from './action';
import { OFFICE_ITEM_DATA_RAW_INTER } from '../../data/office/constant';

export const Container: React.FC<{}> = () => {
  const [project, setProject] = useState('');
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  const preFetch = useInfiniteQuery({
    queryKey: [MODULE_NAME],
    queryFn: ({ pageParam = 1 }) =>
      action({
        pageParam,
        type,
        search,
        project,
      }),
    getNextPageParam: (lastPage: any, allPages: any) => {
      return lastPage.length ? allPages.length + 1 : 1;
    },
  });

  const data = useMemo(() => {
    return convertOfficeList(
      preFetch?.data?.pages.reduce((acc: any, page: any) => {
        return [...acc, ...page.list];
      }, []) as OFFICE_ITEM_DATA_RAW_INTER[],
    );
  }, [preFetch?.data]);

  useEffect(() => {
    preFetch.refetch();
  }, [project, type, search]);

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

  const isIdle = () => {
    if (Array.isArray(preFetch.data?.pages.slice(-1)[0]) && isSuccess()) {
      const data = preFetch.data?.pages.slice(
        -1,
      )[0] as unknown as OFFICE_ITEM_DATA_RAW_INTER[];
      return !data.length;
    }
  };

  return (
    <Component
      data={data}
      isLoading={isLoading()}
      isError={isError()}
      isSuccess={isSuccess()}
      errorMessage={getErrorMessage()}
      project={project}
      setProject={setProject}
      setType={setType}
      search={search}
      setSearch={setSearch}
      type={type}
      fetchNextPage={preFetch.fetchNextPage}
      isFetching={preFetch.isFetching}
      isIdle={isIdle()}
    />
  );
};
