import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from '../../lib/store';
import {
  ACTION_ERROR_INTER,
  ACTION_RESPONSE_INTER,
  FORM_VALUE_ENUM,
  FORM_VALUE_INTER,
  FORM_VALUE_TYPE,
} from './constant';

import { useMutation } from 'react-query';

import { Component } from './component';
import {
  email,
  phoneOperator,
  phoneUA,
  required,
} from '../../lib/validation/service';
import { FormikValues, useFormik } from 'formik';
import { validation } from '../../lib/validation';
import { action as fetch } from './action';
import { useHistory } from 'react-router';
import { setAuthData } from '../../data/auth/action';
import { AUTH_MODULE_NAME } from '../../data/auth';
import { convertAuthDataToType } from '../../data/auth/convert';

export const Container: React.FC = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const { state } = useSelector((s: any) => ({
    state: s[AUTH_MODULE_NAME],
  }));

  const initialValues = {
    [FORM_VALUE_ENUM.EMAIL]: '',
    [FORM_VALUE_ENUM.PHONE]: '',
    [FORM_VALUE_ENUM.PASSWORD]: '',
    [FORM_VALUE_ENUM.NAME]: '',
  };

  const validate = (values: FormikValues) =>
    validation(values, {
      [FORM_VALUE_ENUM.EMAIL]: [required, email],

      [FORM_VALUE_ENUM.PHONE]: [required, phoneUA, phoneOperator],
      [FORM_VALUE_ENUM.PASSWORD]: [required],
      [FORM_VALUE_ENUM.NAME]: [required],
    });

  const onSuccess = (d: any, values: FORM_VALUE_INTER) => {
    const data: ACTION_RESPONSE_INTER = d as unknown as ACTION_RESPONSE_INTER;

    dispatch(setAuthData(data.accessToken)).then(() => {
      history.push('');
    });
  };

  const action = useMutation(fetch, { onSuccess });

  const formik: FormikValues = useFormik({
    initialValues,
    validate,
    onSubmit: (values: FORM_VALUE_INTER) => {
      return action.mutate(convertAuthDataToType(values));
    },
  });

  const isFieldError = (name: FORM_VALUE_TYPE): boolean => {
    return formik.errors[name] && formik.touched[name] ? true : false;
  };

  const getFieldError = (name: FORM_VALUE_TYPE): string | undefined =>
    isFieldError(name) ? formik.errors[name] : undefined;

  const isSubmitDisabled = () => {
    if (!formik.dirty) {
      return true;
    }

    if (action.isLoading) {
      return true;
    }

    if (action.isSuccess) {
      return true;
    }
    if (!formik.isValid) {
      return true;
    }
  };

  const isLoading = () => {
    if (action.isLoading) {
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

  return (
    <Component
      isFieldError={isFieldError}
      getFieldError={getFieldError}
      isSubmitDisabled={isSubmitDisabled()}
      getFieldValue={getFieldValue}
      formik={formik}
      isLoading={isLoading()}
      isError={isError()}
      errorMessage={getErrorMessage()}
    />
  );
};
