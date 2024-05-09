import { IonIcon } from '@ionic/react';
import React, { useState } from 'react';

import { FieldTextElem } from '../field-text';
import eyeIcon from '../../asset/svg/field-password/eye.svg';
import eyeIconDark from '../../asset/svg/field-password/eye-dark.svg';
import eyeCloseIcon from '../../asset/svg/field-password/closeEye.svg';
import eyeCloseIconDark from '../../asset/svg/field-password/eyeOff-dark.svg';
import { PROPS_TYPE } from './constant';
import styled from 'styled-components';
import { Spacing } from '../../theme';
import { THEME_ENUM } from '../../data/theme/constant';
import { useSelector } from '../../lib/store';
import { THEME_MODULE_NAME } from '../../data/theme';
import {
  VALUE_OPACITY_DATA,
  VALUE_OPACITY_ENUM,
  VALUE_TRANSITION_DATA,
  VALUE_TRANSITION_ENUM,
} from '../../theme/value';

export const Elem: React.FC<PROPS_TYPE> = ({ ...props }) => {
  const [visible, setVisible] = useState(false);
  const handleChange = () => {
    setVisible(!visible);
  };
  const { state } = useSelector((s: any) => ({
    state: s[THEME_MODULE_NAME],
  }));
  return (
    <FieldTextElem
      {...props}
      type={visible ? 'text' : 'password'}
      icon={
        visible ? (
          <IconContainer onClick={handleChange}>
            <Icon
              icon={state.type === THEME_ENUM.LIGHT ? eyeIcon : eyeIconDark}
            />
          </IconContainer>
        ) : (
          <IconContainer onClick={handleChange}>
            <Icon
              icon={
                state.type === THEME_ENUM.LIGHT
                  ? eyeCloseIcon
                  : eyeCloseIconDark
              }
            />
          </IconContainer>
        )
      }
    />
  );
};

const Icon = styled(IonIcon)`
  height: 16px;
  width: 16px;
`;
const IconContainer = styled.div`
  height: 53px;
  display: flex;
  padding: 0 ${Spacing(4)};
  align-items: center;
  cursor: pointer;
  transition: opacity ${VALUE_TRANSITION_DATA[VALUE_TRANSITION_ENUM.HOVER]};

  &:hover {
    opacity: ${VALUE_OPACITY_DATA[VALUE_OPACITY_ENUM.HOVER]};
  }
`;
