import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';
import {
  SIZE_GRID_TYPE,
  SIZE_GRID_DATA,
  SIZE_GRID_ENUM,
} from '../../theme/size';
import { Spacing } from '../../theme';

export const Elem: React.FC<{
  children: ReactNode;
  size?: SIZE_GRID_TYPE;
  spacing?: number;
  className?: string;
  style?: Object;
  onClick?: (event: MouseEvent) => void;
}> = ({ children, size, spacing, className, onClick, style = {} }) => {
  return (
    <Grid
      className={className}
      size={size}
      spacing={spacing}
      onClick={onClick}
      style={style}
    >
      {children}
    </Grid>
  );
};

const Grid = styled.div<{
  size?: SIZE_GRID_TYPE;
  spacing?: number;
  onClick: any;
}>`
  display: grid;
  width: 100%;
  align-items: start;
  ${({ size = SIZE_GRID_ENUM.DEFAULT, spacing }) =>
    spacing !== undefined
      ? css`
          grid-gap: ${Spacing(spacing)};
        `
      : css`
          grid-gap: ${SIZE_GRID_DATA[size]}px;
        `}
`;
