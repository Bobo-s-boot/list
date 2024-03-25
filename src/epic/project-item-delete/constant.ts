export const MODULE_NAME = 'FLAT_LIST_ITEM_DELETE_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export const API = {
  TYPE: 'DELETE',
  URL: (id: string) => `/project/${id}`,
};
