import {
  CURRENCY_TYPE,
  DAYS_TYPE,
  TRANSACTIONS_TYPE,
} from '../../epic/transactions-list-item-create/constant';

// export type DAYS_PROP_TYPES = {
//   id: string;
//   createDate: string;
//   name: string;
//   phone: string;
//   address: string;
//   days: string;
//   time: string;
//   desiredCurrency: string;
//   isOrderCurrency: boolean;
//   isTradeCrypto: boolean;
// };

export interface TRANSACTIONS_ITEM_DATA_RAW_INTER {
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
  time: [string, string];
  break: [string, string];
}

export interface TRANSACTIONS_ITEM_LIST_DATA_INTER {
  list: TRANSACTIONS_ITEM_DATA_INTER[];
  isEmpty: boolean;
}

export const API = {
  LIST: {
    TYPE: 'GET',
    URL: 'transactions/office/list',
  },
};
