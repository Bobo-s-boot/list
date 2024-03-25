import React from 'react';
import styled, { css } from 'styled-components';
import { Spacing } from '../../theme';
import { COLOR_ENUM } from '../../theme/color';
import {
  SIZE_FONT_DATA,
  SIZE_FONT_ENUM,
  SIZE_FONT_WEIGHT_DATA,
  SIZE_FONT_WEIGHT_ENUM,
} from '../../theme/size';
import {
  VALUE_TRANSITION_DATA,
  VALUE_TRANSITION_ENUM,
} from '../../theme/value';
import { TextElem } from '../text';

export const Elem: React.FC<{
  value?: any;
  onChange?: Function;
  onBlur?: Function;
  name?: string;
  counterType?: any;
  setValue?: Function;
  counterTid?: string;
  symbol: string;
  icon?: any;
}> = ({
  name,
  counterType,
  value,
  onBlur,
  onChange,
  setValue,
  counterTid = 'FLAT.ITEM.COUNTER.NEW_INDICATOR',
  symbol,
  icon,
}) => {
  const handleBlur = (e: any) => {
    if (!e.target) e.target = {};
    if (onBlur) {
      onBlur(e);
    }
  };

  const handleChange = (e: any) => {
    if (!e.target) e.target = {};
    e.target.name = name;
    e.target.value = e.target.value;

    if (setValue) {
      setValue(e.target.value);
    }
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <div>
      <Title>
        <TextElem type="bold" size="main" tid={counterTid} />

        {icon && <Icon src={icon} size={18} />}
      </Title>

      <Content>
        <Input
          name={name}
          spellCheck="false"
          onBlur={handleBlur}
          value={value}
          onChange={handleChange}
        />
        <Info>{counterType && symbol}</Info>
      </Content>
    </div>
  );
};

const Icon = styled.img<{ size?: any }>`
  ${({ size }) => css`
    height: ${size}px;
    width: auto;
  `};
  margin: 0;
`;
const Title = styled.div`
  display: flex;
  gap: ${Spacing(2)};
  align-items: center;
`;

const Content = styled.div`
  position: relative;

  :focus-within,
  :hover {
    & > div {
      transition: all 0.2s;
      color: ${({ theme }) => theme[COLOR_ENUM.BORDER_THIRD]};
    }
  }
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${({ theme }) => theme[COLOR_ENUM.TEXT_FOURTH]};
`;

const Input = styled.input`
  padding: ${Spacing(1)};
  color: ${({ theme }) => theme[COLOR_ENUM.TEXT_PRIMARY]};
  font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.MEDIUM]}px;
  font-weight: ${SIZE_FONT_WEIGHT_DATA[SIZE_FONT_WEIGHT_ENUM.REGULAR]};
  line-height: 30px;
  text-align: start;
  background: ${({ theme }) => theme[COLOR_ENUM.INPUT]};
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER_SECONDARY]};
  transition: color ${VALUE_TRANSITION_DATA[VALUE_TRANSITION_ENUM.DEFAULT]},
    border-color ${VALUE_TRANSITION_DATA[VALUE_TRANSITION_ENUM.DEFAULT]};

  &:hover {
    border-color: ${({ theme }) => theme[COLOR_ENUM.BORDER_THIRD]};
  }

  &:focus-within {
    background: ${({ theme }) => theme[COLOR_ENUM.INPUT_ACTIVE]};
    color: ${({ theme }) => theme[COLOR_ENUM.BORDER_THIRD]};
    border-color: ${({ theme }) => theme[COLOR_ENUM.BORDER_THIRD]};
  }
  ::placeholder {
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_SECONDARY]};
  }
`;
