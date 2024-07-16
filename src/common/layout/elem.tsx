import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';
import {
  SIZE_LAYOUT_TYPE,
  SIZE_LAYOUT_DATA,
  SIZE_LAYOUT_ENUM,
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';
import { Spacing } from '../../theme';
import { COLOR_ENUM } from '../../theme/color';

export const Elem: React.FC<{
  children: ReactNode;
  size?: SIZE_LAYOUT_TYPE;
  direction?: string;
  fullHeight?: boolean;
  className?: string;
  oneColumn?: boolean;
}> = ({
  children,
  size = 'small',
  direction = 'row',
  fullHeight = false,
  className,
  oneColumn = false,
}) => {
    return (
      <Center
        className={className}
        size={size}
        direction={direction}
        fullHeight={fullHeight}
        oneColumn={oneColumn}
      >
        {children}
      </Center>
    );
  };

const Center = styled.div<{
  size: SIZE_LAYOUT_TYPE;
  direction?: string;
  fullHeight: boolean;
  oneColumn?: boolean;
}>`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: ${Spacing(6)};
  background-color: ${({ theme }) => theme[COLOR_ENUM.TRANSPARENT]};
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.CONTENT]}px;

  box-sizing: border-box;
  height: ${(props) => (props.fullHeight ? '100%' : 'max-content')};
  align-items: center;

  @media screen and (min-width: 900px) {
    /* max-width: ${SIZE_LAYOUT_DATA[SIZE_LAYOUT_ENUM.DEFAULT]}px;
    padding-right: 270px;
    flex-direction: row; */
  }
  ${({ oneColumn }) => {
    if (oneColumn) {
      return css`
        justify-content: center;
      `;
    }
  }}
  ${({ direction, size }) => css`
    flex-direction: ${direction};
    max-width: calc(${SIZE_LAYOUT_DATA[size]}px + ${Spacing(10 * 2)});
  `};
`;
