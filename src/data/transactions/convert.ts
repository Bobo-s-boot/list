import { SELECT_OPTION_ITEM_DATA } from '../../common/select';
import {
  TRANSACTIONS_ITEM_DATA_RAW_INTER,
  TRANSACTIONS_ITEM_DATA_INTER,
  TRANSACTIONS_ITEM_LIST_DATA_RAW_INTER,
  TRANSACTIONS_ITEM_LIST_DATA_INTER,
} from './constant';

export const convertTransactions = (
  transactions: TRANSACTIONS_ITEM_DATA_RAW_INTER,
): TRANSACTIONS_ITEM_DATA_INTER => {
  return {
    ...transactions,
  };
};

export const converTransactionsList = (
  list: TRANSACTIONS_ITEM_DATA_RAW_INTER[],
): TRANSACTIONS_ITEM_LIST_DATA_INTER => {
  console.log(list);
  return {
    list: list?.map((transactions: TRANSACTIONS_ITEM_DATA_RAW_INTER) => {
      return convertTransactions(transactions);
    }),
    isEmpty: !list?.length,
  };
};

export const convertTransactionsListToSelect = (
  data: TRANSACTIONS_ITEM_DATA_RAW_INTER[],
) => {
  const newList: SELECT_OPTION_ITEM_DATA[] = [];
  data.map((item: TRANSACTIONS_ITEM_DATA_RAW_INTER) => {
    newList.push({
      value: item.id,
      label: item.email,
    });
  });

  return newList;
};
