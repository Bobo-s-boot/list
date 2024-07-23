import React, { useState } from 'react';
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
import {
  arrayLengthMax,
  phoneOperator,
  phoneUA,
  required,
} from '../../lib/validation/service';
import { validation } from '../../lib/validation';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { OFFICE_LIST_MODULE_NAME } from '../office-list';
import { getData, updateData } from './action';
import { OFFICE_ITEM_VALUE_INTER } from '../office-item-create';
import { convert } from './convert';
import { OFFICE_PAGE_PATH } from '../../page/office-list';
import axios from 'axios';

export const Container: React.FC<{
  officeId: string;
}> = ({ officeId }) => {
  const query = useQueryClient();
  const history = useHistory();

  const onChangeSelect = (name: string, values: any) => {
    formik.setFieldValue(name, [...values]);
  };

  const response = useQuery(MODULE_NAME, () =>
    getData(officeId).then((data: any) => data),
  );

  const data = convert(response?.data) as unknown as OFFICE_ITEM_VALUE_INTER;

  const onSuccess = (d: any, values: any) => {
    query.invalidateQueries(OFFICE_LIST_MODULE_NAME);
  };
  const action = useMutation(
    (values: FORM_VALUE_INTER) => updateData(officeId, values),
    { onSuccess },
  );

  const config = {
    [FORM_VALUE_ENUM.NAME]: [required],
    [FORM_VALUE_ENUM.PHONE]: [required, phoneUA, phoneOperator],
    [FORM_VALUE_ENUM.ADDRESS]: [required],
    [FORM_VALUE_ENUM.TIME]: [required, arrayLengthMax(2)],
    [FORM_VALUE_ENUM.BREAK]: [required, arrayLengthMax(2)],
    [FORM_VALUE_ENUM.DAYS]: [required],
    [FORM_VALUE_ENUM.DESIRED_CURRENCY]: [required],
    [FORM_VALUE_ENUM.ORDER_CURRENCY]: [],
    [FORM_VALUE_ENUM.TRADE_CRYPTO]: [],
  };

  const validate = (values: FormikValues) => validation(values, config);

  const initialValues = {
    [FORM_VALUE_ENUM.NAME]: data?.name || '',
    [FORM_VALUE_ENUM.PRICE]: data?.price || 0,
    [FORM_VALUE_ENUM.DESCRIPTION]: data?.description || '',
    [FORM_VALUE_ENUM.PHONE]: data?.phone || '',
    [FORM_VALUE_ENUM.ADDRESS]: data?.address || '',
    [FORM_VALUE_ENUM.TIME]: data?.time || ['00:00:00', '00:00:00'],
    [FORM_VALUE_ENUM.BREAK]: data?.break || ['00:00:00', '00:00:00'],
    [FORM_VALUE_ENUM.TRADE_CRYPTO]: data?.isTradeCrypto || false,
    [FORM_VALUE_ENUM.ORDER_CURRENCY]: data?.isOrderCurrency || false,
    [FORM_VALUE_ENUM.DAYS]: data?.days || [],
    [FORM_VALUE_ENUM.DESIRED_CURRENCY]: data?.desiredCurrency || [],
  };

  const formik: FormikValues = useFormik({
    initialValues,
    validate,
    enableReinitialize: true,
    onSubmit: (values: FORM_VALUE_INTER) => {
      action.mutate(values);
      return history.push(OFFICE_PAGE_PATH);
    },
  });

  const { id } = useParams<{ id: string }>();

  const { data: initialProduct } = useQuery<Product>(
    ['product', id],
    async () => {
      const response = await axios.get<Product>(
        `http://localhost:3001/products/${id}`,
      );
      return response.data;
    },
    { enabled: !!id },
  );

  const updateProduct = async (updatedProduct: Product) => {
    const response = await axios.put<Product>(
      `http://localhost:3001/product-update/${id}`, // Исправленный URL
      updatedProduct,
    );
    return response.data;
  };

  const mutation = useMutation(updateProduct, {
    onSuccess: async () => {
      await query.invalidateQueries('products');
    },
    onError: (error) => {
      console.error('Error updating product:', error);
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
