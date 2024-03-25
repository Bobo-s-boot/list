import React from 'react';

import { FormikValues } from 'formik';

import { FORM_VALUE_ENUM } from './constant';

import { TextElem } from '../../common/text';
import { GridElem } from '../../common/grid';
import { FieldTextElem } from '../../common/field-text';
import { ButtonElem } from '../../common/button';
import { LoaderElem } from '../../common/loader';
import { AlertActionElem } from '../../common/alert-action';
import { FormElem } from '../../common/form';
import styled from 'styled-components';
import { SelectMethodAuthContainer } from '../select-method-auth';
import { AUTH_TYPE } from '../../data/auth/constant';

export const Component: React.FC<{
  formik: FormikValues;
  isFieldError: Function;
  getFieldError: Function;
  isSubmitDisabled: Function;
  getFieldValue: Function;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  method: AUTH_TYPE;
  setMethod: Function;
}> = ({
  formik,
  isFieldError,
  getFieldError,
  isSubmitDisabled,
  getFieldValue,
  isLoading,
  isError,
  errorMessage,
  method,
  setMethod,
}) => {
  return (
    <FormElem onSubmit={formik.handleSubmit}>
      {isLoading && <LoaderElem />}
      <GridElem size="mod">
        <TitleContainer spacing={3}>
          <TextElem size="heading" type="bold" tid="AUTH.RECOVERY.TITLE" />
          <TextElem color="textSecondary" tid="AUTH.RECOVERY.DESCRIPTION" />
        </TitleContainer>
        <SelectMethodAuthContainer method={method} setMethod={setMethod} />
        {method === AUTH_TYPE.EMAIL ? (
          <FieldTextElem
            name={FORM_VALUE_ENUM.EMAIL}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            title="AUTH.RECOVERY.EMAIL"
            value={getFieldValue(FORM_VALUE_ENUM.EMAIL)}
            errorMessage={getFieldError(FORM_VALUE_ENUM.EMAIL)}
            error={isFieldError(FORM_VALUE_ENUM.EMAIL)}
            type="email"
          />
        ) : (
          <FieldTextElem
            name={FORM_VALUE_ENUM.PHONE}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            title="AUTH.RECOVERY.PHONE"
            value={getFieldValue(FORM_VALUE_ENUM.PHONE)}
            errorMessage={getFieldError(FORM_VALUE_ENUM.PHONE)}
            error={isFieldError(FORM_VALUE_ENUM.PHONE)}
            type="phone"
          />
        )}
        <ButtonElem
          disabled={isSubmitDisabled()}
          type="submit"
          tid="AUTH.RECOVERY.BUTTON"
        />
        {isError && <AlertActionElem text={errorMessage} />}
      </GridElem>
    </FormElem>
  );
};

const TitleContainer = styled(GridElem)`
  justify-items: center;
`;
