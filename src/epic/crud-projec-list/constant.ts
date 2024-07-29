export const API = {
  TYPE: 'GET',
  URL: `http://localhost:3001/products`,
};

export const MODULE_NAME = 'products';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  description: string;
}

export interface ACTION_RESPONSE_INTER {
  data: Product[];
}

export interface DATA_INTER {
  id: number;
  name: string;
  price: number;
  description: string;
}
