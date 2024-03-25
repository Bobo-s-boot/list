import { USER_ITEM_DATA_RAW_INTER } from '../user/constant';

export interface PROJECT_ITEM_DATA_RAW_INTER {
  id: string;
  createDate: string;
  name: string;
  owner: USER_ITEM_DATA_RAW_INTER;
}

export interface PROJECT_ITEM_LIST_DATA_RAW_INTER {
  list: PROJECT_ITEM_DATA_RAW_INTER[];
}

export interface PROJECT_ITEM_DATA_INTER extends PROJECT_ITEM_DATA_RAW_INTER {}

export interface PROJECT_ITEM_LIST_DATA_INTER {
  list: PROJECT_ITEM_DATA_INTER[];
  isEmpty: boolean;
}

export const API = {
  LIST: {
    TYPE: 'GET',
    URL: '/project/list',
  },
};
