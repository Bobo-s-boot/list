import React from 'react';

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
  password,
  passwordRepeat,
  required,
} from '../../lib/validation/service';
import { FormikValues, useFormik } from 'formik';
import { validation } from '../../lib/validation';
import { sendAuthLoginData } from './action';
import { useHistory } from 'react-router';
import { INDEX_PAGE_PATH } from '../../page/index/index';
import { setAuthData } from '../../data/auth/action';
import { useDispatch, useSelector } from '../../lib/store';
import { AUTH_MODULE_NAME } from '../../data/auth';

const config = {
  [FORM_VALUE_ENUM.PASSWORD]: [required],
  [FORM_VALUE_ENUM.CODE]: [required],
  [FORM_VALUE_ENUM.NOTIFICATION_TOKEN]: [],
};

const validate = (values: FormikValues) => validation(values, config);

export const Container: React.FC<{ code: any }> = ({ code }) => {
  const dispatch = useDispatch();

  const { state } = useSelector((s: any) => ({
    state: s[AUTH_MODULE_NAME],
  }));

  const initialValues = {
    [FORM_VALUE_ENUM.CODE]: code,
    [FORM_VALUE_ENUM.PASSWORD]: '',
    [FORM_VALUE_ENUM.NOTIFICATION_TOKEN]: state.meta?.notificationToken || '',
  };

  const history = useHistory();

  const onSuccess = (d: any) => {
    const data: ACTION_RESPONSE_INTER = d as unknown as ACTION_RESPONSE_INTER;

    return dispatch(setAuthData(data.accessToken)).then(() =>
      history.push(INDEX_PAGE_PATH),
    );
  };

  const action = useMutation(sendAuthLoginData, { onSuccess });

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
      isError={isError()}
      errorMessage={getErrorMessage()}
    />
  );
};
