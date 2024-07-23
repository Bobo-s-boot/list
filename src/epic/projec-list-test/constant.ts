import {
  PROJECT_ITEM_LIST_DATA_RAW_INTER,
  PROJECT_ITEM_LIST_DATA_INTER,
} from '../../data/project/constant';

export const MODULE_NAME = 'PROJECT_LIST_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export const API = {
  TYPE: 'GET',
  URL: `/project/list`,
};

export interface ACTION_RESPONSE_INTER
  extends PROJECT_ITEM_LIST_DATA_RAW_INTER {}

export interface DATA_INTER extends PROJECT_ITEM_LIST_DATA_INTER {}

export interface Product {
  list: any;
  isEmpty: any;
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  messages: string[];
  statusCode: string;
}
