import { useState } from 'react';
import styled from 'styled-components';

import { Spacing } from '../../theme';
import { CardElem } from '../card';
import { GridElem } from '../grid';
import { TextElem } from '../text';
import { ToggleElem } from '../toggle';
import { i18n } from '../../lib/lang';
import { COLOR_ENUM } from '../../theme/color';
import {
  SIZE_FONT_ENUM,
  SIZE_FONT_WEIGHT_DATA,
  SIZE_FONT_WEIGHT_ENUM,
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';

export const Elem: React.FC<{
  handleClick?: any;
  checked?: boolean;
  tid: string;
  placeholder?: string;
  name?: string;
}> = ({ handleClick = () => { }, checked, placeholder, tid, name }) => {
  const handleChange = (e: any) => {
    if (handleClick) {
      handleClick({ target: { name: name, value: !checked } });
    }
  };

  return (
    <Container onClick={handleChange}>
      {tid && (
        <TextElem tid={tid} type="medium" color="textSecondary" size="input" />
      )}
      <FakeInput>
        <TextElem
          size="input"
          color="textSecondary"
          type="medium"
          tid={i18n.t(placeholder || '')}
        />
        <ToggleElem checked={checked} name={name} handleClick={handleClick} />
      </FakeInput>
    </Container>
  );
};

const FakeInput = styled.div`
  cursor: pointer;
  padding: 13px ${Spacing(5)};
  position: relative;
  min-height: 53px;
  font-size: ${({ theme }) => theme[SIZE_FONT_ENUM.INPUT]}px;
  font-weight: ${SIZE_FONT_WEIGHT_DATA[SIZE_FONT_WEIGHT_ENUM.MEDIUM]};
  color: ${({ theme }) => theme[COLOR_ENUM.TEXT_DISABLED]};
  background: ${({ theme }) => theme[COLOR_ENUM.INPUT]};
  line-height: 1em;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER_DEFAULT]};
  text-align: start;
  overflow: hidden;
  display: flex;
  align-items: center;

  && > span {
    width: calc(100% - 40px);
    display: block;
    overflow: hidden;
    white-space: nowrap !important;
    text-overflow: ellipsis !important;
  }
`;

const Container = styled.div`
  display: grid;
  grid-gap: ${Spacing(3)};
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme[COLOR_ENUM.TEXT_PRIMARY]};
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme[COLOR_ENUM.INPUT]}
      inset;
  }
`;
