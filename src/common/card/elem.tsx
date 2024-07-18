import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';
import { COLOR_ENUM } from '../../theme/color';
import { Spacing } from '../../theme';

import { IonRippleEffect } from '@ionic/react';
import {
  VALUE_TRANSITION_DATA,
  VALUE_TRANSITION_ENUM,
} from '../../theme/value';

export const Elem: React.FC<{
  children: ReactNode;
  handleClick?: any;
  wide?: boolean;
  disabled?: boolean;
  control?: boolean;
  className?: string;
  backgoundColor?: string;
  opacityOne?: number;
}> = ({
  children,
  handleClick,
  wide = false,
  control = false,
  className,
  disabled = false,
  backgoundColor,
  opacityOne = 0.8,
}) => {
    return (
      <Card
        disabled={disabled}
        onClick={handleClick}
        wide={wide}
        control={control}
        className={`${className} ${control && 'ion-activatable'} `}
        backgoundColor={backgoundColor}
        opacityOne={opacityOne}
      >
        {children}
        {control && <IonRippleEffect />}
      </Card>
    );
  };

const Card = styled.div<{
  wide: boolean;
  control?: boolean;
  disabled?: boolean;
  backgoundColor?: string;
  opacityOne?: number;
}>`
  padding: 20px;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  transition: background-color
    ${VALUE_TRANSITION_DATA[VALUE_TRANSITION_ENUM.HOVER]};
  width: 100%;

  ${({ theme, disabled = false }) =>
    disabled &&
    css`
      background-color: ${theme[COLOR_ENUM.BUTTON_DISABLED]};

      & > * > * {
        color: ${theme[COLOR_ENUM.TEXT_BUTTON_DISABLED]};
      }
    `}

  &:not(:disabled) {
    background-color: ${({ theme, backgoundColor }) =>
    backgoundColor || theme[COLOR_ENUM.BUTTON_PRIMARY]};
    & > * > * {
      color: ${({ theme }) => theme[COLOR_ENUM.BUTTON_TEXT]};
    }

    &:hover {
      background-color: ${({ theme }) => theme[COLOR_ENUM.BUTTON_HOVER]};
      cursor: pointer;
      opacity: ${({ opacityOne }) => opacityOne};
    }
  }
`;
