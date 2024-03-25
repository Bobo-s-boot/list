import React from 'react';

import styled, { css } from 'styled-components';

import { IonSpinner } from '@ionic/react';
import {
  SIZE_ICON_DATA,
  SIZE_ICON_ENUM,
  SIZE_ICON_TYPE,
} from '../../theme/size';
import { COLOR_TYPE, COLOR_ENUM } from '../../theme/color';

export const Elem: React.FC<{
  size?: SIZE_ICON_TYPE;
  color?: COLOR_TYPE;
  className?: any;
}> = ({ size, color, className }) => {
  return <Spinner name="lines" size={size} className={className} />;
};

const Spinner = styled(IonSpinner)<{
  size?: SIZE_ICON_TYPE;
  customColor?: COLOR_TYPE;
}>`
  ${({ size = SIZE_ICON_ENUM.LARGE, customColor = COLOR_ENUM.ACTION }) => {
    return css`
      height: ${SIZE_ICON_DATA[size]}px;
      width: ${SIZE_ICON_DATA[size]}px;
      color: ${({ theme }) => theme[customColor]};
    `;
  }}
`;
