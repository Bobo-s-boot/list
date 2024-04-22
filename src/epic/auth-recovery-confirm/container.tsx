import React from 'react';

import { FORM_VALUE_ENUM, FORM_VALUE_INTER, FORM_VALUE_TYPE } from './constant';

import { Component } from './component';
import { number, required } from '../../lib/validation/service';
import { FormikValues, useFormik } from 'formik';
import { validation } from '../../lib/validation';

import { useHistory } from 'react-router';

import { AUTH_RECOVERY_PASSWORD_PAGE_PATH_DYNAMIC } from '../../page/auth-recovery-password';

const config = {
  [FORM_VALUE_ENUM.CODE]: [required, number],
};

const initialValues = {
  [FORM_VALUE_ENUM.CODE]: '',
};

const validate = (values: FormikValues) => validation(values, config);

export const Container: React.FC<{ email: any, phone: any }> = ({ email, phone }) => {
  const history = useHistory();

  const formik: FormikValues = useFormik({
    initialValues,
    validate,
    onSubmit: (values: FORM_VALUE_INTER) => {
      return history.push(
        AUTH_RECOVERY_PASSWORD_PAGE_PATH_DYNAMIC(values[FORM_VALUE_ENUM.CODE]),
      );
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
  };

  const getFieldValue = (name: FORM_VALUE_TYPE) => formik.values[name];

  return (
    <Component
      isFieldError={isFieldError}
      getFieldError={getFieldError}
      isSubmitDisabled={isSubmitDisabled}
      getFieldValue={getFieldValue}
      formik={formik}
      email={email}
      phone={phone}
    />
  );
};
