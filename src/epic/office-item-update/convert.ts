import { currencyOptions } from "../office-item-create/constant";


export const convert = (data: any) => ({
  ...data,
  desiredCurrency: currencyOptions.filter((day: any) =>
    data?.desiredCurrency?.includes(String(day.value)),
  ),
});
