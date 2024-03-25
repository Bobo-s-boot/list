import React from 'react';

import { useDispatch, useSelector } from '../../lib/store';
import {
  ACTION_ERROR_INTER,
  CODE_VALUE_ENUM,
  CODE_VALUE_INTER,
  CODE_VALUE_TYPE,
  MODULE_NAME,
} from './constant';

import { useMutation, useQuery } from 'react-query';

import { Component } from './component';
import { required } from '../../lib/validation/service';
import { FormikValues, useFormik } from 'formik';
import { validation } from '../../lib/validation';

import { confirmAccount, action as fetch } from './action';
import { useHistory } from 'react-router';
import { INDEX_PAGE_PATH } from '../../page/index';
import { AUTH_MODULE_NAME } from '../../data/auth';
import { AUTH_TYPE } from '../../data/auth/constant';

const config = {
  [CODE_VALUE_ENUM.CODE]: [required],
};

const initialValues = {
  [CODE_VALUE_ENUM.CODE]: '',
};

const validate = (values: FormikValues) => validation(values, config);

export const Container: React.FC<{ type: AUTH_TYPE }> = ({ type }) => {
  const { auth } = useSelector((s: any) => ({
    auth: s[AUTH_MODULE_NAME],
  }));

  const dispatch = useDispatch();
  const history = useHistory();

  const preFetch = useQuery(MODULE_NAME, () => fetch(type), {
    retry: 0,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const onSuccess = () => {
    history.push(INDEX_PAGE_PATH);
  };

  const action = useMutation(
    (d: CODE_VALUE_INTER) => dispatch(confirmAccount(d, type)),
    { onSuccess },
  );

  const formik: FormikValues = useFormik({
    initialValues,
    validate,
    onSubmit: (values: CODE_VALUE_INTER) => {
      return action.mutate(values);
    },
  });

  const isFieldError = (name: CODE_VALUE_TYPE): boolean => {
    return formik.errors[name] && formik.touched[name] ? true : false;
  };

  const getFieldError = (name: CODE_VALUE_TYPE): string | undefined =>
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
    if (action.isLoading || preFetch.isLoading) {
      return true;
    }
  };

  const isError = () => {
    if (action.isError && !action.isLoading && getErrorMessage()) {
      return true;
    }
    if (preFetch.isError && !preFetch.isLoading && getErrorMessage()) {
      return true;
    }
  };

  const getErrorMessage = () => {
    const error: ACTION_ERROR_INTER = action.error as ACTION_ERROR_INTER;
    const sendMailError: ACTION_ERROR_INTER =
      preFetch.error as ACTION_ERROR_INTER;

    if (error) {
      return error.message;
    }

    if (sendMailError) {
      return sendMailError.message;
    }
  };

  const getFieldValue = (name: CODE_VALUE_TYPE) => formik.values[name];

  const login = type == AUTH_TYPE.EMAIL ? auth.user?.email : auth.user?.phone;

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
      login={login}
      type={type}
    />
  );
};
