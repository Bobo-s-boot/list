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
import { AUTH_LOGIN_PAGE_PATH } from '../../page/auth-login';
import { LinkElem } from '../../common/link';

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
    <Form onSubmit={formik.handleSubmit}>
      {isLoading && <LoaderElem />}
      <GridStyled size="mod">
        <TitleContainer spacing={3}>
          <TextElem
            size="heading"
            type="bold"
            color="textSecondary"
            tid="AUTH.RECOVERY.TITLE"
            isMulishFont
          />
          <TextElem
            size="main"
            type="medium"
            color="textDefault"
            tid="AUTH.RECOVERY.DESCRIPTION"
          />
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
        <LinkElem
          tid="AUTH.RECOVERY.LINKS.LOGIN.LINK"
          link={AUTH_LOGIN_PAGE_PATH}
          type="bold"
          size="small"
        />
        {isError && <AlertActionElem text={errorMessage} />}
      </GridStyled>
    </Form>
  );
};

const GridStyled = styled(GridElem)`
  background-color: #ffffff;
  padding: 50px 85px;
  gap: 40px;
  border-radius: 35px;
  box-shadow: 0px 0px 50px 0px #24231e0d;
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
`;
