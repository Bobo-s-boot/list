import { SELECT_PROPS_TYPE } from '../select';

export interface PROPS_TYPE extends SELECT_PROPS_TYPE {
  moduleName: string[];
  payload?: any;
}
