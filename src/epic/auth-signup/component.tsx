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
      <GridElem size="mod">
        <TitleContainer spacing={3}>
          <TextElem size="heading" type="bold" tid="AUTH.SIGNUP.TITLE" />
          <TextElem color="textSecondary" tid="AUTH.SIGNUP.DESCRIPTION" />
        </TitleContainer>
        <GridElem size="input">
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

          <LinkElem
            tid="AUTH.SIGNUP.LINKS.SIGNUP.LINK"
            prefixTid="AUTH.SIGNUP.LINKS.SIGNUP.PREFIX"
            link={AUTH_LOGIN_PAGE_PATH}
          />
        </GridElem>
        <ButtonElem
          disabled={isSubmitDisabled}
          type="submit"
          tid="AUTH.SIGNUP.BUTTON"
        />
        {isError && <AlertActionElem text={errorMessage} />}
      </GridElem>
    </Form>
  );
};

const TitleContainer = styled(GridElem)`
  justify-items: center;
`;

const Form = styled(FormElem)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
