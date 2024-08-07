import React from 'react';
import { DATA_INTER } from './constant';
import styled from 'styled-components';
import { GridElem } from '../../common/grid';
import { ProjectItemElem } from '../../data/project/frame/project-item-list.elem ';
import { PROJECT_ITEM_DATA_INTER } from '../../data/project/constant';
import { SkeletonListElem } from '../../common/skeleton-list';
import { CrudItemCreateContainer } from '../crud-item-create';
import { AlertActionElem } from '../../common/alert-action';

interface ProductItemProps {
  data?: DATA_INTER;
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  errorMessage?: string;
}

export const Component: React.FC<ProductItemProps> = ({
  data,
  isLoading,
  isError,
  isSuccess,
  errorMessage,
}) => {
  return (
    <Container>
      <ListContainer spacing={6}>
        <GridElem spacing={3}>
          <CrudItemCreateContainer />
          {isLoading && <SkeletonListElem />}
          {isError && <AlertActionElem text={errorMessage} />}

          {isSuccess &&
            data &&
            !data.isEmpty &&
            data?.list.map((item: PROJECT_ITEM_DATA_INTER) => (
              <React.Fragment key={item.id}>
                <ProjectItemElemStyled {...item} />
              </React.Fragment>
            ))}
        </GridElem>
      </ListContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const ListContainer = styled(GridElem)`
  justify-items: center;
`;
const ProjectItemElemStyled = styled(ProjectItemElem)`
  &:hover {
    opacity: 1;
  }
`;
