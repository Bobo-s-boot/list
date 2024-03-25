export const MODULE_NAME = 'AUTH_RECOVERY_CONFIRM_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export enum FORM_VALUE_ENUM {
  CODE = 'code',
}

export type FORM_VALUE_TYPE = `${FORM_VALUE_ENUM}`;

export interface FORM_VALUE_INTER {
  [FORM_VALUE_ENUM.CODE]: string;
}

export const TIMER_CONFIG = {
  minutes: 0,
  seconds: 59,
};
