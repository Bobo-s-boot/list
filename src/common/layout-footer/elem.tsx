import React, { ReactNode } from 'react';

import styled from 'styled-components';

import { IonFooter } from '@ionic/react';
import { SIZE_LAYOUT_DATA, SIZE_LAYOUT_ENUM } from '../../theme/size';
import { Spacing } from '../../theme';
import { COLOR_ENUM } from '../../theme/color';

export const Elem: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <Footer>
      <Container>{children}</Container>
    </Footer>
  );
};

const Footer = styled(IonFooter)`
  background: ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_PRIMARY]};
  ::before {
    content: none;
  }
  border-top: 1px solid ${({ theme }) => theme[COLOR_ENUM.DIVIDER]};
  @media (min-width: 900px) {
    display: none;
  }
`;

const Container = styled.div`
  max-width: ${SIZE_LAYOUT_DATA[SIZE_LAYOUT_ENUM.SMALL]}px;
  margin: 0 auto;
  padding: ${Spacing(3)};
  padding-bottom: ${Spacing(3)};

  display: grid;
  gap: ${Spacing(4)};
`;
