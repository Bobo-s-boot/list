import { i18n } from '../../lib/lang';
import {
  CURRENCY_ENUM,
  CURRENCY_TYPE,
  TRANSACTIONS_ITEM_DATA_INTER,
  TRANSACTIONS_ITEM_DATA_RAW_INTER,
  TRANSACTIONS_ITEM_LIST_DATA_INTER,
  TRANSACTIONS_TYPE,
  currencyOptions,
} from './constant';

const formatCreateDate = (rawDate: string): string => {
  const createDate = new Date(rawDate);
  // Отримуємо години і хвилини
  const hours = createDate.getHours();
  const minutes = createDate.getMinutes();
  // Форматуємо дату з включенням годин і хвилин
  const formattedCreateDate = `${createDate.getDate()}-${createDate.getMonth() + 1
    }-${createDate.getFullYear()} ${hours}:${minutes}`;
  return formattedCreateDate;
};

const formatValuteCurrency = (carrency: CURRENCY_TYPE[]): string => {
  const formatedValute = `${i18n.t(
    `TRANSACTIONS.LIST.CURRENCY_TYPE.${carrency}`,
  )}`;

  return formatedValute;
};

const formatPaymentTypeSrc = (type: TRANSACTIONS_TYPE[]): string => {
  const paymentType = `../assets/svg/payment-type-icons/type-${type}.svg`;

  return paymentType;
};

export const convertTransactions = (
  transactions: TRANSACTIONS_ITEM_DATA_RAW_INTER,
): TRANSACTIONS_ITEM_DATA_INTER => {
  return {
    ...transactions,
    createDate: formatCreateDate(transactions.createDate),
    valuteBuyFormated: formatValuteCurrency(transactions.valuteBuy),
    valuteSellFormated: formatValuteCurrency(transactions.valuteSell),
    paymentType: formatPaymentTypeSrc(transactions.type),
  };
};

export const convertTransactionsList = (
  transactionsList: TRANSACTIONS_ITEM_DATA_RAW_INTER[],
): TRANSACTIONS_ITEM_LIST_DATA_INTER => {
  return {
    list: transactionsList?.map(
      (transactions: TRANSACTIONS_ITEM_DATA_RAW_INTER) => {
        return convertTransactions(transactions);
      },
    ),
    isEmpty: !transactionsList?.length,
  };
};

export const convertTransactionsToExcel = (
  transactions: TRANSACTIONS_ITEM_DATA_INTER,
): any => {
  return {
    id: transactions.id,
    phone: transactions.phone,
  };
};

export const convertTransactionsToExcelList = (
  transactionsList?: TRANSACTIONS_ITEM_DATA_INTER[],
): any => {
  return transactionsList?.map(
    (transactions: TRANSACTIONS_ITEM_DATA_RAW_INTER) => {
      return convertTransactionsToExcel(transactions);
    },
  );
};
