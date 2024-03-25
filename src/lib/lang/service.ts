import moment from 'moment';
import i18n from 'i18next';
import { addMinutes, format } from 'date-fns';

export const convertDateToList = (date: string): string => {
  return moment(date, 'YYYYMMDD').fromNow();

  // .calendar({
  //   lastDay: '[Yesterday]',
  //   sameDay: '[Today]',
  //   nextDay: '[Tomorrow]',
  //   lastWeek: 'dddd [days ago]',
  //   nextWeek: '[Next] dddd',
  //   sameElse: 'MMMM D',
  // });
};

export const convertDateTime = (date: string) => {
  return moment(date).format(i18n.t('LANG.DATA.DATE_TIME'));
};

export const convertDateTimeWithoutZone = (date: string) => {
  return moment(date).utcOffset(0, false).format(i18n.t('LANG.DATA.DATE_TIME'));
};

export const convertDayAndTimeWithoutZone = (date: string) => {
  return moment(date)
    .utcOffset(0, false)
    .format(i18n.t('LANG.DATA.DAY_AND_TIME'));
};

export const convertDayWithoutZone = (date: string) => {
  return moment(date).utcOffset(0, false).format(i18n.t('LANG.DATA.DAY'));
};

export const convertTimeWithoutZone = (date: string) => {
  return moment(date).utcOffset(0, false).format(i18n.t('LANG.DATA.TIME'));
};

export const convertDate = (date: string) => {
  return moment(date).format(i18n.t('LANG.DATA.DATE'));
};

export const convertTime = (date: string) => {
  return moment(date).format(i18n.t('LANG.DATA.ONLY_TIME'));
};

export const formatDateToUtc = (date: Date) => {
  try {
    const newDate = format(
      addMinutes(date, date.getTimezoneOffset()),
      "yyyy-MM-dd'T'HH:mm:ss",
    );
    return newDate;
  } catch (error) {
    console.log(error);
  }
};

export const convertDateToCalendarTime = (date: string) => {
  return moment(date)
    .locale('en-gb')
    .calendar({
      sameDay: i18n.t('CONVERT.DATE.CALENDAR_SAME_DAY'),
      lastDay: i18n.t('CONVERT.DATE.CALENDAR_LAST_DAY'),
      lastWeek: i18n.t('CONVERT.DATE.CALENDAR_LAST_WEEK'),
      sameElse: i18n.t('CONVERT.DATE.CALENDAR_SAME_ELSE'),
    });
};

export const convertPaymentItemOrderPeriod = (date: string) => {
  return moment(date).format(i18n.t('CONVERT.PAYMENT_ORDER_PERIOD'));
};
