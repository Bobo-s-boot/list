import {
  CURRENCY_TYPE,
  TRANSACTIONS_TYPE,
} from '../../epic/transactions-list-item-create/constant';


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
}

export interface TRANSACTIONS_ITEM_LIST_DATA_INTER {
  list: TRANSACTIONS_ITEM_DATA_INTER[];
  isEmpty: boolean;
}

export const API = {
  LIST: {
    TYPE: 'GET',
    // потрібно буде забрати щоб працювало нормально
    URL: 'office/39fa17f4-ee46-43d9-8c66-5dfb548206be/transactions',
  },
};
