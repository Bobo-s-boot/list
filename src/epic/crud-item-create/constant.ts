export const API = {
  TYPE: 'POST',
  URL: `http://localhost:3001/product-create`,
};

export const MODULE_NAME = 'CRUD_ITEM_CREATE_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export enum FORM_VALUE_ENUM {
  NAME = 'name',
  PRICE = 'price',
  DESCRIPTION = 'description',
}

export type FORM_VALUE_TYPE = `${FORM_VALUE_ENUM}`;

export interface FORM_VALUE_INTER {
  [FORM_VALUE_ENUM.NAME]: string;
  [FORM_VALUE_ENUM.DESCRIPTION]: string;
  [FORM_VALUE_ENUM.PRICE]: number;
}

export interface ProductFormValues {
  name: string;
  price: number;
  description: string;
}

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  statusCode: string;
}
