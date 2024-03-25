import { ReactNode } from 'react';
import { COLOR_DATA, COLOR_ENUM } from '../../theme/color';

export interface PROPS_TYPE {
  titleTid?: string;
  titleValue?: object;
  infoTid?: any;
  infoValue?: object;
  cancelTid?: any;
  cancelTvalue?: object;
  children?: ReactNode;
  divider?: boolean;
  onClose?: any;
  open?: boolean;
  action?: any;
  closeAction?: any;
  buttonColor?: COLOR_ENUM;
  type?: MODAL_TYPE;
  onClick?: any;
  ref?: any;
}

export enum MODAL_TYPE_ENUM {
  DELETE = 'delete',
  CONFIRM = 'confirm',
}

export type MODAL_TYPE = `${MODAL_TYPE_ENUM}`;

export const MODAL_TYPE_DATA = {
  [MODAL_TYPE_ENUM.DELETE]: 'COMMON.MODAL.BUTTON.DELETE',
  [MODAL_TYPE_ENUM.CONFIRM]: 'COMMON.MODAL.BUTTON.CONFIRM',
};

export const BUTTON_COLOR_TYPE_DATA = {
  [MODAL_TYPE_ENUM.DELETE]: COLOR_ENUM.ERROR,
  [MODAL_TYPE_ENUM.CONFIRM]: COLOR_ENUM.ACTION,
};
