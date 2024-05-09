import React, { ReactNode } from 'react';
import { IonSkeletonText } from '@ionic/react';

import styled from 'styled-components';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';
import { GridElem } from '../grid';
import { VALUE_OPACITY_ENUM } from '../../theme/value';
import { CardElem } from '../card';
import { COLOR_ENUM } from '../../theme/color';

export const Elem: React.FC = ({}) => {
  return (
    <GridElem spacing={3}>
      {[1, 2, 3, 4].map(() => (
        <Container>
          <SkeletonTitle animated={true} />
        </Container>
      ))}
    </GridElem>
  );
};

const Container = styled.div`
  padding: 20px;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  width: 100%;
  background-color: ${({ theme }) => theme[COLOR_ENUM.WHITE]};
`;

const SkeletonTitle = styled(IonSkeletonText)`
  height: 24px;
  margin: 0;
  width: 150px;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  opacity: ${({ theme }) => theme.value[VALUE_OPACITY_ENUM.SKELETON]};
`;
