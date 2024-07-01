import React from 'react';

import styled from 'styled-components';
import { AlertActionElem } from '../../common/alert-action';

import { GridElem } from '../../common/grid';

import { AlertEmptyElem } from '../../common/alert-empty';
import {
  TRANSACTIONS_ITEM_DATA_INTER,
  TRANSACTIONS_ITEM_LIST_DATA_INTER,
} from '../../data/transactions/constant';
import { TransactionsItemElem } from '../../data/transactions/frame/transactions-item-list.elem';
import { Spacing } from '../../theme';

import { IonInfiniteScroll } from '@ionic/react';
import { TextElem } from '../../common/text';
import { COLOR_ENUM } from '../../theme/color';

import { TransactionsSkeletonElem } from '../../data/transactions/frame/transactions-skeleton.elem';
import { CALENDAR } from './constant';

export const Component: React.FC<{
  data?: TRANSACTIONS_ITEM_LIST_DATA_INTER;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
  isFetching?: boolean;
  fetchNextPage: Function;
  isIdle?: boolean;
  setValue: Function;
  value: string;
  search: string;
  setSearch: Function;
  range: CALENDAR[];
  setRange: Function;
  // setSession: Function;
  // session: any;
  sessionId: string;
}> = ({
  data,
  isLoading,
  isSuccess,
  isError,
  errorMessage,
  isFetching,
  fetchNextPage,
  setValue,
  value,
  search,
  setSearch,
  range,
  setRange,
  // session,
  // setSession,
  isIdle,
  sessionId,
}) => {
    return (
      <GridElem spacing={5}>
        {/* <TRANSACTIONSFilterContainer
        value={value}
        setValue={setValue}
        // session={session}
        // setSession={setSession}
        search={search}
        setSearch={setSearch}
        range={range}
        setRange={setRange}
        sessionId={sessionId}
      /> */}
        {isError && <AlertActionElem text={errorMessage} />}
        {data && isSuccess && data.isEmpty && <AlertEmptyElem />}
        <Container>
          <NewGrid>
            {data && !data.isEmpty && !isFetching && (
              <>
                <Head>
                  <TextElem
                    tid="TRANSACTIONS.LIST.HEAD.NUMBER_ID"
                    type="semi-bold"
                    color="textPrimary"
                  />
                  <TextElem
                    tid="TRANSACTIONS.LIST.HEAD.DATE"
                    type="semi-bold"
                    color="textPrimary"
                  />
                  <TextElem
                    tid="TRANSACTIONS.LIST.HEAD.PAYMENT_TYPE"
                    type="semi-bold"
                    color="textPrimary"
                    style={{ justifySelf: 'center' }}
                  />
                  <TextElem
                    tid="TRANSACTIONS.LIST.HEAD.VALUTE_BUY"
                    type="semi-bold"
                    color="textPrimary"
                    style={{ justifySelf: 'center' }}
                  />
                  <TextElem
                    tid="TRANSACTIONS.LIST.HEAD.VALUTE_SELL"
                    type="semi-bold"
                    color="textPrimary"
                    style={{ justifySelf: 'center' }}
                  />
                  <TextElem
                    tid="TRANSACTIONS.LIST.HEAD.SUM"
                    type="semi-bold"
                    color="textPrimary"
                    style={{ justifySelf: 'center' }}
                  />
                </Head>
                {data?.list.map((item: TRANSACTIONS_ITEM_DATA_INTER) => (
                  <TransactionsItemElem {...item} />
                ))}
              </>
            )}
          </NewGrid>
          {data &&
            data.list &&
            data.list.length > 39 &&
            !data.isEmpty &&
            !isFetching && (
              <IonInfiniteScroll
                onIonInfinite={(ev) => {
                  fetchNextPage();
                  setTimeout(() => ev.target.complete(), 500);
                }}
              >
                {!isIdle && <TransactionsSkeletonElem />}
              </IonInfiniteScroll>
            )}
          {isFetching && <TransactionsSkeletonElem />}
        </Container>
      </GridElem>
    );
  };
const Container = styled.div`
  overflow-x: auto;
  scrollbar-color: ${({ theme }) => theme[COLOR_ENUM.INPUT]}
    transparent;
  scrollbar-width: thin;
`;

const NewGrid = styled(GridElem)`
  grid-template-columns: 2fr 2fr 1fr 2fr 2fr 2fr;
  row-gap: ${Spacing(3)};
  width: 1050px;
  
`;

const Head = styled(GridElem)`
  height: 46px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER]};
  width: 100%;
  align-items: center;
  padding: 0 ${Spacing(5)};
  display: grid;
  grid-column: span 6;
  grid-template-columns: subgrid;
  gap: ${Spacing(12)};
  text-align: center;
`;
