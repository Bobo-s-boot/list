import React from 'react';

import styled from 'styled-components';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';

import { COLOR_ENUM } from '../../theme/color';

export const Elem: React.FC<{ className?: string }> = ({ className }) => {
  return <Divider className={className} />;
};

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme[COLOR_ENUM.DIVIDER]};
`;
