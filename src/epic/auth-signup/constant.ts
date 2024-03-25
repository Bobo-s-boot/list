import { AUTH_TYPE } from '../../data/auth/constant';

export const MODULE_NAME = 'AUTH_SIGNUP_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export enum FORM_VALUE_ENUM {
  EMAIL = 'email',
  PHONE = 'phone',
  PASSWORD = 'password',
  NAME = 'name',
}

export type FORM_VALUE_TYPE = `${FORM_VALUE_ENUM}`;

export interface FORM_VALUE_INTER {
  [FORM_VALUE_ENUM.EMAIL]: string;
  [FORM_VALUE_ENUM.PHONE]: string;
  [FORM_VALUE_ENUM.PASSWORD]: string;
  [FORM_VALUE_ENUM.NAME]: string;
}

export const API = {
  MAIN: {
    TYPE: 'POST',
    URL: '/auth/signup',
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
