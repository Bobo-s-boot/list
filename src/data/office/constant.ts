import {
  CURRENCY_TYPE,
  DAYS_TYPE,
} from '../../epic/office-item-create/constant';

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

export interface OFFICE_ITEM_DATA_RAW_INTER {
  id: string;
  createDate: string;
  name: string;
  phone: string;
  address: string;
  days: DAYS_TYPE[];
  workStartTime: string;
  workEndTime: string;
  pauseStartTime: string;
  pauseEndTime: string;
  isWork: boolean;
  isPause: boolean;
  desiredCurrency: CURRENCY_TYPE[];
  isOrderCurrency: boolean;
  isTradeCrypto: boolean;
}

export interface OFFICE_ITEM_LIST_DATA_RAW_INTER {
  list: OFFICE_ITEM_DATA_RAW_INTER[];
}

export interface OFFICE_ITEM_DATA_INTER extends OFFICE_ITEM_DATA_RAW_INTER {
  time: [string, string];
  break: [string, string];
}

export interface OFFICE_ITEM_LIST_DATA_INTER {
  list: OFFICE_ITEM_DATA_INTER[];
  isEmpty: boolean;
}

export const API = {
  LIST: {
    TYPE: 'GET',
    URL: '/office/list',
  },
};
