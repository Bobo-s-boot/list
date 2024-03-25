import React, { useState } from 'react';

import styled, { css } from 'styled-components';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
  SIZE_FONT_DATA,
  SIZE_FONT_ENUM,
} from '../../theme/size';
import {
  COLOR_DATA,
  COLOR_ENUM,
  COLOR_TYPE,
  DARK_COLOR_DATA,
} from '../../theme/color';
import {
  ALERT_ACTION_COLOR_DATA,
  ALERT_ACTION_ENUM,
  ALERT_ACTION_TYPE,
  ALERT_BACKGROUND_COLOR_DATA,
  ALERT_ICON,
} from './constants';
import { IonToast } from '@ionic/react';
import './style.css';
import { i18n } from '../../lib/lang';
import alertIcon from '../../asset/svg/alert/error.svg';

export const Elem: React.FC<{
  text?: string;
  tid?: string;
  tvalue?: object;
  type?: ALERT_ACTION_TYPE;
  open?: any;
}> = ({ text, tid, tvalue, type = ALERT_ACTION_ENUM.ERROR, open }) => {
  const [showToast, setShowToast] = useState(true);
  // const handleSetShowToast = () => setShowToast(false)
  const props = open ? {} : { duration: 3500 };
  return (
    <Toast
      position="top"
      isOpen={showToast}
      // onDidDismiss={handleSetShowToast}
      message={tid ? i18n.t(tid, tvalue) : text}
      cssClass="custom-toast"
      type={type}
      icon={ALERT_ICON[type]}
      {...props}
      // duration={3233333333333333333333333333333333333333}
      // className={className}
    />
  );
};

const Toast = styled(IonToast)<{
  type: ALERT_ACTION_TYPE;
}>`
  position: static;
  &.custom-toast {
    ${({ type }) => {
      return css`
        --background: ${COLOR_DATA[COLOR_ENUM.WHITE]};
        --max-width: 528px;
      `;
    }}
  }
  ::part(container) {
    border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.ALERT]}px;
    display: flex;
    align-items: center;
    ${({ type }) => {
      return css`
        border: 1px solid ${ALERT_ACTION_COLOR_DATA[type]};
      `;
    }}
  }
  ::part(message) {
    font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.DEFAULT]}px;
    ${({ type }) => {
      return css`
        color: ${ALERT_ACTION_COLOR_DATA[type]};
      `;
    }}
  }
`;
