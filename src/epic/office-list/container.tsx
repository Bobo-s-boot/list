import React, { useEffect, useMemo, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';

import { ACTION_ERROR_INTER, MODULE_NAME } from './constant';
import { Component } from './component';
import { convertOfficeList } from '../../data/office/convert';
import { action } from './action';
import { OFFICE_ITEM_DATA_RAW_INTER } from '../../data/office/constant';
import { getData } from '../office-item-update/action';

export const Container: React.FC<{}> = () => {
  const [project, setProject] = useState('');
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');

  const preFetch = useInfiniteQuery({
    // the list is not typed in UseInfiniteQueryResult<AxiosResponse<any, any>, unknown>
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
  // const list = preFetch?.data?.pages[0].list;

  // console.log('list', list);
  console.log('preFetch?.data?.pages', preFetch?.data?.pages);

  const data = useMemo(() => {
    return convertOfficeList(
      preFetch?.data?.pages.reduce((acc: any, page: any) => {
        console.log('page', page);
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

  const MOCK_DATA = {
    list: [
      {
        id: 1,
        createData: '21',
        name: 'Обмінний пункт №1',
        phone: '380501624225',
        address: 'Вулиця Луніна',
        days: [1, 2, 3, 4, 5, 6, 7],
        time: ['11, 22, 33', '32, 22, 33'],
        desiredCurrency: [1, 2, 3],
        isOrderCurrency: true,
        isTradeCrypto: true,
      },
    ] as any,
    isEmpty: false,
  };

  const convertMockData = convertOfficeList(MOCK_DATA.list);

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
