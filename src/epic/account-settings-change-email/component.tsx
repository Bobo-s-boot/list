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
import styled from 'styled-components';
import { Spacing } from '../../theme';
import { DoubleContainerElem } from '../../common/double-container';

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
    <ContentContainerElem>
      <FormElem onSubmit={formik.handleSubmit}>
        {isLoading && <LoaderElem />}
        <GridElem spacing={5}>
          <TextElem
            size="title"
            type="semi-bold"
            tid="SETTINGS.CHANGE_EMAIL.TITLE"
          />
          <GridElem spacing={4}>
            <DoubleContainerElem>
              <FieldTextElem
                title="SETTINGS.CHANGE_EMAIL.EMAIL"
                value={getFieldValue(FORM_VALUE_ENUM.EMAIL)}
                disabled
              />
            </DoubleContainerElem>

            <DoubleContainerElem>
              <FieldTextElem
                name={FORM_VALUE_ENUM.NEW_EMAIL}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                title="SETTINGS.CHANGE_EMAIL.NEW_EMAIL"
                value={getFieldValue(FORM_VALUE_ENUM.NEW_EMAIL)}
                errorMessage={getFieldError(FORM_VALUE_ENUM.NEW_EMAIL)}
                error={isFieldError(FORM_VALUE_ENUM.NEW_EMAIL)}
                type="email"
              />
              <FieldPasswordElem
                name={FORM_VALUE_ENUM.PASSWORD}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                title="SETTINGS.CHANGE_EMAIL.PASSWORD"
                value={getFieldValue(FORM_VALUE_ENUM.PASSWORD)}
                errorMessage={getFieldError(FORM_VALUE_ENUM.PASSWORD)}
                error={isFieldError(FORM_VALUE_ENUM.PASSWORD)}
              />
            </DoubleContainerElem>
          </GridElem>
          <DoubleContainerElem>
            <ButtonElem
              disabled={isSubmitDisabled()}
              type="submit"
              tid="SETTINGS.CHANGE_EMAIL.BUTTON"
            />
          </DoubleContainerElem>

          {isError && <AlertActionElem text={errorMessage} />}
          {isSuccess && (
            <AlertActionElem
              type="success"
              tid="SETTINGS.CHANGE_EMAIL.SUCCESS"
            />
          )}
        </GridElem>
      </FormElem>
    </ContentContainerElem>
  );
};
