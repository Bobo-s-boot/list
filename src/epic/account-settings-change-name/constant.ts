export const MODULE_NAME = 'ACCOUNT_SETTINGS_CHANGE_PHONE_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export enum FORM_VALUE_ENUM {
  NAME = 'name',
}

export type FORM_VALUE_TYPE = `${FORM_VALUE_ENUM}`;

export interface FORM_VALUE_INTER {
  [FORM_VALUE_ENUM.NAME]: string;
}

export const API = {
  MAIN: {
    TYPE: 'PATCH',
    URL: '/user-settings/name',
  },
  GET_TOKEN: {
    TYPE: 'GET',
    URL: '/auth/token',
  },
};

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  statusCode: string;
}
