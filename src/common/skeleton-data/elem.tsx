import React, { ReactNode } from 'react';
import { IonSkeletonText } from '@ionic/react';

import styled from 'styled-components';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';
import { GridElem } from '../grid';
import { VALUE_OPACITY_ENUM } from '../../theme/value';

export const Elem: React.FC = ({ }) => {
  return (
    <GridElem size="mod">
      {[1, 2, 3].map(() => (
        <GridElem size="com">
          <SkeletonTitle animated={true} />
          <GridElem size="elem">
            <SkeletonData animated={true} />
            <SkeletonData animated={true} />
          </GridElem>
        </GridElem>
      ))}
    </GridElem>
  );
};

const SkeletonTitle = styled(IonSkeletonText)`
  height: 16px;
  margin: 0;
  width: 50%;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  opacity: ${({ theme }) => theme.value[VALUE_OPACITY_ENUM.SKELETON]}; 
`;

const SkeletonData = styled(IonSkeletonText)`
  height: 14px;
  margin: 0;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  opacity: ${({ theme }) => theme.value[VALUE_OPACITY_ENUM.SKELETON]}; 
`;
