import {
  TRANSACTIONS_ITEM_DATA_INTER,
  TRANSACTIONS_ITEM_DATA_RAW_INTER,
  TRANSACTIONS_ITEM_LIST_DATA_INTER
} from './constant';

export const convertTransactions = (
  transactions: TRANSACTIONS_ITEM_DATA_RAW_INTER,
): TRANSACTIONS_ITEM_DATA_INTER => {
  return {
    ...transactions,
  };
};

export const convertTransactionsList = (
  transactionsList: TRANSACTIONS_ITEM_DATA_RAW_INTER[],
): TRANSACTIONS_ITEM_LIST_DATA_INTER => {
  return {
    list: transactionsList?.map((transactions: TRANSACTIONS_ITEM_DATA_RAW_INTER) => {
      return convertTransactions(transactions);
    }),
    isEmpty: !transactionsList?.length,
  };
};

export const convertTransactionsToExcel = (transactions: TRANSACTIONS_ITEM_DATA_INTER): any => {
  return {
    id: transactions.id,
    // name: transactions.name,
    phone: transactions.phone,
    // ip: transactions.ip[0],
    // location: transactions.location[0],
    // needRecord: transactions.needRecord,
    // reservation: transactions.reservation ? '+' : '-',
    // payeed: transactions.reservation?.payment?.confirm ? '+' : '-',
  };
};

export const convertTransactionsToExcelList = (
  transactionsList?: TRANSACTIONS_ITEM_DATA_INTER[],
): any => {
  return transactionsList?.map((transactions: TRANSACTIONS_ITEM_DATA_RAW_INTER) => {
    return convertTransactionsToExcel(transactions);
  });
};
