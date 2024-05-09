import React from 'react';
import styled from 'styled-components';
import { FormikValues } from 'formik';

import { i18n } from '../../lib/lang';
import { FORM_VALUE_ENUM, currencyOptions, daysOptions } from './constant';
import { GridElem } from '../../common/grid';
import { FieldTextElem } from '../../common/field-text';
import { ButtonElem } from '../../common/button';
import { LoaderElem } from '../../common/loader';
import { AlertActionElem } from '../../common/alert-action';
import { FormElem } from '../../common/form';
import { DoubleContainerElem } from '../../common/double-container';
import { ContentContainerElem } from '../../common/content-container';
import { SelectElem } from '../../common/select';
import { FieldTimeInputElem } from '../../common/field-time-input';
import { FieldToggleElem } from '../../common/field-toggle';
import addIcon from '../../asset/svg/common/add-small.svg';

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
  stateSelect: any;
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
  stateSelect,
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

  function handleTimeRangeChange(dates: any, dateStrings: any) {
    formik.setFieldValue(FORM_VALUE_ENUM.TIME, dateStrings);
  }

  return (
    <>
      <FormElem onSubmit={formik.handleSubmit}>
        {isLoading && <LoaderElem />}
        <ContentContainerElem>
          <GridElem spacing={5}>
            <DoubleContainerElem>
              <FieldTextElem
                name={FORM_VALUE_ENUM.NAME}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                title="OFFICE.CREATE.FORM.NAME"
                value={getFieldValue(FORM_VALUE_ENUM.NAME)}
                errorMessage={getFieldError(FORM_VALUE_ENUM.NAME)}
                error={isFieldError(FORM_VALUE_ENUM.NAME)}
              />

              <FieldTextElem
                name={FORM_VALUE_ENUM.PHONE}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                title="OFFICE.CREATE.FORM.PHONE"
                value={getFieldValue(FORM_VALUE_ENUM.PHONE)}
                errorMessage={getFieldError(FORM_VALUE_ENUM.PHONE)}
                error={isFieldError(FORM_VALUE_ENUM.PHONE)}
                type="phone"
              />

              <FieldTextElem
                name={FORM_VALUE_ENUM.ADDRESS}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                title="OFFICE.CREATE.FORM.ADDRESS"
                value={getFieldValue(FORM_VALUE_ENUM.ADDRESS)}
                errorMessage={getFieldError(FORM_VALUE_ENUM.ADDRESS)}
                error={isFieldError(FORM_VALUE_ENUM.ADDRESS)}
                placeholder="OFFICE.CREATE.FORM.ADDRESS_PLACEHOLDER"
              />

              <SelectElem
                name={FORM_VALUE_ENUM.DAYS}
                title="OFFICE.CREATE.FORM.DAYS"
                onChange={onChangeSelect}
                errorMessage={getFieldError(FORM_VALUE_ENUM.DAYS)}
                error={isFieldError(FORM_VALUE_ENUM.DAYS)}
                options={daysOptions}
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                isMulti
                customComponents={{ MultiValueContainer: multiValueContainer }}
              />

              <FieldToggleElem
                handleClick={(e) =>
                  formik.setFieldValue(FORM_VALUE_ENUM.ORDER_CURRENCY, e)
                }
                title="OFFICE.CREATE.FORM.ORDER_CURRENCY"
                placeholder="OFFICE.CREATE.FORM.ORDER_CURRENCY_PLACEHOLDER"
              />
              <FieldToggleElem
                handleClick={(e) =>
                  formik.setFieldValue(FORM_VALUE_ENUM.TRADE_CRYPTO, e)
                }
                title="OFFICE.CREATE.FORM.TRADE_CRYPTO"
                placeholder="OFFICE.CREATE.FORM.ORDER_CRYPTO_PLACEHOLDER"
              />
            </DoubleContainerElem>

            <FieldTimeInputElem
              name={FORM_VALUE_ENUM.TIME}
              onChange={handleTimeRangeChange}
              title="OFFICE.CREATE.FORM.TIME"
            />

            <SelectElem
              name={FORM_VALUE_ENUM.DESIRED_CURRENCY}
              title="OFFICE.CREATE.FORM.DESIRED_CURRENCY"
              onChange={onChangeSelect}
              value={stateSelect[FORM_VALUE_ENUM.DESIRED_CURRENCY]}
              errorMessage={getFieldError(FORM_VALUE_ENUM.DESIRED_CURRENCY)}
              error={isFieldError(FORM_VALUE_ENUM.DESIRED_CURRENCY)}
              options={currencyOptions}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              isMulti
              placeholder="OFFICE.CREATE.FORM.DESIRED_CURRENCY"
              customComponents={{ MultiValueContainer: multiValueContainer }}
            />

            <DoubleContainerElem>
              <ButtonStyled
                type="add"
                tid="OFFICE.CREATE.ADD.MANAGER"
                iconRight={addIcon}
                iconSize="very_small"
                onClick={formik.handleSubmit}
              />
              <ButtonStyled
                type="add"
                tid="OFFICE.CREATE.ADD.ADMIN"
                iconRight={addIcon}
                iconSize="very_small"
                onClick={formik.handleSubmit}
              />
            </DoubleContainerElem>

            <ButtonElem
              type="button"
              tid="OFFICE.CREATE.BUTTON.CREATE"
              disabled={isSubmitDisabled()}
              onClick={formik.handleSubmit}
            />

            {isError && <AlertActionElem text={i18n.t(`${errorMessage}`)} />}
            {isSuccess && <AlertActionElem type="success" tid="Success" />}
          </GridElem>
        </ContentContainerElem>
      </FormElem>
    </>
  );
};

const ButtonStyled = styled(ButtonElem)`
  & > div > span {
    font-weight: 500 !important;
  }
`;
