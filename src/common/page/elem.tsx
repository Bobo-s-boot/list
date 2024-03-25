import React, { ReactNode, useEffect } from 'react';
import { IonContent, IonPage } from '@ionic/react';

import styled, { css } from 'styled-components';

import { COLOR_ENUM, COLOR_TYPE } from '../../theme/color';

export const Elem: React.FC<{
  children: ReactNode;
  background?: COLOR_TYPE;
}> = ({ children, background = 'backgroundPrimary' }) => {
  return <Background background={background}>{children}</Background>;
};

const Background = styled(IonPage)<{
  background?: COLOR_TYPE;
}>`
  ${({ background = COLOR_ENUM.BACKGROUND_SECONDARY }) => css`
    background-color: ${({ theme }) => theme[background]};
  `};
`;
