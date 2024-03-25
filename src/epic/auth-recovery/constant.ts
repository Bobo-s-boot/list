import { AUTH_TYPE } from '../../data/auth/constant';

export const MODULE_NAME = 'AUTH_RECOVERY_MODULE_NAME';

export enum FORM_VALUE_ENUM {
  EMAIL = 'email',
  PHONE = 'phone',
  TYPE = 'type',
}

export type FORM_VALUE_TYPE = `${FORM_VALUE_ENUM}`;

export interface FORM_VALUE_INTER {
  [FORM_VALUE_ENUM.EMAIL]: string;
  [FORM_VALUE_ENUM.PHONE]: string;
  [FORM_VALUE_ENUM.TYPE]: AUTH_TYPE;
}

export const API = {
  MAIN: {
    TYPE: 'POST',
    URL: '/user-recovery/email',
  },
};

export interface ACTION_RESPONSE_INTER {}

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  statusCode: string;
}
