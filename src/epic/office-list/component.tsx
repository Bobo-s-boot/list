import React from 'react';

import styled from 'styled-components';
import { AlertActionElem } from '../../common/alert-action';

import { GridElem } from '../../common/grid';
import { DATA_INTER, PROPS_TYPE } from './constant';
import { AlertEmptyElem } from '../../common/alert-empty';
import { OFFICE_ITEM_DATA_INTER } from '../../data/office/constant';
import { OfficeItemElem } from '../../data/office/frame/office-item-list.elem ';
import { OfficeSkeletonElem } from '../../data/office/frame/office-skeleton.elem';
import { Spacing } from '../../theme';
import { OfficeFilterContainer } from '../office-filter';
import { IonInfiniteScroll } from '@ionic/react';

export const Component: React.FC<PROPS_TYPE> = ({
  data,
  isSuccess,
  isError,
  errorMessage,
  project,
  setProject,
  setType,
  search,
  setSearch,
  type,
  isFetching,
  fetchNextPage,
  isIdle,
}) => {
  const isIonInfiniteScroll =
    data && data.list && data.list.length > 39 && !data.isEmpty && !isFetching;

  return (
    <GridElem spacing={5}>
      <OfficeFilterContainer
        project={project}
        setProject={setProject}
        setType={setType}
        search={search}
        setSearch={setSearch}
        type={type}
      />
      {isError && <AlertActionElem text={errorMessage} />}
      {isSuccess && data && data.isEmpty && <AlertEmptyElem />}

      <GridElem spacing={3}>
        {data && !data.isEmpty && !isFetching && (
          <Container style={{ width: '100%' }}>
            {data.list.map((item: OFFICE_ITEM_DATA_INTER) => (
              <OfficeItemElem {...item} />
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
            {!isIdle && <OfficeSkeletonElem />}
          </IonInfiniteScroll>
        )}
        {isFetching && <OfficeSkeletonElem />}
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
