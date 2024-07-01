import i18n from 'i18next';

export enum BAN_TYPE {
  NONE = 'NONE',
  PERMANENT = 'PERMANENT',
}
export enum CURRENCY_ENUM {
  USD = 'Доллар',
  UAH = 'Гривня',
  EUR = 'Євро',
}

export type CURRENCY_TYPE = {
  USD: 1;
  UAH: 2;
  EUR: 3;
};

export const currencyOptions = [
  { value: 1, label: i18n.t('TRANSACTIONS.LIST.CURRENCY_ENUM.1') },
  { value: 2, label: i18n.t('TRANSACTIONS.LIST.CURRENCY_ENUM.2') },
  { value: 3, label: i18n.t('TRANSACTIONS.LIST.CURRENCY_ENUM.3') },
];

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
  createDate: string;
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

export interface TRANSACTIONS_ITEM_DATA_INTER
  extends TRANSACTIONS_ITEM_DATA_RAW_INTER {
  status?: string;
}

export interface TRANSACTIONS_ITEM_LIST_DATA_INTER {
  list: TRANSACTIONS_ITEM_DATA_INTER[];
  isEmpty: boolean;
}
