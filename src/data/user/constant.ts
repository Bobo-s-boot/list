import { i18n } from '../../lib/lang';

export interface USER_ITEM_DATA_RAW_INTER {
  id: string;
  createDate: string;
  email: string;
  phone: string;
  role: USER_ROLE;
  password: string;
}

export interface USER_ITEM_LIST_DATA_RAW_INTER {
  list: USER_ITEM_DATA_RAW_INTER[];
}

export interface USER_ITEM_DATA_INTER extends USER_ITEM_DATA_RAW_INTER {}

export interface USER_ITEM_LIST_DATA_INTER {
  list: USER_ITEM_DATA_INTER[];
  isEmpty: boolean;
}

export const API = {
  LIST: {
    TYPE: 'GET',
    URL: '/user/admin/user',
  },
};

export enum USER_ROLE {
  BLOCKED = 'BLOCKED',
  USER = 'USER',
  MODER = 'MODER',
  ADMIN = 'ADMIN',
}

export const USER_ROLE_OPTION_LIST = [
  {
    value: USER_ROLE.ADMIN,
    label: `${i18n.t('USER.ROLE.ADMIN')}`,
  },

  {
    value: USER_ROLE.USER,
    label: `${i18n.t('USER.ROLE.USER')}`,
  },
  {
    value: USER_ROLE.MODER,
    label: `${i18n.t('USER.ROLE.MODER')}`,
  },
  {
    value: USER_ROLE.BLOCKED,
    label: `${i18n.t('USER.ROLE.BLOCKED')}`,
  },
];
