export const MODULE_NAME = 'ACCOUNT_SETTINGS_CHANGE_PASSWORD_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export enum FORM_VALUE_ENUM {
  NEW_PASSWORD = 'newPassword',
  PASSWORD = 'password',
  REPEAT_PASSWORD = 'repeatPassword',
}

export type FORM_VALUE_TYPE = `${FORM_VALUE_ENUM}`;

export interface FORM_VALUE_INTER {
  [FORM_VALUE_ENUM.NEW_PASSWORD]: string;
  [FORM_VALUE_ENUM.PASSWORD]: string;
  [FORM_VALUE_ENUM.PASSWORD]: string;
}

export const API = {
  MAIN: {
    TYPE: 'PATCH',
    URL: '/user-settings/password',
  },
  GET_TOKEN: {
    TYPE: 'GET',
    URL: '/auth/token',
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
