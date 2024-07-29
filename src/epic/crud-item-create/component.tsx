// src/components/AddProduct/Component.tsx
import React from 'react';
import { FormikProps } from 'formik';
import styled from 'styled-components';
import { ProductFormValues } from './constant';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

interface ComponentProps {
  formik: FormikProps<ProductFormValues>;
  isFieldError: (name: keyof ProductFormValues) => boolean;
  getFieldError: (name: keyof ProductFormValues) => string | undefined;
  isSubmitDisabled: () => boolean;
  getFieldValue: (name: keyof ProductFormValues) => any;
  onChangeSelect: (name: string, values: any) => void;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
}

export const Component: React.FC<ComponentProps> = ({
  formik,
  isFieldError,
  getFieldError,
  isSubmitDisabled,
  isLoading = false,
  isSuccess,
  isError,
  errorMessage,
}) => {
  const { t } = useTranslation();

  const multiValueContainer = ({ selectProps, data }: any) => {
    const label = data.label;
    const allSelected = selectProps.value;
    const index = allSelected.findIndex(
      (selected: any) => selected.label === label,
    );
    const isLastSelected = index === allSelected.length - 1;
    const labelSuffix = isLastSelected ? '' : ', ';
    const val = `${label}${labelSuffix}`;
    return val;
  };

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      {isLoading && <LoaderElem />}
      <h1>{t('info')}</h1>

      <div className="row">
        <div className="group">
          <label>{t('name')}</label>
          <input
            name="name"
            className="standard"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {isFieldError('name') && (
            <div className="error">{getFieldError('name')}</div>
          )}
        </div>

        <div className="group">
          <label>{t('price')}</label>
          <input
            name="price"
            type="number"
            className="standard"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {isFieldError('price') && (
            <div className="error">{getFieldError('price')}</div>
          )}
        </div>
      </div>

      <div className="big-input">
        <label>{t('description')}</label>
        <textarea
          name="description"
          className="big"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {isFieldError('description') && (
          <div className="error">{getFieldError('description')}</div>
        )}
      </div>

      <button
        className="blue-button"
        type="submit"
        disabled={isSubmitDisabled()}
      >
        {t('create-product')}
      </button>

      <div className="group-buttons">
        <button type="button" onClick={() => changeLanguage('en')}>
          EN
        </button>
        <button type="button" onClick={() => changeLanguage('ua')}>
          UA
        </button>
      </div>

      {isError && <div className="error">{errorMessage}</div>}
      {isSuccess && <div className="success">{t('success')}</div>}
    </StyledForm>
  );
};

const StyledForm = styled.form`
  /* Your styles */
`;

const LoaderElem = styled.div`
  /* Add your loader styles here */
`;
