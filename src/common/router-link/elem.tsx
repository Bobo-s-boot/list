import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';
import { useHistory } from 'react-router';
import { IonRippleEffect } from '@ionic/react';

import {
  VALUE_OPACITY_DATA,
  VALUE_OPACITY_ENUM,
  VALUE_TRANSITION_DATA,
  VALUE_TRANSITION_ENUM,
} from '../../theme/value';

export const Elem: React.FC<{
  children?: ReactNode;
  href: string;
  opaque?: boolean;
  onClick?: Function;
  className?: string;
}> = ({ children, href, opaque = false, onClick, className }) => {
  const history = useHistory();

  const handleAction = () => {
    if (onClick) {
      onClick();
    }
    setTimeout(() => {
      history.push(href);
    }, 0);
  };

  return (
    <Link
      onClick={handleAction}
      className={`${className} ion-activatable`}
      opaque={opaque}
    >
      {children}
    </Link>
  );
};

const Link = styled.div<{ opaque: boolean }>`
  position: relative;
  cursor: pointer;

  position: relative;
  display: flex;
  align-items: center;
  opacity: 1;
`;
