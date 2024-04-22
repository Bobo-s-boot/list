import React from 'react';
import styled from 'styled-components';

import Logo from '../../asset/svg/common/logo.svg';
import { Spacing } from '../../theme';

export const Elem: React.FC<{}> = () => {
  return (
    <AuthHeader>
      <img src={Logo} />
    </AuthHeader>
  );
};

const AuthHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${Spacing(9)};
  margin-bottom: 64px;
`;
