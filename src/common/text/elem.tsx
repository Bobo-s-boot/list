import React, { ReactNode } from 'react';

import { i18n } from '../../lib/lang';

import styled, { css } from 'styled-components';
import {
  SIZE_FONT_DATA,
  SIZE_FONT_ENUM,
  SIZE_FONT_TYPE,
  SIZE_FONT_WEIGHT_DATA,
  SIZE_FONT_WEIGHT_TYPE,
  SIZE_FONT_WEIGHT_ENUM,
} from '../../theme/size';
import { COLOR_TYPE, COLOR_ENUM } from '../../theme/color';

export const Elem: React.FC<{
  tid?: string;
  tvalue?: object;
  color?: COLOR_TYPE;
  type?: SIZE_FONT_WEIGHT_TYPE;
  size?: SIZE_FONT_TYPE;
  children?: ReactNode;
  lineHeight?: boolean;
  lineThrought?: boolean;
  oneLine?: boolean;
  className?: string;
  style?: Object;
  isMulishFont?: boolean;
}> = ({
  children,
  tid,
  tvalue,
  color,
  size,
  type,
  lineHeight,
  lineThrought,
  oneLine,
  className,
  isMulishFont,
  style = {},
}) => {
    return (
      <Text
        color={color}
        size={size}
        type={type}
        lineHeight={lineHeight}
        lineThrought={lineThrought}
        oneLine={oneLine}
        className={className}
        style={style}
        isMulishFont={isMulishFont}
      >
        {tid ? i18n.t(tid, tvalue) : children}
      </Text>
    );
  };

const Text = styled.span<{
  size?: SIZE_FONT_TYPE;
  color?: COLOR_TYPE;
  type?: SIZE_FONT_WEIGHT_TYPE;
  lineHeight?: boolean;
  lineThrought?: boolean;
  oneLine?: boolean;
  isMulishFont?: boolean;
}>`
  display: inline-block;
  text-align: top;
  ${({
  size = SIZE_FONT_ENUM.DEFAULT,
  color = COLOR_ENUM.DEFAULT,
  type = SIZE_FONT_WEIGHT_ENUM.REGULAR,
  lineHeight = false,
  lineThrought = false,
  oneLine = false,
  isMulishFont,
}) => {
    return css`
      font-family: ${isMulishFont ? 'Mulish' : 'Helvetica, sans-serif'};
      /* font-family: 'Helvetica'; */

      font-size: ${SIZE_FONT_DATA[size]}px;
      color: ${({ theme }) => theme[color]};
      font-weight: ${SIZE_FONT_WEIGHT_DATA[type]};
      text-decoration: ${lineThrought ? 'line-through' : 'none'};
      overflow: ${oneLine ? 'hidden' : 'visible'};
      text-overflow: ${oneLine ? 'ellipsis' : 'clip'};
      white-space: ${oneLine ? 'nowrap' : 'pre-line'};
      /* max-width: ${oneLine ? '280px' : '100%'}; */
      line-height: ${lineHeight ? 1.2 : `normal`};
      /* height: ${lineHeight ? 'auto' : `${SIZE_FONT_DATA[size]}px`}; */
    `;
  }}
`;
