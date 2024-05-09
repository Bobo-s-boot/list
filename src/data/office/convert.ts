import { SELECT_OPTION_ITEM_DATA } from '../../common/select';
import {
  OFFICE_ITEM_DATA_RAW_INTER,
  OFFICE_ITEM_DATA_INTER,
  OFFICE_ITEM_LIST_DATA_RAW_INTER,
  OFFICE_ITEM_LIST_DATA_INTER,
} from './constant';

export const convertOffice = (
  office: OFFICE_ITEM_DATA_RAW_INTER,
): OFFICE_ITEM_DATA_INTER => {
  return {
    ...office,
  };
};

export const convertOfficeList = (
  list: OFFICE_ITEM_DATA_RAW_INTER[],
): OFFICE_ITEM_LIST_DATA_INTER => {
  return {
    list: list?.map((office: OFFICE_ITEM_DATA_RAW_INTER) => {
      return convertOffice(office);
    }),
    isEmpty: !list?.length,
  };
};

export const convertOfficeListToSelect = (
  data: OFFICE_ITEM_DATA_RAW_INTER[],
) => {
  const newList: SELECT_OPTION_ITEM_DATA[] = [];
  data.map((item: OFFICE_ITEM_DATA_RAW_INTER) => {
    newList.push({
      value: item.id,

      label: item.name,
    });
  });

  return newList;
};
