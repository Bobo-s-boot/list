import React from 'react';

import { FormikValues } from 'formik';
import styled from 'styled-components';

import { FORM_VALUE_ENUM } from './constant';

import { TextElem } from '../../common/text';
import { GridElem } from '../../common/grid';
import { FieldTextElem } from '../../common/field-text';
import { ButtonElem } from '../../common/button';
import { AlertActionElem } from '../../common/alert-action';
import { FieldPasswordElem } from '../../common/field-password';
import { FormElem } from '../../common/form';
import { LoaderElem } from '../../common/loader';
import { LinkElem } from '../../common/link';
import { AUTH_RECOVERY_PAGE_PATH } from '../../page/auth-recovery';
import { SelectMethodAuthContainer } from '../select-method-auth';
import { COLOR_ENUM } from '../../theme/color';
import { AUTH_TYPE } from '../../data/auth/constant';
import { Spacing } from '../../theme';

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
      <GridElem size="mod">
        <TitleContainer spacing={3}>
          <TextElem size="heading" type="bold" tid="AUTH.LOGIN.TITLE" />
          <TextElem color="textSecondary" tid="AUTH.LOGIN.DESCRIPTION" />
        </TitleContainer>
        <SelectMethodAuthContainer method={method} setMethod={setMethod} />
        <GridElem size="input">
          {method === AUTH_TYPE.EMAIL ? (
            <FieldTextElem
              name={FORM_VALUE_ENUM.EMAIL}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              title="AUTH.LOGIN.EMAIL"
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
              title="AUTH.LOGIN.PHONE"
              value={getFieldValue(FORM_VALUE_ENUM.PHONE)}
              errorMessage={getFieldError(FORM_VALUE_ENUM.PHONE)}
              error={isFieldError(FORM_VALUE_ENUM.PHONE)}
              type="phone"
            />
          )}

          <FieldPasswordElem
            name={FORM_VALUE_ENUM.PASSWORD}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            title="AUTH.LOGIN.PASSWORD"
            value={getFieldValue(FORM_VALUE_ENUM.PASSWORD)}
            errorMessage={getFieldError(FORM_VALUE_ENUM.PASSWORD)}
            error={isFieldError(FORM_VALUE_ENUM.PASSWORD)}
          />
          <LinkElem
            tid="AUTH.LOGIN.LINKS.RECOVERY.LINK"
            prefixTid="AUTH.LOGIN.LINKS.RECOVERY.PREFIX"
            link={AUTH_RECOVERY_PAGE_PATH}
          />
        </GridElem>
        <ButtonElem
          disabled={isSubmitDisabled()}
          type="submit"
          tid="AUTH.LOGIN.BUTTON"
        />

        {isError && <AlertActionElem text={errorMessage} type="error" />}
      </GridElem>
    </Form>
  );
};

const Grid = styled(GridElem)`
  margin-top: ${Spacing(3)};
`;

const TitleContainer = styled(GridElem)`
  justify-items: center;
`;

const Form = styled(FormElem)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Button = styled(ButtonElem)`
  & > * > * {
    color: ${({ theme }) => theme[COLOR_ENUM.DEFAULT]};
  }
`;
