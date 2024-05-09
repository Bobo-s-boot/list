import { i18n } from '../../lib/lang';

export const MODULE_NAME = 'OFFICE_FILTER_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export interface CALENDAR {
  startDate: any;
  endDate: any;
  key?: string;
}

export const CATEGORY_OPTION_LIST = [
  { value: 1, label: i18n.t('Project 1') },
  { value: 2, label: i18n.t('Project 2') },
];
