import React from 'react';

import styled from 'styled-components';
import { Spacing } from '../../theme';
import { GridElem } from '../grid';

export const Elem: React.FC<{
  className?: string;
}> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

const Container = styled(GridElem)`
  gap: ${Spacing(4)};
  grid-template-columns: 1fr 1fr;
  align-items: start;
`;
