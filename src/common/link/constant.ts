import { ReactNode } from 'react';
import { TEXT_PROPS_TYPE } from '../text';
import { SIZE_FONT_WEIGHT_TYPE } from '../../theme/size';

export interface PROPS_TYPE extends TEXT_PROPS_TYPE {
  link: string;
  prefix?: ReactNode;
  prefixTid?: string;
  prefixTvalue?: object;
  sufix?: ReactNode;
  sufixTid?: string;
  sufixTvalue?: object;
  justifySelf?: 'center' | 'end' | 'start';
  type?: SIZE_FONT_WEIGHT_TYPE;
}
