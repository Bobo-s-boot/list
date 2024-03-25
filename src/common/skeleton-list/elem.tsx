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

export const Elem: React.FC = ({}) => {
  return (
    <GridElem spacing={3}>
      {[1, 2, 3, 4].map(() => (
        <CardElem>
          <SkeletonTitle animated={true} />
        </CardElem>
      ))}
    </GridElem>
  );
};

const SkeletonTitle = styled(IonSkeletonText)`
  height: 24px;
  margin: 0;
  width: 150px;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  opacity: ${({ theme }) => theme.value[VALUE_OPACITY_ENUM.SKELETON]};
`;
