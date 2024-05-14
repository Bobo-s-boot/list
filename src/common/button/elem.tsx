import React from 'react';

import styled, { css } from 'styled-components';
import { COLOR_ENUM, COLOR_TYPE } from '../../theme/color';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
  SIZE_ICON_DATA,
  SIZE_ICON_TYPE,
} from '../../theme/size';
import { TextElem } from '../text';
import { PROPS_TYPE, ROLE_ENUM, ROLE_TYPE } from './constant';
import {
  VALUE_TRANSITION_DATA,
  VALUE_TRANSITION_ENUM,
} from '../../theme/value';
import { Spacing } from '../../theme';

export const Elem: React.FC<PROPS_TYPE> = ({
  children,
  tid,
  tvalue,
  color = 'textSecondary',
  disabled = false,
  onClick,
  iconSize = 'small',
  iconLeft,
  textType = 'semi-bold',
  ref,
  className,
  sizeText = 'default',
  iconRight,
  type = 'button',
}) => {
  const isIcon = iconLeft || iconRight;

  const handleClick = (e: any) => {
    if (onClick) onClick(e);
  };
  return (
    <ButtonStyled
      onClick={handleClick}
      disabled={disabled}
      className={className}
      ref={ref}
      type={type}
    >
      <Content isIcon={isIcon}>
        {iconLeft && <Icon src={iconLeft} iconSize={iconSize} color={color} />}
        {tid ? (
          <TextElem
            tid={tid}
            tvalue={tvalue}
            size={sizeText}
            type={textType}
            color={color}
          />
        ) : (
          children
        )}
        {iconRight && (
          <Icon
            disabled={disabled}
            src={iconRight}
            iconSize={iconSize}
            color={color}
          />
        )}
      </Content>
    </ButtonStyled>
  );
};
const ButtonStyled = styled.button<{ type: ROLE_TYPE | any }>`
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  transition: background-color
    ${VALUE_TRANSITION_DATA[VALUE_TRANSITION_ENUM.HOVER]};
  width: 100%;

  ${({ theme, disabled, type }) =>
    (type === ROLE_ENUM.BUTTON || type === ROLE_ENUM.SUBMIT) &&
    css`
      padding: 17px 20px;

      ${disabled &&
      css`
        background-color: ${theme[COLOR_ENUM.BUTTON_DISABLED]};

        & > * > * {
          color: ${theme[COLOR_ENUM.TEXT_BUTTON_DISABLED]};
        }
      `}

      &:not(:disabled) {
        background-color: ${theme[COLOR_ENUM.BUTTON_PRIMARY]};
        & > * > * {
          color: ${theme[COLOR_ENUM.BUTTON_TEXT]};
        }

        &:hover {
          background-color: ${theme[COLOR_ENUM.BUTTON_HOVER]};
          cursor: pointer;
          opacity: 0.8;
        }
      }
    `}

  ${({ theme, disabled, type }) =>
    type === ROLE_ENUM.ADD &&
    css`
      background-color: ${theme[COLOR_ENUM.WHITE]};

      padding: ${Spacing(4)};
      cursor: pointer;
      border: 2px solid ${({ theme }) => theme[COLOR_ENUM.BORDER]};
      border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.CARD]}px;

      :hover {
        opacity: 0.8;
      }

      ${disabled &&
      css`
        opacity: 0.5;

        :hover {
          opacity: 0.5;
        }
      `}
    `}
`;

const Content = styled.div<{ isIcon: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ isIcon }) => (isIcon ? 'space-between' : 'center')};
  text-align: center;
  width: 100%;
  gap: ${Spacing(1.5)};
`;

const Icon = styled.img<{
  color?: COLOR_TYPE;
  iconSize: SIZE_ICON_TYPE;
  disabled?: boolean;
}>`
  ${({ color = COLOR_ENUM.DEFAULT, iconSize, disabled }) => css`
    fill: ${({ theme }) => theme[color]};
    opacity: ${disabled && '0.5'};

    height: ${SIZE_ICON_DATA[iconSize]}px;
    width: ${SIZE_ICON_DATA[iconSize]}px;
  `}
`;
