import { ReactNode } from 'react';

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
  open: boolean;
  minHeight?: number;
  closeAction?: any;
  calendar?: boolean;
  ref?: any;
  className?: string;
}
