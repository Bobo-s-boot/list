export enum BAN_TYPE {
  NONE = 'NONE',
  PERMANENT = 'PERMANENT',

}
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

export interface TRANSACTIONS_ITEM_DATA_RAW_INTER {
  id: string;
  value: string;
  type: TRANSACTIONS_TYPE[];
  valuteBuy: CURRENCY_TYPE[];
  valuteSell: CURRENCY_TYPE[];
  sum: number;
  currency: number;
  commission: number;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  passport: string;
  userId: string;
  officeId: string;
}

export interface TRANSACTIONS_ITEM_LIST_DATA_RAW_INTER {
  list: TRANSACTIONS_ITEM_DATA_RAW_INTER[];
}

export interface TRANSACTIONS_ITEM_DATA_INTER extends TRANSACTIONS_ITEM_DATA_RAW_INTER {
  status?: string;
}

export interface TRANSACTIONS_ITEM_LIST_DATA_INTER {
  list: TRANSACTIONS_ITEM_DATA_INTER[];
  isEmpty: boolean;
}
