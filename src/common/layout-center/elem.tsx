import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';

export const Elem: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return <Section>{children}</Section>;
};

const Section = styled.div`
  width: 100%;
  margin: auto 0;
  display: flex;
  justify-content: center;
`;
