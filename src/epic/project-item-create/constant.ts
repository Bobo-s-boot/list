export const MODULE_NAME = 'PROJECT_ITEM_CREATE_MODULE_NAME';

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
  TYPE: 'POST',
  URL: `/project/`,
};

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  statusCode: string;
}
