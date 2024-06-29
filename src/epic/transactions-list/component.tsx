import React from 'react';
import styled from 'styled-components';
import { IonInfiniteScroll } from '@ionic/react';

import { AlertActionElem } from '../../common/alert-action';
import { GridElem } from '../../common/grid';
import { PROPS_TYPE } from './constant';
import { AlertEmptyElem } from '../../common/alert-empty';
import { TRANSACTIONS_ITEM_DATA_INTER } from '../../data/transactions/constant';
import { TransactionsItemElem } from '../../data/transactions/frame/transactions-item-list.elem ';
import { TransactionsSkeletonElem } from '../../data/transactions/frame/transactions-skeleton.elem';
import { Spacing } from '../../theme';

export const Component: React.FC<PROPS_TYPE> = ({
  data,
  isSuccess,
  isError,
  errorMessage,
  isFetching,
  fetchNextPage,
  isIdle,
}) => {
  const isIonInfiniteScroll =
    data && data.list && data.list.length > 39 && !data.isEmpty && !isFetching;

  return (
    <GridElem spacing={5}>
      {isError && <AlertActionElem text={errorMessage} />}
      {isSuccess && data && data.isEmpty && <AlertEmptyElem />}
      <GridElem spacing={3}>
        {data && !data.isEmpty && !isFetching && (
          <Container style={{ width: '100%' }}>
            {data.list.map((item: TRANSACTIONS_ITEM_DATA_INTER) => (
              <TransactionsItemElem {...item} />
            ))}
          </Container>
        )}
        {isIonInfiniteScroll && (
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
      </GridElem>
    </GridElem>
  );
};

const Container = styled.div`
  display: grid;
  row-gap: ${Spacing(3)};

  @media screen and (width>800) {
    grid-template-columns: auto auto repeat(3, min-content);
  }
`;
