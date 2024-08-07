import {
  PROJECT_ITEM_LIST_DATA_INTER,
  PROJECT_ITEM_LIST_DATA_RAW_INTER,
} from '../../data/project/constant';

export const MODULE_NAME = 'CRUD_PRODUCT_LIST';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export const API = {
  TYPE: 'GET',
  URL: `http://localhost:3001/products`,
};

export interface ACTION_RESPONSE_INTER
  extends PROJECT_ITEM_LIST_DATA_RAW_INTER {}

export interface DATA_INTER extends PROJECT_ITEM_LIST_DATA_INTER {}

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  messages: string[];
  description: string;
}
