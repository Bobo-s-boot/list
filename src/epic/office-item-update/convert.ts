import { FORM_VALUE_INTER } from './constant';

export const convert = (data: FORM_VALUE_INTER) => ({
  ...data,
  days: data.days.map((e) => e),
  time: [],
  desiredCurrency: [],
});
