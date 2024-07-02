import {
  TRANSACTIONS_ITEM_LIST_DATA_INTER,
  TRANSACTIONS_ITEM_LIST_DATA_RAW_INTER,
} from '../../data/transactions/constant';

export const MODULE_NAME = 'TRANSACTIONS_ITEM_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export const API = {
  TYPE: 'GET',
  URL: (transactionsId: string) => `/39fa17f4-ee46-43d9-8c66-5dfb548206be/5`,
};

export interface ACTION_RESPONSE_INTER
  extends TRANSACTIONS_ITEM_LIST_DATA_RAW_INTER { }

export interface DATA_INTER extends TRANSACTIONS_ITEM_LIST_DATA_INTER { }

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  messages: string[];
  statusCode: string;
}

