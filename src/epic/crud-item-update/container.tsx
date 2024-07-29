import React from 'react';
import { FormikValues, useFormik } from 'formik';
import { useHistory, useParams } from 'react-router';

import {
  ACTION_ERROR_INTER,
  FORM_VALUE_ENUM,
  FORM_VALUE_INTER,
  FORM_VALUE_TYPE,
  MODULE_NAME,
  Product,
} from './constant';
import { Component } from './component';
import { required } from '../../lib/validation/service';
import { validation } from '../../lib/validation';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { OFFICE_LIST_MODULE_NAME } from '../office-list';
import { getData, updateData } from './action';
import { OFFICE_ITEM_VALUE_INTER } from '../office-item-create';
import { OFFICE_PAGE_PATH } from '../../page/office-list';
import axios from 'axios';
import { convert } from '../project-item-create/convert';
import { CRUD_ITEM_VALUE_INTER } from '../crud-item-create';
import { CRUD_LIST_MODULE_NAME } from '../crud-projec-list';
import { CRUD_PAGE_PATH } from '../../page/crud-list';

export const Container: React.FC<{
  CrudId: string;
}> = ({ CrudId }) => {
  const query = useQueryClient();
  const history = useHistory();

  const onChangeSelect = (name: string, values: any) => {
    formik.setFieldValue(name, [...values]);
  };

  const response = useQuery(MODULE_NAME, () =>
    getData(CrudId).then((data: any) => data),
  );

  const data = convert(response?.data) as unknown as CRUD_ITEM_VALUE_INTER;

  const onSuccess = (d: any, values: any) => {
    query.invalidateQueries(CRUD_LIST_MODULE_NAME);
  };
  const action = useMutation(
    (values: FORM_VALUE_INTER) => updateData(CrudId, values),
    { onSuccess },
  );

  const config = {
    [FORM_VALUE_ENUM.NAME]: [required],
    [FORM_VALUE_ENUM.PRICE]: [required],
    [FORM_VALUE_ENUM.DESCRIPTION]: [required],
  };

  const validate = (values: FormikValues) => validation(values, config);

  const initialValues = {
    [FORM_VALUE_ENUM.NAME]: data?.name || '',
    [FORM_VALUE_ENUM.PRICE]: data?.price || 0,
    [FORM_VALUE_ENUM.DESCRIPTION]: data?.description || '',
  };

  const formik: FormikValues = useFormik({
    initialValues,
    validate,
    enableReinitialize: true,
    onSubmit: (values: FORM_VALUE_INTER) => {
      action.mutate(values);
      return history.push(CRUD_PAGE_PATH);
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

  const getErrorMessage = () => {
    const error: ACTION_ERROR_INTER = action.error as ACTION_ERROR_INTER;
    if (error) {
      return error.message;
    }
  };

  const isError = () => {
    if (action.isError && !action.isLoading && getErrorMessage()) {
      return true;
    }
  };

  const getFieldValue = (name: FORM_VALUE_TYPE) => formik.values[name];

  return (
    <Component
      name={data?.name}
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
    />
  );
};
