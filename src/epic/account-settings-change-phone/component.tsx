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
import { ContentContainerElem } from '../../common/content-container';
import { DoubleContainerElem } from '../../common/double-container';
import styled from 'styled-components';

export const Component: React.FC<{
  formik: FormikValues;
  isFieldError: Function;
  getFieldError: Function;
  isSubmitDisabled: Function;
  getFieldValue: Function;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
}> = ({
  formik,
  isFieldError,
  getFieldError,
  isSubmitDisabled,
  getFieldValue,
  isLoading,
  isSuccess,
  isError,
  errorMessage,
}) => {
  return (
    <FormElem onSubmit={formik.handleSubmit}>
      {isLoading && <LoaderElem />}
      <ContentContainerElem>
        <GridElem size="com">
          <TextElem
            size="title"
            type="medium"
            tid="SETTINGS.CHANGE_PHONE.TITLE"
          />
          <DoubleContainerElem>
            <GridElem size="input">
              <FieldTextElem
                name={FORM_VALUE_ENUM.NEW_PHONE}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                title="SETTINGS.CHANGE_PHONE.NEW_PHONE"
                value={getFieldValue(FORM_VALUE_ENUM.NEW_PHONE)}
                errorMessage={getFieldError(FORM_VALUE_ENUM.NEW_PHONE)}
                error={isFieldError(FORM_VALUE_ENUM.NEW_PHONE)}
                type="phone"
              />
            </GridElem>
            <ButtonStyled
              disabled={isSubmitDisabled()}
              type="submit"
              tid="SETTINGS.CHANGE_PHONE.BUTTON"
              // fill="transparent"
            />
          </DoubleContainerElem>

          {isError && <AlertActionElem text={errorMessage} />}
          {isSuccess && (
            <AlertActionElem
              type="success"
              tid="SETTINGS.CHANGE_PHONE.SUCCESS"
            />
          )}
        </GridElem>
      </ContentContainerElem>
    </FormElem>
  );
};

const ButtonStyled = styled(ButtonElem)`
  margin-top: 22px;
`;
