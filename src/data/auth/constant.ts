export const MODULE_NAME = 'AUTH_MODULE_NAME';

export const ACTION_TYPE = {
  SET_DATA: `${MODULE_NAME}.SET_DATA`,
  SET_META_DATA: `${MODULE_NAME}.SET_META_DATA`,
  CLEAR_DATA: `${MODULE_NAME}.CLEAR_DATA`,
  SET_SAFETY_DATA: `${MODULE_NAME}.SET_SAFETY_DATA`,
};

export interface USER_DATA_INTER {
  id: number;
  email: string;
  phone: string;
  confirmEmail: boolean;
  confirmPhone: boolean;
  role: USER_ROLE;
  name: string;
}

export interface META_DATA_INTER {
  haveLogin?: boolean;
  haveWellcome?: boolean;
}

export interface ACTION_DATA_INTER {
  user: USER_DATA_INTER;
  meta: META_DATA_INTER;
}

export interface STORE_INTER {
  logged: boolean | null;
  isConfirmEmail: boolean | null;
  isConfirmPhone: boolean | null;
  meta: META_DATA_INTER | null;
  user: USER_DATA_INTER | null;
}

export interface LOCAL_STORE_INTER {
  token: string | null;
  user: USER_DATA_INTER | null;
  meta: META_DATA_INTER | null;
}

export const API = {
  GET_TOKEN: {
    TYPE: 'GET',
    URL: '/auth/token',
  },
};

export interface GET_TOKEN_ACTION_RESPONSE_INTER {
  accessToken: string;
}

export enum USER_ROLE {
  BLOCKED = 'BLOCKED',
  USER = 'USER',
  MODER = 'MODER',
  ADMIN = 'ADMIN',
}

export enum AUTH_TYPE {
  PHONE = 'phone',
  EMAIL = 'email',
}
