import React from 'react';

import styled from 'styled-components';
import { AlertActionElem } from '../../common/alert-action';

import { GridElem } from '../../common/grid';
import { DATA_INTER } from './constant';
import { ProjectItemElem } from '../../data/project/frame/project-item-list.elem ';
import { PROJECT_ITEM_DATA_INTER } from '../../data/project/constant';
import { SkeletonListElem } from '../../common/skeleton-list';
import { ProjectItemCreateContainer } from '../project-item-create';

export const Component: React.FC<{
  data?: DATA_INTER;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
}> = ({ data, isLoading, isSuccess, isError, errorMessage }) => {
  return (
    <Container>
      <ListContainer spacing={6}>
        <GridElem spacing={3}>
          <ProjectItemCreateContainer />
          {isLoading && <SkeletonListElem />}
          {isError && <AlertActionElem text={errorMessage} />}

          {isSuccess &&
            data &&
            !data.isEmpty &&
            data?.list.map((item: PROJECT_ITEM_DATA_INTER) => (
              <React.Fragment key={item.id}>
                <ProjectItemElem {...item} />
              </React.Fragment>
            ))}
        </GridElem>
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const ListContainer = styled(GridElem)`
  justify-items: center;
`;
