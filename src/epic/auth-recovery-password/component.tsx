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
          tid="AUTH.RECOVERY_PASSWORD.TITLE"
          isMulishFont
        />
        <TextElem
          size="main"
          color="textDefault"
          type="medium"
          tid="AUTH.RECOVERY_PASSWORD.DESCRIPTION"
        />
      </TitleContainer>
      <GridStyled spacing={9}>
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
