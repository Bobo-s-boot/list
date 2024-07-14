import { AUTH_TYPE } from '../../data/auth/constant';

export const MODULE_NAME = 'AUTH_VERIFICATION_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export enum CODE_VALUE_ENUM {
  CODE = 'code',
}

export type CODE_VALUE_TYPE = `${CODE_VALUE_ENUM}`;

export interface CODE_VALUE_INTER {
  [CODE_VALUE_ENUM.CODE]: string;
}

export const API = {
  GET_CODE: {
    TYPE: 'GET',
    URL: (type: AUTH_TYPE) => `/user-verification/${type}`,
  },
  CONFIRM: {
    TYPE: 'POST',
    URL: (type: AUTH_TYPE) => `/user-verification/${type}`,
  },
};

export interface ACTION_RESPONSE_INTER {
  accessToken: string;
}

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  statusCode: string;
}
export const TIMER_CONFIG = {
  minutes: 1,
  seconds: 0,
};
