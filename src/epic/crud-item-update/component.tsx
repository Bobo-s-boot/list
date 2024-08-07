import React from 'react';
import styled from 'styled-components';
import { FormikValues } from 'formik';

import { i18n } from '../../lib/lang';
import { FORM_VALUE_ENUM } from './constant';
import { GridElem } from '../../common/grid';
import { FieldTextElem } from '../../common/field-text';
import { ButtonElem } from '../../common/button';
import { LoaderElem } from '../../common/loader';
import { AlertActionElem } from '../../common/alert-action';
import { FormElem } from '../../common/form';
import { Spacing } from '../../theme';

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
  name?: string;
  onChangeSelect: (name: string, values: any) => void;
}> = ({
  formik,
  isFieldError,
  getFieldError,
  isSubmitDisabled,
  getFieldValue,
  isLoading = false,
  isSuccess,
  isError,
  errorMessage,
  onChangeSelect,
  name,
}) => {
  const multiValueContainer = ({ selectProps, data }: any) => {
    const label = data?.label;
    const allSelected = selectProps?.value;
    const index = allSelected.findIndex(
      (selected: any) => selected?.label === label,
    );
    const isLastSelected = index === allSelected?.length - 1;
    const labelSuffix = isLastSelected ? '' : ', ';
    const val = `${label}${labelSuffix}`;
    return val;
  };

  return (
    <>
      <FormElem onSubmit={formik.handleSubmit}>
        {isLoading && <LoaderElem />}

        <GridElem spacing={4}>
          {/* <TextElem size="medium" type="bold" tid={name} /> */}

          <FlexContainer>
            <FieldTextElem
              name={FORM_VALUE_ENUM.NAME}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              title="CRUD.CREATE.FORM.NAME"
              value={getFieldValue(FORM_VALUE_ENUM.NAME)}
              errorMessage={getFieldError(FORM_VALUE_ENUM.NAME)}
              error={isFieldError(FORM_VALUE_ENUM.NAME)}
            />

            <FieldTextElem
              name={FORM_VALUE_ENUM.PRICE}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              title="CRUD.CREATE.FORM.PRICE"
              value={getFieldValue(FORM_VALUE_ENUM.PRICE)}
              errorMessage={getFieldError(FORM_VALUE_ENUM.PRICE)}
              error={isFieldError(FORM_VALUE_ENUM.PRICE)}
            />

            <FieldTextElem
              name={FORM_VALUE_ENUM.DESCRIPTION}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              title="CRUD.CREATE.FORM.DESCRIPTION"
              value={getFieldValue(FORM_VALUE_ENUM.DESCRIPTION)}
              errorMessage={getFieldError(FORM_VALUE_ENUM.DESCRIPTION)}
              error={isFieldError(FORM_VALUE_ENUM.DESCRIPTION)}
            />
          </FlexContainer>
          {isError && <AlertActionElem text={i18n.t(`${errorMessage}`)} />}
          {isSuccess && (
            <AlertActionElem type="success" tid="CRUD.RESULT.SUCCESS" />
          )}
        </GridElem>
      </FormElem>
    </>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing(8)};
  padding: ${Spacing(4)};
  background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
  border-radius: ${Spacing(2)};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;
