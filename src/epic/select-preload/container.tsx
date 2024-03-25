import React, { useEffect } from 'react';

import { PROPS_TYPE } from './constant';

import { useMutation } from 'react-query';

import { SelectElem, SELECT_OPTION_ITEM_DATA } from '../../common/select';

export const Container: React.FC<PROPS_TYPE> = ({
  action,
  convert,
  initialOptions,
  formik,
  param,
  convertParam,
  ...props
}) => {
  const setValue = (options: SELECT_OPTION_ITEM_DATA[], value: any) => {
    const optionList = options?.filter(
      (item: SELECT_OPTION_ITEM_DATA) => item.value === formik.values[value],
    )[0];

    return optionList ? optionList : null;
  };

  const actioN = useMutation((e: any) => action(param), {});

  if (actioN.isLoading) {
    props.noOptionsMessage = 'Завантаження...';
  }
  if (actioN.isSuccess) {
    props.noOptionsMessage = undefined;
  }

  if (formik) {
    props.value = setValue(
      actioN.data ? convert(actioN.data, convertParam) : initialOptions,
      props.name,
    );
  }

  useEffect(() => {
    actioN.mutate('', param);
    if (formik) {
      formik.values[props.name] = formik.initialValues[props.name];
    }
  }, [param]);

  return (
    <SelectElem
      {...props}
      options={
        actioN.data ? convert(actioN.data, convertParam) : initialOptions
      }
    />
  );
};
