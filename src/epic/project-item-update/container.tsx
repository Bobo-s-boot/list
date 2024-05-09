import React from 'react';

import {
  ACTION_ERROR_INTER,
  FORM_VALUE_ENUM,
  FORM_VALUE_INTER,
  FORM_VALUE_TYPE,
} from './constant';

import { Component } from './component';
import { required } from '../../lib/validation/service';
import { FormikValues, useFormik } from 'formik';
import { validation } from '../../lib/validation';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { updateProject } from './action';
import { SELECT_OPTION_ITEM_DATA } from '../../common/select';
import { PROJECT_LIST_MODULE_NAME } from '../project-list';

export const Container: React.FC<{
  id: string;
  name: string;
  close: Function;
}> = ({ id, name, close }) => {
  const query = useQueryClient();

  const onSuccess = (d: any, values: any) => {
    query.invalidateQueries(PROJECT_LIST_MODULE_NAME);
    formik.resetForm();
    close();
  };
  const action = useMutation(
    (values: FORM_VALUE_INTER) => updateProject(id, values),
    { onSuccess },
  );

  const config = {
    [FORM_VALUE_ENUM.NAME]: [required],
  };

  const validate = (values: FormikValues) => validation(values, config);

  const initialValues = { [FORM_VALUE_ENUM.NAME]: name };

  const formik: FormikValues = useFormik({
    initialValues,
    validate,
    enableReinitialize: true,
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
      isError={isError()}
      isLoading={isLoading()}
      isSuccess={isSuccess()}
      errorMessage={getErrorMessage()}
      close={close}
    />
  );
};
