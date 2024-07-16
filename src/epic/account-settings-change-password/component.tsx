import React from 'react';
import { FormikValues } from 'formik';
import { FORM_VALUE_ENUM } from './constant';
import { TextElem } from '../../common/text';
import { GridElem } from '../../common/grid';
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
      <ContentContainerElem>
        <FormElem onSubmit={formik.handleSubmit}>
          {isLoading && <LoaderElem />}
          <GridElem size="com">
            <TextElem
              size="main"
              type="semi-bold"
              tid="SETTINGS.CHANGE_PASSWORD.TITLE"
            />
            <GridElem spacing={4}>
              <DoubleContainerElem>
                <FieldPasswordElem
                  name={FORM_VALUE_ENUM.PASSWORD}
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  title="SETTINGS.CHANGE_PASSWORD.PASSWORD"
                  value={getFieldValue(FORM_VALUE_ENUM.PASSWORD)}
                  errorMessage={getFieldError(FORM_VALUE_ENUM.PASSWORD)}
                  error={isFieldError(FORM_VALUE_ENUM.PASSWORD)}
                />
              </DoubleContainerElem>

              <DoubleContainerElem>
                <FieldPasswordElem
                  name={FORM_VALUE_ENUM.NEW_PASSWORD}
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  title="SETTINGS.CHANGE_PASSWORD.NEW_PASSWORD"
                  value={getFieldValue(FORM_VALUE_ENUM.NEW_PASSWORD)}
                  errorMessage={getFieldError(FORM_VALUE_ENUM.NEW_PASSWORD)}
                  error={isFieldError(FORM_VALUE_ENUM.NEW_PASSWORD)}
                />
                <FieldPasswordElem
                  name={FORM_VALUE_ENUM.REPEAT_PASSWORD}
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  title="SETTINGS.CHANGE_PASSWORD.NEW_PASSWORD"
                  value={getFieldValue(FORM_VALUE_ENUM.REPEAT_PASSWORD)}
                  errorMessage={getFieldError(FORM_VALUE_ENUM.REPEAT_PASSWORD)}
                  error={isFieldError(FORM_VALUE_ENUM.REPEAT_PASSWORD)}
                />
              </DoubleContainerElem>
            </GridElem>
            <DoubleContainerElem>
              <ButtonElemRight
                disabled={isSubmitDisabled()}
                type="add"
                tid="SETTINGS.CHANGE_PASSWORD.BUTTON"
              />
            </DoubleContainerElem>

            {isError && <AlertActionElem text={errorMessage} />}
            {isSuccess && (
              <AlertActionElem
                type="success"
                tid="SETTINGS.CHANGE_PASSWORD.SUCCESS"
              />
            )}
          </GridElem>
        </FormElem>
      </ContentContainerElem>
    );
  };

const ButtonElemRight = styled(ButtonElem)`
  grid-column: 2;
  grid-row: 1;
`;
