import React from 'react';

import { FormikValues } from 'formik';

import { FORM_VALUE_ENUM } from './constant';

import { GridElem } from '../../common/grid';
import { ButtonElem } from '../../common/button';
import { LoaderElem } from '../../common/loader';
import { AlertActionElem } from '../../common/alert-action';
import { FieldPasswordElem } from '../../common/field-password';
import { FormElem } from '../../common/form';
import { RecoveryStepsElem } from '../../common/recovery-steps';
import styled from 'styled-components';
import { TextElem } from '../../common/text';

export const Component: React.FC<{
  formik: FormikValues;
  isFieldError: Function;
  getFieldError: Function;
  isSubmitDisabled: Function;
  getFieldValue: Function;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
}> = ({
  formik,
  isFieldError,
  getFieldError,
  isSubmitDisabled,
  getFieldValue,
  isLoading,
  isError,
  errorMessage,
}) => {
  return (
    <GridElem spacing={11}>
      <TitleContainer spacing={3}>
        <TextElem
          size="heading"
          type="bold"
          tid="AUTH.RECOVERY_PASSWORD.TITLE"
        />
        <TextElem
          color="textSecondary"
          tid="AUTH.RECOVERY_PASSWORD.DESCRIPTION"
        />
      </TitleContainer>
      <FormElem onSubmit={formik.handleSubmit}>
        {isLoading && <LoaderElem />}
        <GridElem spacing={9}>
          <GridElem spacing={6}>
            <FieldPasswordElem
              name={FORM_VALUE_ENUM.PASSWORD}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              title="AUTH.RECOVERY_PASSWORD.PASSWORD"
              value={getFieldValue(FORM_VALUE_ENUM.PASSWORD)}
              errorMessage={getFieldError(FORM_VALUE_ENUM.PASSWORD)}
              error={isFieldError(FORM_VALUE_ENUM.PASSWORD)}
            />
          </GridElem>
          <ButtonElem
            disabled={isSubmitDisabled()}
            type="submit"
            tid="AUTH.RECOVERY_PASSWORD.BUTTON"
          />
          {isError && <AlertActionElem text={errorMessage} />}
        </GridElem>
      </FormElem>
    </GridElem>
  );
};

const TitleContainer = styled(GridElem)`
  justify-items: center;
`;
