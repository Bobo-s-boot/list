import { FORM_VALUE_INTER } from './constant';

export const convert = (data: FORM_VALUE_INTER) => ({
  ...data,
  workStartTime: data.time[0],
  workEndTime: data.time[1],
  pauseStartTime: data.break[0],
  pauseEndTime: data.break[1],
  isPause: false,
  isWork: false,
  days: data?.days?.map((e: any) => e.value),
  desiredCurrency: data?.desiredCurrency?.map((e: any) => e.value),
});
