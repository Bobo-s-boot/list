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
import { INDEX_PAGE_PATH } from '../../page/index';

import { setAuthData } from '../../data/auth/action';
import { AUTH_MODULE_NAME } from '../../data/auth';
import { AUTH_TYPE } from '../../data/auth/constant';
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
    [FORM_VALUE_ENUM.TYPE]: AUTH_TYPE.EMAIL,
  };

  const validate = (values: FormikValues) =>
    validation(values, {
      [FORM_VALUE_ENUM.EMAIL]:
        formik.values[FORM_VALUE_ENUM.TYPE] === AUTH_TYPE.EMAIL
          ? [required, email]
          : [],
      [FORM_VALUE_ENUM.PHONE]:
        formik.values[FORM_VALUE_ENUM.TYPE] === AUTH_TYPE.PHONE
          ? [required, phoneUA, phoneOperator]
          : [],

      [FORM_VALUE_ENUM.PASSWORD]: [required],
    });

  const onSuccess = (d: any) => {
    const data: ACTION_RESPONSE_INTER = d as unknown as ACTION_RESPONSE_INTER;

    return dispatch(setAuthData(data.accessToken)).then(() =>
      history.push(INDEX_PAGE_PATH),
    );
  };

  const action = useMutation(fetch, {
    onSuccess,
  });

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
    if (!formik.isValid) {
      return true;
    }
    if (!formik.dirty) {
      return true;
    }

    if (action.isLoading) {
      return true;
    }

    if (action.isSuccess) {
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

  const handleChangeMethod = (e: any) => {
    formik.setFieldValue(FORM_VALUE_ENUM.TYPE, e.currentTarget.name);
  };

  useEffect(() => {
    formik.validateForm();
  }, [formik.values[FORM_VALUE_ENUM.TYPE]]);

  return (
    <Component
      isFieldError={isFieldError}
      getFieldError={getFieldError}
      isSubmitDisabled={isSubmitDisabled}
      getFieldValue={getFieldValue}
      formik={formik}
      isLoading={isLoading()}
      isError={isError()}
      errorMessage={getErrorMessage()}
      method={formik.values[FORM_VALUE_ENUM.TYPE]}
      setMethod={handleChangeMethod}
    />
  );
};
