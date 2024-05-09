import React, { useEffect, useState } from 'react';

import {
  ACTION_ERROR_INTER,
  FORM_VALUE_ENUM,
  FORM_VALUE_INTER,
  FORM_VALUE_TYPE,
} from './constant';

import { Component } from './component';
import {
  arrayLengthMax,
  phoneOperator,
  phoneUA,
  required,
} from '../../lib/validation/service';
import { FormikValues, useFormik } from 'formik';
import { validation } from '../../lib/validation';
import { useMutation, useQueryClient } from 'react-query';
import { action as fetch } from './action';
import { convert } from './convert';
import { OFFICE_LIST_MODULE_NAME } from '../office-list';

export const Container: React.FC<{}> = ({}) => {
  const [stateSelect, setStateSelect] = useState({
    [FORM_VALUE_ENUM.DAYS]: '',
    [FORM_VALUE_ENUM.DESIRED_CURRENCY]: '',
  });

  const query = useQueryClient();
  const onSuccess = () => {
    query.invalidateQueries(OFFICE_LIST_MODULE_NAME);
    formik.resetForm();
  };

  const action = useMutation((values: FORM_VALUE_INTER) => fetch(values), {
    onSuccess,
  });

  const config = {
    [FORM_VALUE_ENUM.NAME]: [required],
    [FORM_VALUE_ENUM.PHONE]: [required, phoneUA, phoneOperator],
    [FORM_VALUE_ENUM.ADDRESS]: [required],
    [FORM_VALUE_ENUM.TIME]: [required, arrayLengthMax(2)],
    [FORM_VALUE_ENUM.DAYS]: [required],
    [FORM_VALUE_ENUM.DESIRED_CURRENCY]: [required],
    [FORM_VALUE_ENUM.ORDER_CURRENCY]: [],
    [FORM_VALUE_ENUM.TRADE_CRYPTO]: [],
  };

  const validate = (values: FormikValues) => validation(values, config);

  const initialValues = {
    [FORM_VALUE_ENUM.NAME]: '',
    [FORM_VALUE_ENUM.PHONE]: '',
    [FORM_VALUE_ENUM.ADDRESS]: '',
    [FORM_VALUE_ENUM.TIME]: ['', ''] as [string, string],
    [FORM_VALUE_ENUM.TRADE_CRYPTO]: false,
    [FORM_VALUE_ENUM.ORDER_CURRENCY]: false,
    [FORM_VALUE_ENUM.DAYS]: [],
    [FORM_VALUE_ENUM.DESIRED_CURRENCY]: [],
  };

  const formik: FormikValues = useFormik({
    initialValues,
    validate,
    onSubmit: (values: FORM_VALUE_INTER) => {
      return action.mutate(convert(values));
    },
  });

  const onChangeSelect = (name: string, values: any) => {
    setStateSelect({ ...values, name: values[name] });

    formik.setFieldValue(name, [...values.map((e: any) => e.value)]);
  };

  const isFieldError = (name: FORM_VALUE_TYPE): boolean => {
    return formik.errors[name] && formik.touched[name] ? true : false;
  };

  const getFieldError = (name: FORM_VALUE_TYPE): string | undefined =>
    isFieldError(name) ? formik.errors[name] : undefined;

  const isSubmitDisabled = () => {
    if (!formik.isValid) {
      return true;
    }
    if (!formik.dirty) {
      return true;
    }

    if (action.isLoading) {
      return true;
    }
  };

  const isLoading = () => {
    if (action.isLoading) {
      return true;
    }
  };

  const isSuccess = () => {
    if (action.isSuccess) {
      return true;
    }
  };

  const isError = () => {
    if (action.isError && !action.isLoading && getErrorMessage()) {
      return true;
    }
  };

  const getErrorMessage = () => {
    const error: ACTION_ERROR_INTER = action.error as ACTION_ERROR_INTER;
    if (error) {
      return error.message;
    }
  };

  const getFieldValue = (name: FORM_VALUE_TYPE) => formik.values[name];

  useEffect(() => {
    console.log('VALUES', formik.values);
  }, [formik.values]);

  return (
    <Component
      isFieldError={isFieldError}
      getFieldError={getFieldError}
      isSubmitDisabled={isSubmitDisabled}
      getFieldValue={getFieldValue}
      formik={formik}
      isError={isError()}
      isLoading={isLoading()}
      isSuccess={isSuccess()}
      errorMessage={getErrorMessage()}
      onChangeSelect={onChangeSelect}
      stateSelect={stateSelect}
    />
  );
};
