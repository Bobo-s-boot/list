import React from 'react';
import { IonImg } from '@ionic/react';

import styled from 'styled-components';
import { useSelector } from '../../lib/store';
import { THEME_MODULE_NAME } from '../../data/theme';
import { THEME_ENUM } from '../../data/theme/constant';

export const Elem: React.FC = () => {
  const { state } = useSelector((s: any) => ({
    state: s[THEME_MODULE_NAME],
  }));
  return (
    <LogoContainer>
      <Img
        src={
          state.type === THEME_ENUM.LIGHT
            ? './assets/img/wellcome/logo.svg'
            : './assets/img/wellcome/logo-dark.svg'
        }
      />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;
const Img = styled(IonImg)`
  height: 164px;
  width: 201px;
`;
