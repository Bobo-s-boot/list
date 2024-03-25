import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import { COLOR_ENUM } from '../../theme/color';
import { IonCheckbox } from '@ionic/react';
import { TextElem } from '../text';
import { SIZE_FONT_TYPE } from '../../theme/size';
import {
  VALUE_TRANSITION_DATA,
  VALUE_TRANSITION_ENUM,
} from '../../theme/value';
import { Spacing } from '../../theme';

export const Elem: React.FC<{
  name?: string;
  tid?: string;
  tvalue?: object;
  text?: string;
  textSize?: SIZE_FONT_TYPE;
  checked?: boolean;
  onClick?: any;
  isLoading?: boolean;
  onChange?: any;
}> = ({
  checked = false,
  onClick,
  tid,
  tvalue,
  text = null,
  textSize = 'main',
  isLoading,
  onChange,
  name,
}) => {
  const [status, setStatus] = useState<boolean>(checked);
  useEffect(() => {
    setStatus(checked);
  }, [checked]);

  const handleClick = (e: any) => {
    if (!isLoading) {
      setStatus(!status);
      if (onClick) {
        onClick();
      }
    }

    e.target.name = name;
    e.target.value = !status;

    if (onChange) {
      onChange(e);
    }
  };
  return (
    <Container onClick={handleClick}>
      <Checkbox
        checked={status}
        disabled={isLoading}
        name={name}
        slot="center"
      />
      <TextElem color="textFourth" tid={tid} tvalue={tvalue}>
        {text && text}
      </TextElem>
    </Container>
  );
};

const Checkbox = styled(IonCheckbox)`
  --size: 16px;
  --checkmark-width: 4px;
  --background-checked: ${({ theme }) => theme[COLOR_ENUM.BUTTON_PRIMARY]};
  --border-color-checked: none !important;
  --border-width: 0px;
  --border-radius: 4px;
  --border-style: solid;
  --border-color: ${({ theme }) => theme[COLOR_ENUM.BORDER]};
  background: transparent;
  transition: color ${VALUE_TRANSITION_DATA[VALUE_TRANSITION_ENUM.HOVER]};

  ::part(container) {
    padding: 4px;
    padding-right: 2px;
    padding-top: 2px;
  }

  ::part(mark) {
    stroke: #312f3b;
    stroke-width: 4.25;
    stroke-linecap: round;
    stroke-dashoffset: 7;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${Spacing(2)};
  span {
    height: 17px;
  }
`;
