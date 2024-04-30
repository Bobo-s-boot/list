import React, { ReactNode, useEffect } from 'react';
import { IonContent } from '@ionic/react';

import styled, { css } from 'styled-components';

import {
  COLOR_ENUM,
  COLOR_TYPE,
  DARK_COLOR_DATA,
  LIGHT_COLOR_DATA,
} from '../../theme/color';
import { THEME_MODULE_NAME } from '../../data/theme';
import { useSelector } from 'react-redux';
import { THEME_ENUM } from '../../data/theme/constant';
import { StatusBar } from '@capacitor/status-bar';
import backgroundImg from '../../asset/img/background.png';
import { Capacitor } from '@capacitor/core';

export const Elem: React.FC<{
  children: ReactNode;
  background?: COLOR_TYPE;
  className?: string;
  oneColumn?: boolean;
  tab?: boolean;
}> = ({
  children,
  background = 'backgroundPrimary',
  className,
  oneColumn = false,
  tab = false,
}) => {
  const { state } = useSelector((s: any) => ({
    state: s[THEME_MODULE_NAME],
  }));

  // useEffect(() => {
  //   if (Capacitor.isNativePlatform()) {
  //     try {
  //       StatusBar.setBackgroundColor({
  //         color: `transparent`,
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }

  //     document
  //       .querySelector('meta[name="theme-color"]')
  //       ?.setAttribute('content', `transparent`);
  //   }
  // }, [background, state.type]);
  const bg =
    state.type === THEME_ENUM.LIGHT
      ? LIGHT_COLOR_DATA[COLOR_ENUM.WHITE]
      : DARK_COLOR_DATA[COLOR_ENUM.WHITE];
  return (
    <Background
      background={bg}
      className={className}
      oneColumn={oneColumn}
      tab={tab}
      id="layoutApp1"
    >
      <div id="layoutApp" />
      {children}
    </Background>
  );
};

const Background = styled(IonContent)<{
  background?: string;
  oneColumn?: boolean;
  tab: boolean;
}>`
  width: 100%;
  height: 100%;

  ${({ background }) => {
    return css`
      --background: ${background};
    `;
  }}

  ${({ oneColumn, tab }) => {
    if (!oneColumn) {
      return css`
        ::part(scroll) {
          display: grid;
          grid-template-columns: 270px auto;
          grid-template-rows: ${tab ? '162px' : '92px'} auto;
        }
      `;
    }
  }};
`;
