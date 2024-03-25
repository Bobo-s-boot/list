import { ReactNode } from 'react';
import { COLOR_TYPE } from '../../theme/color';
import { SIZE_FONT_TYPE, SIZE_FONT_WEIGHT_TYPE } from '../../theme/size';

export interface PROPS_TYPE {
  tid?: string;
  tvalue?: object;
  color?: COLOR_TYPE;
  type?: SIZE_FONT_WEIGHT_TYPE;
  size?: SIZE_FONT_TYPE;
  children?: ReactNode;
  lineHeight?: boolean;
}
