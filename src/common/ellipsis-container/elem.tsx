import React from 'react';

import styled from 'styled-components';

export const Elem: React.FC<{
  className?: string;
  style?: object;
}> = ({ children, className, style }) => {
  return (
    <Container style={style} className={className}>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: table;
  table-layout: fixed;
  width: 100%;
`;
