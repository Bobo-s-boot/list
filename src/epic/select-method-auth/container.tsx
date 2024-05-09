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
import { Spacing } from '../../theme';

export const Container: React.FC<{
  method: AUTH_TYPE;
  setMethod: any;
}> = ({ method, setMethod }) => {
  const isEmail = method == AUTH_TYPE.EMAIL;
  const isPhone = method == AUTH_TYPE.PHONE;

  return (
    <TabBar>
      <TabButton
        name={`${AUTH_TYPE.EMAIL}`}
        selected={isEmail}
        onClick={setMethod}
        type="button"
      >
        <TextElem
          tid="AUTH.RECOVERY.EMAIL"
          color={isEmail ? 'textSecondary' : 'textPrimary'}
          type={isEmail ? 'bold' : 'medium'}
        />
      </TabButton>
      <TabButton
        name={`${AUTH_TYPE.PHONE}`}
        selected={isPhone}
        onClick={setMethod}
        type="button"
      >
        <TextElem
          tid="AUTH.RECOVERY.PHONE"
          color={isPhone ? 'textSecondary' : 'textPrimary'}
          type={isPhone ? 'bold' : 'medium'}
        />
      </TabButton>
    </TabBar>
  );
};

const TabBar = styled.div`
  width: 100%;
  height: 38px;
  padding: 4px;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.CIRCLE]}px;
  display: flex;
  gap: ${Spacing(2)};
`;

const TabButton = styled.button<{ selected: boolean }>`
  width: 100%;
  padding: ${Spacing(5)} ${Spacing(4)};
  transition: background ${VALUE_TRANSITION_DATA[VALUE_TRANSITION_ENUM.DEFAULT]};
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;

  :focus-visible {
    outline: none;
  }

  & > * {
    transition: background 0.2s ease-in-out;
  }

  background: transparent;

  border: 1px solid ${({ theme }) => theme[COLOR_ENUM.WHITE]};

  ${({ selected }) =>
    selected
      ? css`
          border: unset !important;
          background: ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_THIRD]};
        `
      : css`
          :hover {
            border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER_DEFAULT]};

            & > span {
              color: ${({ theme }) => theme[COLOR_ENUM.TEXT_ACTIVE]};
            }
          }
        `};
`;
