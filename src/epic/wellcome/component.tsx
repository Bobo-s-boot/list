import React from 'react';

import { TextElem } from '../../common/text';
import { GridElem } from '../../common/grid';
import styled from 'styled-components';
import { SIZE_LAYOUT_DATA, SIZE_LAYOUT_ENUM } from '../../theme/size';

import { AUTH_SIGNUP_PAGE_PATH } from '../../page/auth-signup';
import { AUTH_LOGIN_PAGE_PATH } from '../../page/auth-login';
import { ButtonElem } from '../../common/button';
import { RouterLinkElem } from '../../common/router-link';
import { Spacing } from '../../theme';

export const Component: React.FC<{}> = () => {
  return (
    <Container>
      <Content>
        <TitleContainer>
          <TextContainer spacing={3}>
            <TextElem
              size="title"
              color="white"
              type="bold"
              tid="WELLCOME.TITLE"
            />
            <TextElem color="white" tid="WELLCOME.DESCRIPTION" size="medium" />
          </TextContainer>
        </TitleContainer>
        <ButtonContainer>
          <GridElem size="input">
            <RouterLinkElem href={AUTH_SIGNUP_PAGE_PATH} opaque>
              <ButtonElem tid="WELLCOME.SIGN_UP_BUTTON" />
            </RouterLinkElem>
            <RouterLinkElem href={AUTH_LOGIN_PAGE_PATH} opaque>
              <ButtonElem tid="WELLCOME.LOGIN_BUTTON" fill="outline" />
            </RouterLinkElem>
          </GridElem>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
`;

const TextContainer = styled(GridElem)`
  margin-top: ${Spacing(13)};
  justify-items: center;
  z-index: 10;
  position: relative;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${SIZE_LAYOUT_DATA[SIZE_LAYOUT_ENUM.SMALL]}px;
  position: relative;
  gap: 0px;
  border-radius: 50px;
  padding: 0 ${Spacing(5)};
  padding-bottom: ${Spacing(9)};
`;

const Logo = styled.img`
  position: absolute;
  z-index: 1;
  height: calc(100vh - 200px);
  bottom: 85px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 10;
`;

const ButtonContainer = styled.div`
  z-index: 10;

  width: 100%;
`;
