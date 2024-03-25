import React, { ReactNode } from 'react';
import { IonSkeletonText } from '@ionic/react';
import { Spacing } from '../../theme';

import styled from 'styled-components';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';
import { GridElem } from '../grid';
import { VALUE_OPACITY_ENUM } from '../../theme/value';

export const Elem: React.FC<{ single?: boolean; solo?: boolean }> = ({
  single,
  solo,
}) => {
  if (single) {
    return <SkeletonField />;
  }
  if (solo) {
    return (
      <SoloContainer>
        <SkeletonField />
      </SoloContainer>
    );
  }
  return (
    <GridElem spacing={2}>
      {[1, 2, 3, 4, 5].map(() => (
        <Container spacing={2}>
          <SkeletonLabel animated={true} />
          <SkeletonField />
        </Container>
      ))}
    </GridElem>
  );
};

const SoloContainer = styled.div`
  margin: 20px 0;
`;

const SkeletonField = styled(IonSkeletonText)`
  height: 50px;
  width: 100%;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  opacity: ${({ theme }) => theme.value[VALUE_OPACITY_ENUM.SKELETON]};
  margin: 0;
`;

const SkeletonLabel = styled(IonSkeletonText)`
  height: 16px;
  margin: 0;
  width: 40%;
  margin-left: ${Spacing(2.5)};
  opacity: ${({ theme }) => theme.value[VALUE_OPACITY_ENUM.SKELETON]};
`;

const Container = styled(GridElem)`
  height: 97px;
  align-content: flex-start;
`;
