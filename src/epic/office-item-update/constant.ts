import { CURRENCY_TYPE, DAYS_TYPE } from '../office-item-create/constant';

export const MODULE_NAME = 'OFFICE_ITEM_UPDATE_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export enum FORM_VALUE_ENUM {
  NAME = 'name',
  PHONE = 'phone',
  ADDRESS = 'address',
  DAYS = 'days',
  TIME = 'time',
  BREAK = 'break',
  DESIRED_CURRENCY = 'desiredCurrency',
  ORDER_CURRENCY = 'isOrderCurrency',
  TRADE_CRYPTO = 'isTradeCrypto',
}

export type FORM_VALUE_TYPE = `${FORM_VALUE_ENUM}`;

export interface FORM_VALUE_INTER {
  [FORM_VALUE_ENUM.NAME]: string;
  [FORM_VALUE_ENUM.PHONE]: string;
  [FORM_VALUE_ENUM.ADDRESS]: string;
  [FORM_VALUE_ENUM.DAYS]: DAYS_TYPE[];
  [FORM_VALUE_ENUM.DESIRED_CURRENCY]: CURRENCY_TYPE[];
  [FORM_VALUE_ENUM.TIME]: [string, string];
  [FORM_VALUE_ENUM.BREAK]: [string, string];
  [FORM_VALUE_ENUM.ORDER_CURRENCY]: boolean;
  [FORM_VALUE_ENUM.TRADE_CRYPTO]: boolean;
}

export const API = {
  UPDATE: {
    TYPE: 'PATCH',
    URL: (id: string) => `/office/${id}`,
  },
  GET: {
    TYPE: 'GET',
    URL: (id: string) => `/office/${id}`,
  },
};

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  statusCode: string;
}
