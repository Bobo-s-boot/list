import React from 'react';
import { IonSkeletonText } from '@ionic/react';

import styled, { css } from 'styled-components';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';
import { GridElem } from '../grid';
import { COLOR_ENUM } from '../../theme/color';
import { VALUE_OPACITY_ENUM } from '../../theme/value';

export const Elem: React.FC<{ height?: number }> = ({ height }) => {
  return (
    <GridElem spacing={3}>
      {[1, 2, 3].map(() => (
        <GridElem size="elem">
          <SkeletonCard animated={true} height={height} />
        </GridElem>
      ))}
    </GridElem>
  );
};

const SkeletonCard = styled(IonSkeletonText) <{ height?: number }>`
  margin: 0;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  opacity: ${({ theme }) => theme.value[VALUE_OPACITY_ENUM.SKELETON]}; 

  ${({ height = 50 }) => css`
    height: ${height}px;
  `}
`;
