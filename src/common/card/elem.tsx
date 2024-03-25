import React, { ReactNode } from 'react';

import styled from 'styled-components';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';
import { COLOR_ENUM } from '../../theme/color';
import { Spacing } from '../../theme';

import { IonRippleEffect } from '@ionic/react';

export const Elem: React.FC<{
  children: ReactNode;
  handleClick?: any;
  wide?: boolean;
  control?: boolean;
  className?: string;
}> = ({ children, handleClick, wide = false, control = false, className }) => {
  return (
    <Card
      onClick={handleClick}
      wide={wide}
      control={control}
      className={`${className} ${control && 'ion-activatable'} `}
    >
      {children}
      {control && <IonRippleEffect />}
    </Card>
  );
};

const Card = styled.div<{ wide: boolean; control?: boolean }>`
  padding: ${Spacing(4)} ${Spacing(5)};
  background-color: ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_SECONDARY]};
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.CARD]}px;
  cursor: pointer;

  border: 1px solid ${({ theme }) => theme[COLOR_ENUM.TRANSPARENT]};
  max-width: 100%;
  transition: all 0.2s;
  &:hover {
    border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_THIRD]};
    background-color: ${({ theme }) => theme[COLOR_ENUM.HOVER]};
  }
`;
