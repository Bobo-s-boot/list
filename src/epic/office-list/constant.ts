import {
  OFFICE_ITEM_LIST_DATA_RAW_INTER,
  OFFICE_ITEM_LIST_DATA_INTER,
} from '../../data/office/constant';

export const MODULE_NAME = 'OFFICE_LIST_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export const API = {
  TYPE: 'GET',
  URL: (params: string) => `/office/list/${params}`,
};

export interface ACTION_RESPONSE_INTER
  extends OFFICE_ITEM_LIST_DATA_RAW_INTER {}

export interface DATA_INTER extends OFFICE_ITEM_LIST_DATA_INTER {}

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  messages: string[];
  statusCode: string;
}

export interface PROPS_TYPE {
  data?: DATA_INTER;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
  project: string;
  setProject: Function;
  setType: Function;
  search: string;
  setSearch: Function;
  type: any;
  isFetching?: boolean;
  fetchNextPage: Function;
  isIdle?: boolean;
}
