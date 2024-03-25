import React from 'react';

import { FormikValues } from 'formik';
import styled from 'styled-components';

import { TextElem } from '../../common/text';
import { GridElem } from '../../common/grid';
import { FieldTextElem } from '../../common/field-text';
import { ButtonElem } from '../../common/button';
import { LoaderElem } from '../../common/loader';
import { AlertActionElem } from '../../common/alert-action';
import { CODE_VALUE_ENUM } from './constant';
import { ResendComponent } from './frame/resend.component.tsx';
import { LayoutSectionElem } from '../../common/layout-section';
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
  login: string;
  type: AUTH_TYPE;
}> = ({
  formik,
  isFieldError,
  getFieldError,
  isSubmitDisabled,
  getFieldValue,
  isLoading,
  isError,
  errorMessage,
  login,
  type,
}) => {
  return (
    <LayoutSectionElem>
      <Form onSubmit={formik.handleSubmit}>
        {isLoading && <LoaderElem />}
        <GridElem size="mod">
          <TextElem
            color="textPrimary"
            size="heading"
            type="bold"
            tid="AUTH.VERIFICATION.TITLE"
            tvalue={{ type }}
          />
          <TextElem
            color="textSecondary"
            size="label"
            // type="default"
            tid="AUTH.VERIFICATION.TEXT"
            tvalue={{ type, login }}
          />
          <GridElem size="input">
            <FieldTextElem
              name={CODE_VALUE_ENUM.CODE}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              title="AUTH.VERIFICATION.CODE"
              value={getFieldValue(CODE_VALUE_ENUM.CODE)}
              errorMessage={getFieldError(CODE_VALUE_ENUM.CODE)}
              error={isFieldError(CODE_VALUE_ENUM.CODE)}
            />
          </GridElem>
          <ButtonElem
            disabled={isSubmitDisabled()}
            type="submit"
            tid="AUTH.VERIFICATION.BUTTON"
          />
          {isError && <AlertActionElem text={errorMessage} />}
        </GridElem>
      </Form>
      <ResendComponent />
    </LayoutSectionElem>
  );
};

const Form = styled.form`
  width: 100%;
`;
