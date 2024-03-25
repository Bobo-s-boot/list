import React, { ReactNode } from 'react';
import { IonButton, IonIcon } from '@ionic/react';

import styled, { css } from 'styled-components';
import { COLOR_ENUM, COLOR_TYPE } from '../../theme/color';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
  SIZE_FONT_DATA,
  SIZE_FONT_ENUM,
  SIZE_FONT_WEIGHT_DATA,
  SIZE_FONT_WEIGHT_ENUM,
  SIZE_ICON_DATA,
  SIZE_ICON_TYPE,
} from '../../theme/size';
import { TextElem } from '../text';
import { PROPS_TYPE } from './constant';
import {
  VALUE_TRANSITION_DATA,
  VALUE_TRANSITION_ENUM,
} from '../../theme/value';
import { Spacing } from '../../theme';

export const Elem: React.FC<PROPS_TYPE> = ({
  children,
  tid,
  tvalue,
  color = 'buttonPrimary',
  size,
  type,
  disabled = false,
  onClick,
  fill = 'solid',
  iconSize = 'small',
  iconLeft,
  textType = 'semi-bold',
  slot = '',
  ref,
  className,
  sizeText = 'default',
  iconRight,
}) => {
  const handleClick = (e: any) => {
    if (onClick) onClick(e);
  };
  return (
    <Button
      onClick={handleClick}
      disabled={disabled}
      customColor={color}
      type={type}
      fill={fill}
      slot={slot}
      className={className}
      ref={ref}
    >
      <Content>
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
          <Icon src={iconRight} iconSize={iconSize} color={color} />
        )}
      </Content>
    </Button>
  );
};

const Content = styled.div`
  display: flex;
  align-items: end;
  margin: 0 auto;
  gap: ${Spacing(1.5)};
  width: fit-content;
`;

const Button = styled.button<{
  fill: any;
  customColor?: COLOR_TYPE;
  disabled: boolean;
}>`
  box-shadow: none;
  transition: all ${VALUE_TRANSITION_DATA[VALUE_TRANSITION_ENUM.HOVER]};
  & > * > * {
    transition: all ${VALUE_TRANSITION_DATA[VALUE_TRANSITION_ENUM.HOVER]};
    /* height: 15px; */
  }

  height: 46px;
  text-transform: none;
  letter-spacing: 0;

  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  background: transparent;
  text-align: center;

  ${({ fill }) => {
    switch (fill) {
      case 'solid':
        return css`
          position: relative;
          & > * > * {
            font-weight: ${SIZE_FONT_WEIGHT_DATA[
              SIZE_FONT_WEIGHT_ENUM.SEMI_BOLD
            ]};
            line-height: 1em;
            /* color: ${({ theme }) => theme[COLOR_ENUM.BUTTON_TEXT]}; */
          }
          width: 100%;

          opacity: 1;

          :focus-visible {
            outline: none;
          }

          ::after {
            content: '';
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: ${SIZE_BORDER_RADIUS_DATA[
              SIZE_BORDER_RADIUS_ENUM.DEFAULT
            ]}px;
          }

          border-width: 1px;
          ${({ customColor }) => {
            switch (customColor) {
              case 'border':
                return css`
                  & > * > * {
                    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_FOURTH]};
                  }
                  transition: all 0.2s;
                  :hover {
                    ::after {
                      background: #ffffff10;
                    }
                  }
                  :disabled {
                    ::after {
                      background: #ffffff15;
                    }
                  }
                  :active {
                    background: ${({ theme }) => theme[COLOR_ENUM.BORDER]};
                  }

                  background: ${({ theme }) => theme[COLOR_ENUM.BORDER]};
                `;
              case 'success':
                return css`
                  & > * > * {
                    color: ${({ theme }) => theme[COLOR_ENUM.WHITE]};
                  }
                  transition: all 0.2s;

                  :hover {
                    ::after {
                      background: #ffffff15;
                    }
                  }
                  :disabled {
                    ::after {
                      background: #ffffff20;
                    }
                  }
                  :active {
                    background: ${({ theme }) => theme[COLOR_ENUM.SUCCESS]};
                  }

                  background: ${({ theme }) => theme[COLOR_ENUM.SUCCESS]};
                `;
              case 'error':
                return css`
                  & > * > * {
                    color: ${({ theme }) => theme[COLOR_ENUM.ERROR]};
                  }
                  transition: all 0.2s;

                  :hover {
                    ::after {
                      background: #ffffff05;
                    }
                  }
                  :disabled {
                    ::after {
                      background: #ffffff20;
                    }
                  }
                  :active {
                    background: ${({ theme }) =>
                      theme[COLOR_ENUM.ERROR_BACKGROUND]};
                  }

                  background: ${({ theme }) =>
                    theme[COLOR_ENUM.ERROR_BACKGROUND]};
                `;
              default:
                return css`
                  & > * > * {
                    color: ${({ theme }) => theme[COLOR_ENUM.BUTTON_TEXT]};
                  }
                  transition: all 0.2s;

                  :hover {
                    ::after {
                      background: #ffffff20;
                    }
                  }
                  :disabled {
                    ::after {
                      background: #ffffff30;
                    }
                  }

                  :active {
                    background: ${({ theme }) =>
                      theme[COLOR_ENUM.BUTTON_PRIMARY]};
                  }

                  background: ${({ theme }) =>
                    theme[COLOR_ENUM.BUTTON_PRIMARY]};
                `;
            }
          }}
        `;
      case 'outline':
        return css`
          & > * > * {
            font-weight: ${SIZE_FONT_WEIGHT_DATA[SIZE_FONT_WEIGHT_ENUM.MEDIUM]};
            line-height: 1em;
            color: ${({ theme }) => theme[COLOR_ENUM.TEXT_SECONDARY]};
          }
          width: 100%;

          opacity: 1;

          :focus-visible {
            outline: none;
          }
          transition: all 0.2s;

          /* :hover {
            --background: ${({ theme }) => theme[COLOR_ENUM.BUTTON_PRIMARY]};
          }
          :active {
            --background: ${({ theme }) => theme[COLOR_ENUM.BUTTON_ACTIVE]};
          }

          --background: ${({ theme }) => theme[COLOR_ENUM.BUTTON_PRIMARY]};
 */
          border-width: 1px;

          border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER]};
          background: transparent;
        `;
      case 'clear':
        return css`
          height: auto;
          width: auto;
          border-radius: 0;
          --background-activated: transparent;
          --background-hover: transparent;
          & > * > * {
            font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.MAIN]}px;
            color: ${({ theme }) => theme[COLOR_ENUM.BUTTON_TEXT]};
          }
          --padding-end: 0 !important;
          --padding-start: 0 !important;
        `;
    }
  }}
`;

const Icon = styled.img<{
  color?: COLOR_TYPE;
  iconSize: SIZE_ICON_TYPE;
}>`
  margin: auto;
  ${({ color = COLOR_ENUM.DEFAULT, iconSize }) => css`
    fill: ${({ theme }) => theme[color]};

    height: ${SIZE_ICON_DATA[iconSize]}px;
    width: ${SIZE_ICON_DATA[iconSize]}px;
  `}
`;
