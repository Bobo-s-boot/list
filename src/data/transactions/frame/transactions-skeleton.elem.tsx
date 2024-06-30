import { IonSkeletonText } from '@ionic/react';
import React from 'react';

import styled from 'styled-components';
import { CardElem } from '../../../common/card';
import { FlexElem } from '../../../common/flex';
import { GridElem } from '../../../common/grid';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../../theme/size';
import { VALUE_OPACITY_ENUM } from '../../../theme/value';

export const Elem: React.FC = ({ }) => {
  return (
    <GridElem spacing={3}>
      {[1, 2, 3, 4].map(() => (
        <Card>
          <FlexElem
            style={{ justifyContent: 'space-between' }}
            className="desktopContainer"
          >
            <FlexElem spacing={4}>
              <SkeletonTitle animated={true} style={{ height: '24px' }} />
            </FlexElem>

            <FlexElem spacing={7} style={{ width: 'fit-content' }}>
              <SkeletonTitle animated={true} style={{ width: '130px' }} />
              <SkeletonTitle animated={true} style={{ width: '80px' }} />
              <SkeletonTitle animated={true} style={{ width: '80px' }} />
              <SkeletonTitle animated={true} style={{ width: '80px' }} />
              <SkeletonTitle animated={true} style={{ width: '130px' }} />
            </FlexElem>
          </FlexElem>
          <GridElem spacing={3} className="mobileContainer">
            <FlexElem spacing={4}>
              <SkeletonTitle animated={true} style={{ height: '24px' }} />
            </FlexElem>
            <SkeletonTitle animated={true} style={{ width: '100px' }} />

            <FlexElem spacing={7} style={{ width: 'fit-content' }}>
              <SkeletonTitle animated={true} style={{ width: '60px' }} />
              <SkeletonTitle animated={true} style={{ width: '60px' }} />
            </FlexElem>
          </GridElem>
        </Card>
      ))}
    </GridElem>
  );
};

const Card = styled(CardElem)`
  display: flex;
  cursor: auto;
  .desktopContainer {
    display: flex;
    @media screen and (width<=800px) {
      display: none;
    }
  }

  .mobileContainer {
    display: none;

    @media screen and (width<=800px) {
      display: grid;
    }
  }
`;

const SkeletonTitle = styled(IonSkeletonText)`
  height: 20px;
  margin: 0;
  width: 150px;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  opacity: ${({ theme }) => theme.value[VALUE_OPACITY_ENUM.SKELETON]};
`;

const Flex = styled(FlexElem)`
  width: auto;
  align-items: end;
`;

export { Elem as TRANSACTIONSSkeletonElem };
