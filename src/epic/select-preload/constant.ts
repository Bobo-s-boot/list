import { AxiosPromise } from 'axios';
import { SELECT_PROPS_TYPE } from '../../common/select';

export const MODULE_NAME = 'SELECT_PRELOAD_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  messages: string[];
  statusCode: string;
}

export interface PROPS_TYPE extends SELECT_PROPS_TYPE {
  action: (term: string, param?: string) => AxiosPromise<any>;
  convert: Function;
  initialOptions?: any;
  formik?: any;
  param?: any;
  name: string;
  convertParam?: string;
}
