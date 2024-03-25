import React from 'react';

import styled, { css } from 'styled-components';
import { TextElem } from '../text';
import { COLOR_ENUM } from '../../theme/color';
import {
  VALUE_TRANSITION_DATA,
  VALUE_TRANSITION_ENUM,
} from '../../theme/value';

export const Elem: React.FC<{
  active?: boolean;
  titleTid?: string;
  gap?: number;
  onClick?: () => void;
}> = ({ active = false, titleTid, gap, onClick }) => {
  return (
    <Container onClick={onClick} gap={gap}>
      <RadioBorder active={active}>
        <RadioButton active={active} />
      </RadioBorder>
      {titleTid && (
        <Text
          size="label"
          color={active ? 'active' : 'default'}
          type="bold"
          tid={titleTid}
        />
      )}
    </Container>
  );
};

const RadioBorder = styled.div<{ active?: boolean }>`
  ${({ active }) =>
    active
      ? css`
          border: 1px solid ${({ theme }) => theme[COLOR_ENUM.ACTIVE]};
          border-radius: 50%;
        `
      : css`
          border: 1px solid
            ${({ theme }) => theme[COLOR_ENUM.CHECKBOX_INACTIVE]};
          border-radius: 50%;
        `};
`;

const Text = styled(TextElem)`
  transition: all 0.2s;
`;
const Container = styled.div<{ gap?: number }>`
  display: flex;
  gap: ${({ gap = 16 }) => gap && gap}px;
  align-items: center;
  transition: all 0.2s;

  :hover {
    cursor: pointer;
  }
`;

const RadioButton = styled.div<{ active?: boolean }>`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  ${({ active }) =>
    active
      ? css`
          background: ${({ theme }) => theme[COLOR_ENUM.ACTIVE]};
          border-radius: 50%;
          border: 2px solid ${({ theme }) => theme[COLOR_ENUM.WHITE]}};
        `
      : css``};
`;
