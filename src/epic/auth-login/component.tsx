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
import { AUTH_TYPE } from '../../data/auth/constant';
import { AUTH_SIGNUP_PAGE_PATH } from '../../page/auth-signup';
import { SelectMethodAuthContainer } from '../select-method-auth';
import { i18n } from '../../lib/lang';

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
        <TitleContainer spacing={3}>
          <TextElem
            size="heading"
            type="bold"
            color="textSecondary"
            tid="AUTH.LOGIN.TITLE"
            isMulishFont
          />
          <TextElem
            size="main"
            color="textDefault"
            type="medium"
            tid="AUTH.LOGIN.DESCRIPTION"
          />
        </TitleContainer>

        <GridStyled size="mod">
          <SelectMethodAuthContainer method={method} setMethod={setMethod} />

          <GridElem>
            {method === AUTH_TYPE.EMAIL ? (
              <FieldTextElem
                placeholder={`${i18n.t('AUTH.LOGIN.EMAIL')}`}
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
                placeholder={`${i18n.t('AUTH.LOGIN.PHONE')}`}
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
              placeholder={`${i18n.t('AUTH.LOGIN.PASSWORD')}`}
              name={FORM_VALUE_ENUM.PASSWORD}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              title="AUTH.LOGIN.PASSWORD"
              value={getFieldValue(FORM_VALUE_ENUM.PASSWORD)}
              errorMessage={getFieldError(FORM_VALUE_ENUM.PASSWORD)}
              error={isFieldError(FORM_VALUE_ENUM.PASSWORD)}
              disabled={true}
            />
            <LinkElem
              justifySelf="end"
              color="textDefault"
              tid="AUTH.LOGIN.LINKS.RECOVERY.LINK"
              link={AUTH_RECOVERY_PAGE_PATH}
            />
          </GridElem>
          <ButtonElem
            disabled={isSubmitDisabled()}
            color="buttonPrimary"
            type="submit"
            fill="solid"
            tid="AUTH.LOGIN.BUTTON"
            sizeText="main"
          />
          <LinkElem
            tid="AUTH.LOGIN.LINKS.RECOVERY.PREFIX"
            sufixTid="AUTH.LOGIN.LINKS.RECOVERY.SUFIX"
            link={AUTH_SIGNUP_PAGE_PATH}
            type="bold"
            size="small"
            color="textSecondary"
          />

          {isError && <AlertActionElem text={errorMessage} type="error" />}
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
  align-items: center;
`;
