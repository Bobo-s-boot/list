import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';
import {
  SIZE_SECTION_TYPE,
  SIZE_SECTION_DATA,
  SIZE_SECTION_ENUM,
} from '../../theme/size';
import { Spacing } from '../../theme';

export const Elem: React.FC<{
  children: ReactNode;
  size?: SIZE_SECTION_TYPE;
  spacing?: number;
  paddingTop?: boolean;
  className?: string;
}> = ({
  className,
  children,
  size = 'default',
  spacing,
  paddingTop = false,
}) => {
  return (
    <Section
      size={size}
      spacing={spacing}
      paddingTop={paddingTop}
      className={className}
    >
      {children}
    </Section>
  );
};

const Section = styled.div<{
  size?: SIZE_SECTION_TYPE;
  spacing?: number;
  paddingTop?: boolean;
}>`
  display: grid;
  width: 100%;
  height: fit-content;
  align-items: start;
  ${({ size = SIZE_SECTION_ENUM.DEFAULT, spacing }) =>
    spacing
      ? css`
          grid-gap: ${Spacing(spacing)};
        `
      : css`
          grid-gap: ${SIZE_SECTION_DATA[size]}px;
        `};
  ${({ paddingTop }) =>
    paddingTop
      ? css`
          padding-top: ${Spacing(5)};
        `
      : ''};
`;
