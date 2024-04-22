import React from 'react';

import { FormikValues } from 'formik';

import { FORM_VALUE_ENUM } from './constant';

import { TextElem } from '../../common/text';
import { GridElem } from '../../common/grid';
import { FieldTextElem } from '../../common/field-text';
import { ButtonElem } from '../../common/button';
import { LoaderElem } from '../../common/loader';
import { AlertActionElem } from '../../common/alert-action';
import { FieldPasswordElem } from '../../common/field-password';
import { FormElem } from '../../common/form';
import styled from 'styled-components';
import { LinkElem } from '../../common/link';
import { AUTH_LOGIN_PAGE_PATH } from '../../page/auth-login';

export const Component: React.FC<{
  formik: FormikValues;
  isFieldError: Function;
  getFieldError: Function;
  isSubmitDisabled: any;
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
    <Form onSubmit={formik.handleSubmit}>
      {isLoading && <LoaderElem />}
      <TitleContainer spacing={3}>
        <TextElem
          size="heading"
          type="bold"
          color="textSecondary"
          isMulishFont
          tid="AUTH.SIGNUP.TITLE"
        />
        <TextElem
          size="main"
          color="textDefault"
          type="medium"
          tid="AUTH.SIGNUP.DESCRIPTION"
        />
      </TitleContainer>

      <GridElem size="mod">
        <GridStyled size="input">
          <GridContainer>
            <FieldTextElem
              name={FORM_VALUE_ENUM.EMAIL}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              title="AUTH.SIGNUP.EMAIL"
              value={getFieldValue(FORM_VALUE_ENUM.EMAIL)}
              errorMessage={getFieldError(FORM_VALUE_ENUM.EMAIL)}
              error={isFieldError(FORM_VALUE_ENUM.EMAIL)}
              type="email"
            />

            <FieldTextElem
              name={FORM_VALUE_ENUM.PHONE}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              title="AUTH.SIGNUP.PHONE"
              value={getFieldValue(FORM_VALUE_ENUM.PHONE)}
              errorMessage={getFieldError(FORM_VALUE_ENUM.PHONE)}
              error={isFieldError(FORM_VALUE_ENUM.PHONE)}
              type="phone"
            />
            <FieldTextElem
              name={FORM_VALUE_ENUM.NAME}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              title="AUTH.SIGNUP.NAME"
              value={getFieldValue(FORM_VALUE_ENUM.NAME)}
              errorMessage={getFieldError(FORM_VALUE_ENUM.NAME)}
              error={isFieldError(FORM_VALUE_ENUM.NAME)}
            />
            <FieldPasswordElem
              name={FORM_VALUE_ENUM.PASSWORD}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              title="AUTH.SIGNUP.PASSWORD"
              value={getFieldValue(FORM_VALUE_ENUM.PASSWORD)}
              errorMessage={getFieldError(FORM_VALUE_ENUM.PASSWORD)}
              error={isFieldError(FORM_VALUE_ENUM.PASSWORD)}
            />
          </GridContainer>

          <ButtonElem
            sizeText="input"
            disabled={isSubmitDisabled}
            color="buttonPrimary"
            type="submit"
            fill="solid"
            tid="AUTH.SIGNUP.BUTTON"
          />
          <LinkElem
            sufixTid="AUTH.SIGNUP.LINKS.SIGNUP.SUFIX"
            tid="AUTH.SIGNUP.LINKS.SIGNUP.PREFIX"
            link={AUTH_LOGIN_PAGE_PATH}
            type="bold"
            size="small"
          />
        </GridStyled>
        {isError && <AlertActionElem text={errorMessage} />}
      </GridElem>
    </Form>
  );
};

const GridContainer = styled(GridElem)`
  gap: 16px;
`;

const GridStyled = styled(GridElem)`
  background-color: #ffff;
  padding: 50px 85px;
  box-shadow: 0px 0px 50px 0px #24231e0d;
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
