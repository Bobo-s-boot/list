import moment from 'moment';
import 'moment/locale/uk';

const lastMonthDay = (date: string) => {
  const ifLeapYear = Number(date.slice(0, 4)) % 4 == 0;
  const month: any = {
    '01': 31,
    '02': ifLeapYear ? 29 : 28,
    '03': 31,
    '04': 30,
    '05': 31,
    '06': 30,
    '07': 31,
    '08': 31,
    '09': 30,
    '10': 31,
    '11': 30,
    '12': 31,
  };
  return month[date.slice(4, 7)];
};

export const dateConvert = (date: string) => {
  const dateISO = new Date(`${date}`).toISOString();
  const localedDate = moment(`${dateISO}`).locale('en').format('D MMMM YYYY ');
  return localedDate[0].toUpperCase() + localedDate.slice(1);
};

export const monthConvert = (date: string) => {
  return `${date.slice(0, 4)}-${date.slice(4, 7)}-01T00:00:00`;
};
export const monthEndConvert = (date: string) => {
  return `${date.slice(0, 4)}-${date.slice(4, 7)}-${lastMonthDay(
    date,
  )}T00:00:00`;
};

export const convertShortDate = (date: string): any => {
  return moment(date).format('DD/MM/YY');
};
