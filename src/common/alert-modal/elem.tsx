import React, { useState } from 'react';

import styled from 'styled-components';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
  SIZE_FONT_ENUM,
  SIZE_LAYOUT_DATA,
  SIZE_LAYOUT_ENUM,
} from '../../theme/size';
import { TextElem } from '../text';
import { Spacing } from '../../theme';
import { GridElem } from '../grid';
import { ButtonElem } from '../button';
import { COLOR_ENUM } from '../../theme/color';

export const Elem: React.FC<{
  action: Function;
  actionClose: Function;
  titleTid?: any;
  titleTvalue?: object;
  infoTid?: any;
  infoTvalue?: object;
  buttonActionTid?: any;
  buttonActionTvalue?: object;
  buttonCloseTid?: any;
  buttonCloseTvalue?: object;
  visible: boolean;
}> = ({
  action,
  actionClose,
  titleTid,
  titleTvalue,
  infoTid,
  infoTvalue,
  buttonActionTid,
  buttonActionTvalue,
  buttonCloseTid,
  buttonCloseTvalue,
  visible,
}) => {
  // const handleClose = () => {
  //   actionClose();
  // };

  // const handleAction = () => {
  //   action();
  // };
  return (
    <>
      {visible === true && (
        <Container>
          <Content>
            <GridElem spacing={12}>
              <GridElem spacing={4}>
                <Header>
                  <img src="/assets/svg/alert-modal/alert-triangle.svg" />
                  <TextElem
                    tid={titleTid}
                    tvalue={titleTvalue}
                    size="heading"
                    type="bold"
                  />
                </Header>
                <TextElem tid={infoTid} tvalue={infoTvalue} />
              </GridElem>

              <GridElem spacing={3}>
                <ButtonElem
                  onClick={action}
                  tid={buttonActionTid}
                  tvalue={buttonActionTvalue}
                />
                <ButtonElem
                  onClick={actionClose}
                  tid={buttonCloseTid}
                  tvalue={buttonCloseTvalue}
                />
              </GridElem>
            </GridElem>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(16, 76, 110, 0.74);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Content = styled.div`
  max-width: calc(
    ${SIZE_LAYOUT_DATA[SIZE_LAYOUT_ENUM.SMALL]}px - ${Spacing(12)}
  );
  margin: ${Spacing(5)};
  padding: ${Spacing(6)};
  background: ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_PRIMARY]};
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  width: 100%;
  z-index: 999;
`;

const Header = styled.div`
  display: flex;
  gap: ${Spacing(2.5)};
`;
