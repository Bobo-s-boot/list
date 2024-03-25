export const MODULE_NAME = 'AUTH_RECOVERY_RESEND_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export enum FORM_VALUE_ENUM {
  EMAIL = 'email',
}

export type FORM_VALUE_TYPE = `${FORM_VALUE_ENUM}`;

export interface FORM_VALUE_INTER {
  [FORM_VALUE_ENUM.EMAIL]: string;
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
