// src/components/AddProduct/Container.tsx
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { Component } from './component';
import { API, FORM_VALUE_ENUM, ProductFormValues } from './constant';
import { Formik, FormikProps, FormikHelpers, FormikValues } from 'formik';
import { CRUD_PAGE_PATH } from '../../page/crud-list';
import { required } from '../../lib/validation/service';
import { validation } from '../../lib/validation';

const createProduct = async (product: ProductFormValues) => {
  const response = await axios.post(API.URL, product);
  return response.data;
};

export const Container: React.FC = () => {
  const initialValues: ProductFormValues = {
    [FORM_VALUE_ENUM.NAME]: '',
    [FORM_VALUE_ENUM.PRICE]: 0,
    [FORM_VALUE_ENUM.DESCRIPTION]: '',
  };

  const config = {
    [FORM_VALUE_ENUM.NAME]: [required],
    [FORM_VALUE_ENUM.PRICE]: [required],
    [FORM_VALUE_ENUM.DESCRIPTION]: [required],
  };

  const validate = (values: ProductFormValues) => validation(values, config);

  console.log(validate);

  const history = useHistory();
  const queryClient = useQueryClient();

  const mutation = useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries('products');
      history.push(CRUD_PAGE_PATH);
    },
    onError: (error) => {
      console.error('Error creating product:', error);
    },
  });

  const onSubmit = async (
    values: ProductFormValues,
    { setSubmitting }: FormikHelpers<ProductFormValues>,
  ) => {
    await mutation.mutateAsync(values);
    setSubmitting(false);
  };

  const isFieldError = (name: keyof ProductFormValues) => {
    return !!(
      mutation.error &&
      (mutation.error as any)[name] &&
      mutation.isError
    );
  };

  const getFieldError = (name: keyof ProductFormValues) => {
    return (mutation.error as any)[name];
  };

  const isSubmitDisabled = () => mutation.isLoading;

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formikProps: FormikProps<ProductFormValues>) => (
        <Component
          formik={formikProps}
          isFieldError={isFieldError}
          getFieldError={getFieldError}
          isSubmitDisabled={isSubmitDisabled}
          getFieldValue={(name) => formikProps.values[name]}
          onChangeSelect={(name, values) =>
            formikProps.setFieldValue(name, values)
          }
          isLoading={mutation.isLoading}
          isSuccess={mutation.isSuccess}
          isError={mutation.isError}
          errorMessage={
            mutation.error ? (mutation.error as Error).message : undefined
          }
        />
      )}
    </Formik>
  );
};
