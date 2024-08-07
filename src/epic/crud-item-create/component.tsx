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
import { DoubleContainerElem } from '../../common/double-container';
import addIcon from '../../asset/svg/common/add-small.svg';
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
}) => {
  const multiValueContainer = ({ selectProps, data }: any) => {
    const label = data.label;
    const allSelected = selectProps.value;
    const index = allSelected.findIndex(
      (selected: any) => selected.label === label,
    );
    const isLastSelected = index === allSelected.length - 1;
    const labelSuffix = isLastSelected ? '' : ', ';
    const val = `${label}${labelSuffix}`;
    return val;
  };

  return (
    <>
      <FormElem onSubmit={formik.handleSubmit}>
        {isLoading && <LoaderElem />}

        <GridElem spacing={4}>
          <FlexContainer>
            <DoubleContainerElem>
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
                type="phone"
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
            </DoubleContainerElem>

            <DoubleContainerElem>
              <ButtonStyled
                type="add"
                tid="CRUD.CREATE.ADD.MANAGER"
                iconRight={addIcon}
                iconSize="very_small"
                onClick={formik.handleSubmit}
              />
              <ButtonStyled
                type="add"
                tid="CRUD.CREATE.ADD.ADMIN"
                iconRight={addIcon}
                iconSize="very_small"
                onClick={formik.handleSubmit}
              />
              <SubmitContainer>
                <ButtonElem
                  type="button"
                  tid="CRUD.UPDATE.BUTTON.UPDATE"
                  disabled={isSubmitDisabled()}
                  onClick={formik.handleSubmit}
                />
              </SubmitContainer>
            </DoubleContainerElem>
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

const SubmitContainer = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  padding: ${Spacing(2)};
  background-color: #f4f4f4;
  border-radius: ${Spacing(1)};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing(8)};
  padding: ${Spacing(4)};
  background: linear-gradient(135deg, #e0eafc, #cfdef3);
  border-radius: ${Spacing(2)};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
  }
`;

const ButtonStyled = styled(ButtonElem)`
  & > div > span {
    font-weight: 500 !important;
  }

  background-color: #007bff;
  color: white;
  padding: ${Spacing(2)} ${Spacing(4)};
  border: none;
  border-radius: ${Spacing(1)};
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;
