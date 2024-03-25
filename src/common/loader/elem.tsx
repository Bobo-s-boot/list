import React from 'react';
import { IonProgressBar } from '@ionic/react';

import styled from 'styled-components';
import { COLOR_ENUM } from '../../theme/color';
import ReactDOM from 'react-dom';

export const Elem: React.FC = () => {
  return ReactDOM.createPortal(
    <Progress type="indeterminate" />,
    document.body,
  );
};

const Progress = styled(IonProgressBar)`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;

  --progress-background: ${({ theme }) => theme[COLOR_ENUM.BUTTON_PRIMARY]};
  --background: ${({ theme }) => theme[COLOR_ENUM.BORDER]};
`;
