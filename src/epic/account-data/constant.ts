import { USER_DATA_INTER } from '../../data/auth/constant';

export const MODULE_NAME = 'ACCOUNT_DATA_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export interface DATA_INTER {
  data: { user: USER_DATA_INTER };
  mesagges: string;
  status: boolean;
}

export const API = {
  TYPE: 'GET',
  URL: '/v1/user',
};

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  messages: string[];
  statusCode: string;
}
