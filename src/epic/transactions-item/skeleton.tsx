import React from 'react';
import { ContentContainerElem } from '../../common/content-container';
import { DoubleContainerElem } from '../../common/double-container';
import { GridElem } from '../../common/grid';
import { SkeletonFieldElem } from '../../common/skeleton-field';
import { TextElem } from '../../common/text';
import styled from 'styled-components';
import { IonSkeletonText } from '@ionic/react';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';
import { VALUE_OPACITY_ENUM } from '../../theme/value';

export const Skeleton: React.FC<{}> = ({}) => {
  return (
    <Container spacing={4}>
      <GridElem spacing={2}>
        <SkeletonTitle animated />
        <SkeletonData animated />
      </GridElem>
      <GridElem spacing={2}>
        <SkeletonTitle animated />
        <SkeletonData animated />
      </GridElem>
      <GridElem spacing={2}>
        <SkeletonTitle animated />
        <SkeletonData animated />
        <SkeletonData animated />
        <SkeletonData animated />
      </GridElem>
      <GridElem spacing={2}>
        <SkeletonTitle animated />
        <SkeletonData animated />
        <SkeletonData animated />
        <SkeletonData animated />
      </GridElem>
      <GridElem spacing={2}>
        <SkeletonTitle animated />
        <SkeletonData animated />
      </GridElem>
      <GridElem spacing={2}>
        <SkeletonTitle animated />
        <SkeletonData animated />
      </GridElem>
      <GridElem spacing={2}>
        <SkeletonTitle animated />
        <SkeletonData animated />
      </GridElem>
      <GridElem spacing={2}>
        <SkeletonTitle animated />
        <SkeletonData animated />
      </GridElem>
    </Container>
  );
};

const Container = styled(GridElem)`
  grid-template-columns: 1fr 1fr;
`;

const SkeletonTitle = styled(IonSkeletonText)`
  height: 12px;
  margin: 0;
  width: 50%;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  opacity: ${({ theme }) => theme.value[VALUE_OPACITY_ENUM.SKELETON]};
`;

const SkeletonData = styled(IonSkeletonText)`
  height: 14px;
  margin: 0;
  width: 70%;

  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  opacity: ${({ theme }) => theme.value[VALUE_OPACITY_ENUM.SKELETON]};
`;
