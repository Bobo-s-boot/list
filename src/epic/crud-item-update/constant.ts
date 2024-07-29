export const API = {
  UPDATE: {
    TYPE: 'PATCH',
    URL: (id: string) => `http://localhost:3001/product-update/${id}`,
  },
  GET: {
    TYPE: 'GET',
    URL: (id: string) => `http://localhost:3001/products/${id}}`,
  },
};

export const MODULE_NAME = 'CRUD_ITEM_UPDATE_MODULE_NAME';

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
  [FORM_VALUE_ENUM.PRICE]: number;
  [FORM_VALUE_ENUM.DESCRIPTION]: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  statusCode: string;
}
