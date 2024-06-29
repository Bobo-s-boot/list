export const MODULE_NAME = 'OFFICE_ITEM_CREATE_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export enum FORM_VALUE_ENUM {
  NAME = 'name',
  PHONE = 'phone',
  ADDRESS = 'address',
  DAYS = 'days',
  TIME = 'time',
  DESIRED_CURRENCY = 'desiredCurrency',
  ORDER_CURRENCY = 'isOrderCurrency',
  TRADE_CRYPTO = 'isTradeCrypto',
  BREAK = 'break',
  IS_PAUSE = 'isPause',
  IS_BREAK = 'isBreak',
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

export enum DAYS_ENUM {
  MONDAY = 'Понеділок',
  TUESDAY = 'Вівторок',
  WEDNESDAY = 'Середа',
  THURSDAY = 'Четвер',
  FRIDAY = "П'ятниця",
  SATURDAY = 'Субота',
  SUNDAY = 'Неділя',
}

export type DAYS_TYPE = {
  MONDAY: 1;
  TUESDAY: 2;
  WEDNESDAY: 3;
  THURSDAY: 4;
  FRIDAY: 5;
  SATURDAY: 6;
  SUNDAY: 7;
};

export const daysOptions = [
  { value: 1, label: DAYS_ENUM.MONDAY },
  { value: 2, label: DAYS_ENUM.TUESDAY },
  { value: 3, label: DAYS_ENUM.WEDNESDAY },
  { value: 4, label: DAYS_ENUM.THURSDAY },
  { value: 5, label: DAYS_ENUM.FRIDAY },
  { value: 6, label: DAYS_ENUM.SATURDAY },
  { value: 7, label: DAYS_ENUM.SUNDAY },
];

export enum CURRENCY_ENUM {
  USD = 'Доллар',
  UAH = 'Гривня',
  EUR = 'Євро',
}

export const currencyOptions = [
  { value: 1, label: CURRENCY_ENUM.USD },
  { value: 2, label: CURRENCY_ENUM.UAH },
  { value: 3, label: CURRENCY_ENUM.EUR },
];

export type CURRENCY_TYPE = {
  USD: 1;
  UAH: 2;
  EUR: 3;
};
export enum TRANSACTIONS_ENUM {
  CASH = 'cash',
  CARD = 'card',
}

export const transactionsOptions = [
  { value: 1, label: TRANSACTIONS_ENUM.CASH },
  { value: 2, label: TRANSACTIONS_ENUM.CARD },
];

export type TRANSACTIONS_TYPE = {
  CASH: 1;
  CARD: 2;
};

export const API = {
  TYPE: 'POST',
  URL: `/transactions/`,
};

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  statusCode: string;
}
