import React, { useEffect, useMemo, useState } from 'react';
import { useInfiniteQuery } from 'react-query';

import { ACTION_ERROR_INTER, CALENDAR, MODULE_NAME } from './constant';
import { Component } from './component';

import { action } from './action';
import moment from 'moment';
import { TRANSACTIONS_ITEM_DATA_RAW_INTER } from '../../data/transactions/constant';
import { convertTransactionsList } from '../../data/transactions/convert';

export const Container: React.FC<{
  sessionId: string;
}> = ({ sessionId }) => {
  const [value, setValue] = useState('');
  const [search, setSearch] = useState('');
  const [range, setRange] = useState<CALENDAR[]>([
    {
      startDate: null,
      endDate: null,
      key: 'selection',
    },
  ]);

  const preFetch = useInfiniteQuery({
    queryKey: [MODULE_NAME, sessionId],
    queryFn: ({ pageParam = 1 }) =>
      action({
        pageParam,
        category: value,
        sessionId,
        search,
        fromDate: range[0].startDate
          ? moment(range[0].startDate).format('YYYY-MM-DD')
          : null,
        toDate: range[0].endDate
          ? moment(range[0].endDate).format('YYYY-MM-DD')
          : null,
      }),
    getNextPageParam: (lastPage: any, allPages: any) => {
      return lastPage.length ? allPages.length + 1 : 1;
    },
    // retry: 0,
    // refetchInterval: false,
    // refetchOnReconnect: false,
    // refetchOnWindowFocus: false,
  });

  const data = useMemo(() => {
    return convertTransactionsList(
      preFetch?.data?.pages.reduce((acc: any, page: any) => {
        return [...acc, ...page.list];
      }, []) as TRANSACTIONS_ITEM_DATA_RAW_INTER[],
    );
  }, [preFetch?.data]);

  const isLoading = () => {
    if (preFetch.isLoading) {
      return true;
    }
  };

  const isSuccess = () => {
    if (preFetch.isSuccess) {
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
      )[0] as unknown as TRANSACTIONS_ITEM_DATA_RAW_INTER[];
      return !data.length;
    }
  };

  useEffect(() => {
    preFetch.refetch();
  }, [range, value, search]);
  return (
    <Component
      value={value}
      setValue={setValue}
      search={search}
      setSearch={setSearch}
      range={range}
      setRange={setRange}
      data={data}
      isLoading={isLoading()}
      isError={isError()}
      isSuccess={isSuccess()}
      errorMessage={getErrorMessage()}
      fetchNextPage={preFetch.fetchNextPage}
      isFetching={preFetch.isFetching}
      isIdle={isIdle()}
      sessionId={sessionId}
    />
  );
};
