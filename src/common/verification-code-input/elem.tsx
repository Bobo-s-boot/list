import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Spacing } from '../../theme';
import { i18n } from '../../lib/lang';
import {
  SIZE_FONT_ENUM,
  SIZE_FONT_WEIGHT_ENUM,
  SIZE_BORDER_RADIUS_ENUM,
  SIZE_FONT_DATA,
  SIZE_FONT_WEIGHT_DATA,
  SIZE_BORDER_RADIUS_DATA,
} from '../../theme/size';
import { COLOR_DATA, COLOR_ENUM } from '../../theme/color';
import { PROPS_TYPE } from './constant';

export const Elem: React.FC<PROPS_TYPE> = ({
  length = 6,
  loading,
  onComplete,
}) => {
  const [inputValues, setInputValues] = useState(Array(length).fill(''));
  const [alert, setAlert] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    position: number,
  ) => {
    const character = e.target.value;

    if (!/^[0-9]$/.test(character)) {
      return;
    } else {
      setAlert('');
    }

    const updatedValues = [...inputValues];
    updatedValues[position] = character;
    setInputValues(updatedValues);

    if (position < length - 1) {
      inputRefs.current[position + 1]?.focus();
    }

    if (updatedValues.every((value) => value !== '')) {
      onComplete(updatedValues.join(''));
    }
  };

  const handleKeyUp = (
    e: React.KeyboardEvent<HTMLInputElement>,
    position: number,
  ) => {
    if (e.key === 'Backspace') {
      if (inputValues[position]) {
        const updatedValues = [...inputValues];
        updatedValues[position] = '';
        setInputValues(updatedValues);
      } else if (position > 0) {
        const updatedValues = [...inputValues];
        updatedValues[position - 1] = '';
        setInputValues(updatedValues);
        inputRefs.current[position - 1]?.focus();
      }
    }
  };

  return (
    <Wrapper>
      <InputWrapper>
        {inputValues.map((value, index) => (
          <StyledInput
            key={index}
            type="text"
            inputMode="text"
            maxLength={1}
            value={value}
            autoFocus={!inputValues[0] && index === 0}
            readOnly={loading}
            onChange={(e) => handleInputChange(e, index)}
            onKeyUp={(e) => handleKeyUp(e, index)}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </InputWrapper>
      {alert && <AlertMessage>{alert}</AlertMessage>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: 'Helvetica', sans-serif;
  display: flex;
  flex-direction: column;
  gap: ${Spacing(2)};
`;

const InputWrapper = styled.div`
  display: flex;
  gap: ${Spacing(1)};
  justify-content: space-between;
`;

const StyledInput = styled.input`
  background-color: ${COLOR_DATA[COLOR_ENUM.WHITE]};
  width: 70px;
  height: 50px;
  font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.INPUT]}px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER_DEFAULT]};
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  transition: all 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme[COLOR_ENUM.BORDER_ACTIVE_SELECT]};
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme[COLOR_ENUM.INPUT_DISABLED]};
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_DISABLED]};
  }
`;

const AlertMessage = styled.div`
  color: red;
  font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.SMALL]}px;
  margin-top: ${Spacing(1)};
`;
