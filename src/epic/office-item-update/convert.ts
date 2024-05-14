import { currencyOptions, daysOptions } from './../office-item-create/constant';

export const convert = (data: any) => ({
  ...data,
  days: daysOptions.filter((day: any) =>
    data?.days?.includes(String(day.value)),
  ),
  time: [data?.workStartTime, data?.workEndTime],
  break: [data?.pauseStartTime, data?.pauseEndTime],
  desiredCurrency: currencyOptions.filter((day: any) =>
    data?.desiredCurrency?.includes(String(day.value)),
  ),
});
