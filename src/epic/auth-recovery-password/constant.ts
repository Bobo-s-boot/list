export const MODULE_NAME = 'AUTH_RECOVERY_CONFIRM_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export enum FORM_VALUE_ENUM {
  CODE = 'code',
  PASSWORD = 'password',
  NOTIFICATION_TOKEN = 'notificationToken',
}

export type FORM_VALUE_TYPE = `${FORM_VALUE_ENUM}`;

export interface FORM_VALUE_INTER {
  [FORM_VALUE_ENUM.CODE]: string;
  [FORM_VALUE_ENUM.PASSWORD]: string;
  [FORM_VALUE_ENUM.NOTIFICATION_TOKEN]: string;
}

export const API = {
  MAIN: {
    TYPE: 'POST',
    URL: '/user-recovery/change-password',
  },
};

export interface ACTION_RESPONSE_INTER {
  accessToken: string;
}

export interface ACTION_RESPONSE_INTER {}

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  messages: string[];
  statusCode: string;
}
