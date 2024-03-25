import React from 'react';

import styled from 'styled-components';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';
import { COLOR_ENUM } from '../../theme/color';
import { Spacing } from '../../theme';
import { GridElem } from '../grid';

export const Elem: React.FC<{
  className?: string;
  spacing?: number;
}> = ({ children, className, spacing = 5 }) => {
  return (
    <Card spacing={spacing} className={className}>
      {children}
    </Card>
  );
};

const Card = styled(GridElem)`
  padding: ${Spacing(6)} ${Spacing(5)};
  background-color: ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_SECONDARY]};
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.CONTENT]}px;
  width: 100%;
`;
