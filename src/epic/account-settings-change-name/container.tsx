import React from 'react';

import { useDispatch, useSelector } from '../../lib/store';
import {
  ACTION_ERROR_INTER,
  FORM_VALUE_ENUM,
  FORM_VALUE_INTER,
  FORM_VALUE_TYPE,
} from './constant';

import { useHistory } from 'react-router';
import { useMutation } from 'react-query';

import { Component } from './component';
import { required } from '../../lib/validation/service';
import { FormikValues, useFormik } from 'formik';
import { validation } from '../../lib/validation';
import { action as fetch } from './action';
import { AUTH_MODULE_NAME } from '../../data/auth';

const config = {
  [FORM_VALUE_ENUM.NAME]: [required],
};

const validate = (values: FormikValues) => validation(values, config);

export const Container: React.FC<{ redirect?: boolean }> = ({
  redirect = false,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { auth } = useSelector((s: any) => ({
    auth: s[AUTH_MODULE_NAME],
  }));

  const phone = auth.user ? auth.user.phone : null;

  const action = useMutation((d: FORM_VALUE_INTER) => dispatch(fetch(d)), {});

  const initialValues = {
    [FORM_VALUE_ENUM.NAME]: auth?.user?.name || '',
  };

  const formik: FormikValues = useFormik({
    initialValues,
    validate,
    onSubmit: (values: FORM_VALUE_INTER) => {
      return action.mutate(values);
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

  return (
    <Component
      isFieldError={isFieldError}
      getFieldError={getFieldError}
      isSubmitDisabled={isSubmitDisabled}
      getFieldValue={getFieldValue}
      formik={formik}
      isLoading={isLoading()}
      isSuccess={isSuccess()}
      isError={isError()}
      errorMessage={getErrorMessage()}
    />
  );
};
