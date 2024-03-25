import { MODAL_PROPS_TYPE } from '../modal';

export interface PROPS_TYPE extends MODAL_PROPS_TYPE {
  action?: Function;
  buttonTid?: string;
  options?: any;
  alertText?: any;
  buttons?: any;
  onOpen: any;
}
