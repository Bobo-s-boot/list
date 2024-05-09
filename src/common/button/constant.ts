import { ReactNode } from 'react';
import { COLOR_TYPE } from '../../theme/color';
import {
  SIZE_FONT_TYPE,
  SIZE_FONT_WEIGHT_TYPE,
  SIZE_ICON_TYPE,
} from '../../theme/size';

export interface PROPS_TYPE {
  tid?: string;
  tvalue?: object;
  color?: COLOR_TYPE;
  type?: ROLE_TYPE;
  size?: SIZE_TYPE;
  disabled?: boolean;
  children?: ReactNode;
  onClick?: Function;
  fill?: FILL_TYPE;
  iconSize?: SIZE_ICON_TYPE;
  iconLeft?: any;
  textType?: SIZE_FONT_WEIGHT_TYPE;
  slot?: string;
  className?: string;
  ref?: any;
  alert?: boolean;
  sizeText?: SIZE_FONT_TYPE;
  iconRight?: string;
  textColor?: COLOR_TYPE;
}

export enum SIZE_ENUM {
  DEFAULT = 'default',
  SMALL = 'small',
  LARGE = 'large',
}

export type SIZE_TYPE = `${SIZE_ENUM}`;

export const SIZE_DATA = {
  [SIZE_ENUM.DEFAULT]: 'default',
  [SIZE_ENUM.SMALL]: 'small',
  [SIZE_ENUM.LARGE]: 'large',
};

export enum ROLE_ENUM {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
  ADD = 'add',
}

export type ROLE_TYPE = `${ROLE_ENUM}`;

export const ROLE_DATA = {
  [ROLE_ENUM.BUTTON]: 'button',
  [ROLE_ENUM.SUBMIT]: 'submit',
  [ROLE_ENUM.RESET]: 'reset',
  [ROLE_ENUM.ADD]: 'add',
};

export enum FILL_ENUM {
  SOLID = 'solid',
  CLEAR = 'clear',
  ICON = 'icon',
  OUTLINE = 'outline',
  BACK = 'back',
  DASHED = 'dashed',
  TRANSPARENT = 'transparent',
}

export type FILL_TYPE = `${FILL_ENUM}`;

export const FILL_DATA = {
  [FILL_ENUM.SOLID]: 'solid',
  [FILL_ENUM.CLEAR]: 'clear',
  [FILL_ENUM.ICON]: 'icon',
  [FILL_ENUM.OUTLINE]: 'outline',
  [FILL_ENUM.BACK]: 'back',
  [FILL_ENUM.DASHED]: 'dashed',
  [FILL_ENUM.TRANSPARENT]: 'transparent',
};
