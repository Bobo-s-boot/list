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
import { FormElem } from '../../common/form';

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
    <Form onSubmit={formik.handleSubmit}>
      {isLoading && <LoaderElem />}
      <TitleContainer>
        <TextElem
          size="heading"
          type="bold"
          color="textSecondary"
          isMulishFont
          tid="AUTH.SIGNUP.TITLE"
          tvalue={{ type }}
        />
        <TextElem
          size="main"
          color="textDefault"
          type="medium"
          tid="AUTH.VERIFICATION.TEXT"
          tvalue={{ type, login }}
        />
      </TitleContainer>
      <GridStyled size="mod">
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
          <ResendComponent email={login} />
        </GridElem>

        <ButtonElem
          disabled={isSubmitDisabled()}
          type="submit"
          tid="AUTH.VERIFICATION.BUTTON"
        />
        {isError && <AlertActionElem text={errorMessage} />}
      </GridStyled>
    </Form>
  );
};

const GridStyled = styled(GridElem)`
  background-color: #ffffff;
  box-shadow: 0px 0px 50px 0px #24231e0d;
  padding: 50px 85px;
  gap: 40px;
  border-radius: 35px;
`;

const TitleContainer = styled(GridElem)`
  justify-items: center;
  text-align: center;
  max-width: 546px;
`;

const Form = styled(FormElem)`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 60px;
  max-width: 628px;
  align-items: center;
`;
