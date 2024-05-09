import React from 'react';
import { IonSkeletonText } from '@ionic/react';
import styled from 'styled-components';

import { GridElem } from '../../../common/grid';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../../theme/size';
import { VALUE_OPACITY_ENUM } from '../../../theme/value';
import { FlexElem } from '../../../common/flex';
import { COLOR_DATA, COLOR_ENUM } from '../../../theme/color';

export const Elem: React.FC = ({}) => {
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
              <SkeletonTitle
                animated={true}
                style={{ width: '80px', height: '24px' }}
              />
            </FlexElem>

            <FlexElem spacing={7} style={{ width: 'fit-content' }}>
              <SkeletonTitle animated={true} style={{ width: '80px' }} />
              <SkeletonTitle animated={true} style={{ width: '80px' }} />
              <SkeletonTitle animated={true} style={{ width: '80px' }} />
              <SkeletonTitle animated={true} style={{ width: '80px' }} />
            </FlexElem>
          </FlexElem>

          <GridElem spacing={4} className="mobileContainer">
            <SkeletonTitle animated={true} style={{ height: '24px' }} />

            <FlexElem spacing={5}>
              <GridElem spacing={3} style={{ width: 'min-content' }}>
                <Flex spacing={2} style={{ justifyContent: 'space-between' }}>
                  <SkeletonTitle animated={true} style={{ width: '100px' }} />
                </Flex>
                <Flex spacing={2} style={{ justifyContent: 'space-between' }}>
                  <SkeletonTitle animated={true} style={{ width: '100px' }} />
                </Flex>
              </GridElem>
              <GridElem spacing={3} style={{}}>
                <SkeletonTitle animated={true} style={{ width: '50px' }} />

                <Flex spacing={2}>
                  <SkeletonTitle animated={true} style={{ width: '60px' }} />
                  <SkeletonTitle animated={true} style={{ width: '100px' }} />
                </Flex>
              </GridElem>
            </FlexElem>
          </GridElem>
        </Card>
      ))}
    </GridElem>
  );
};

const Card = styled.div`
  display: flex;
  padding: 20px;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;

  width: 100%;

  background-color: ${({ theme }) =>
    theme[COLOR_DATA[COLOR_ENUM.BACKGROUND_PRIMARY]]} !important;

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

export { Elem as OfficeSkeletonElem };
