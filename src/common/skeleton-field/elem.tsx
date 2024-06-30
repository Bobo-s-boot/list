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

export const Elem: React.FC<{
  title?: boolean;
  className?: string;
  style?: Object;
}> = ({ title = true, className, style = {} }) => {
  return (
    <Container spacing={3} className={className} style={style}>
      {title && <SkeletonLabel animated={true} className="title" />}
      <SkeletonField className="field" />
    </Container>
  );
};

const SkeletonField = styled(IonSkeletonText)`
  height: 46px;
  width: 100%;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  opacity: ${({ theme }) => theme.value[VALUE_OPACITY_ENUM.SKELETON]};
  margin: 0;
`;

const SkeletonLabel = styled(IonSkeletonText)`
  height: 14px;
  margin: 0;
  width: 40%;
  opacity: ${({ theme }) => theme.value[VALUE_OPACITY_ENUM.SKELETON]};
`;

const Container = styled(GridElem)`
  align-content: flex-start;
`;
