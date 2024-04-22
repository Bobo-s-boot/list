import React from 'react';
import styled, { css } from 'styled-components';
import { TextElem } from '../../common/text';
import { COLOR_ENUM } from '../../theme/color';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';
import {
  VALUE_TRANSITION_DATA,
  VALUE_TRANSITION_ENUM,
} from '../../theme/value';
import { AUTH_TYPE } from '../../data/auth/constant';

export const Container: React.FC<{
  method: AUTH_TYPE;
  setMethod: any;
}> = ({ method, setMethod }) => {
  return (
    <TabBar>
      <TabButton
        name={`${AUTH_TYPE.EMAIL}`}
        selected={method == AUTH_TYPE.EMAIL}
        onClick={setMethod}
        type="button"
      >
        <TextElem tid="AUTH.RECOVERY.EMAIL" type="medium" />
      </TabButton>
      <TabButton
        name={`${AUTH_TYPE.PHONE}`}
        selected={method == AUTH_TYPE.PHONE}
        onClick={setMethod}
        type="button"
      >
        <TextElem tid="AUTH.RECOVERY.PHONE" type="medium" />
      </TabButton>
    </TabBar>
  );
};

const TabBar = styled.div`
  width: 100%;
  height: 38px;
  padding: 4px;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.CIRCLE]}px;
  background: ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_SECONDARY]};
  display: flex;
`;

const TabButton = styled.button<{ selected: boolean }>`
  width: 100%;
  padding: 8px 12px 8px 12px;
  transition: ${VALUE_TRANSITION_DATA[VALUE_TRANSITION_ENUM.DEFAULT]};

  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.CIRCLE]}px;
  & > * {
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_SECONDARY]};
  }
  :focus-visible {
    outline: none;
  }

  :hover {
    & > * {
      color: ${({ theme }) => theme[COLOR_ENUM.DEFAULT]};
    }
  }

  & > * {
    transition: all 0.2s ease-in-out;
  }

  background: transparent;
  ${({ selected }) =>
    selected
      ? css`
          background: ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_THIRD]};
          & > * {
            color: ${({ theme }) => theme[COLOR_ENUM.DEFAULT]};
          }
        `
      : ''};
`;
