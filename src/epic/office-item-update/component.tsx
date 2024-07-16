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
import { ContentContainerElem } from '../../common/content-container';
import { SelectElem } from '../../common/select';
import { FieldTimeInputElem } from '../../common/field-time-input';
import { FieldToggleElem } from '../../common/field-toggle';
import { daysOptions, currencyOptions } from '../office-item-create/constant';
import addIcon from '../../asset/svg/common/add-small.svg';
import { ToggleElem } from '../../common/toggle';
import { TextElem } from '../../common/text';
import { Spacing } from '../../theme';
import { TabElem } from '../../common/tab';

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

    function handleTimeRangeChange(_dates: any, dateStrings: any) {
      formik.setFieldValue(FORM_VALUE_ENUM.TIME, dateStrings);
    }

    function handleBreakRangeChange(_dates: any, dateStrings: any) {
      formik.setFieldValue(FORM_VALUE_ENUM.BREAK, dateStrings);
    }

    const mockData = [
      {
        tid: 'Settings',
        path: 'office/update',
        dynamicPath: '/dynamicPath1',
      },
      {
        tid: 'Sessions',
        path: '/settings',
        dynamicPath: '/dynamicPath2',
      },
      {
        tid: 'Profile',
        path: '/settings',
        dynamicPath: '/dynamicPath3',
      },
    ];

    return (
      <>
        <FormElem onSubmit={formik.handleSubmit}>
          {isLoading && <LoaderElem />}

          <GridElem spacing={4}>
            <TextElem size="medium" type="bold" tid={name} />
            <TabElem tabList={mockData} />

            <FlexContainer>
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
                  value={getFieldValue(FORM_VALUE_ENUM.DAYS)}
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
                <FieldTimeInputElem
                  fieldValue={getFieldValue(FORM_VALUE_ENUM.TIME)}
                  name={FORM_VALUE_ENUM.TIME}
                  onChange={handleTimeRangeChange}
                  title="OFFICE.CREATE.FORM.TIME"
                />

                <FieldTimeInputElem
                  fieldValue={getFieldValue(FORM_VALUE_ENUM.BREAK)}
                  name={FORM_VALUE_ENUM.BREAK}
                  onChange={handleBreakRangeChange}
                  title="OFFICE.CREATE.FORM.BREAK"
                />
              </DoubleContainerElem>
              <GridElem spacing={4}>
                <DoubleContainerElem>
                  <FieldToggleElem
                    name={FORM_VALUE_ENUM.ORDER_CURRENCY}
                    handleClick={formik.handleChange}
                    checked={getFieldValue(FORM_VALUE_ENUM.ORDER_CURRENCY)}
                    tid="OFFICE.CREATE.FORM.ORDER_CURRENCY"
                    placeholder="OFFICE.CREATE.FORM.ORDER_CURRENCY_PLACEHOLDER"
                  />
                  <FieldToggleElem
                    name={FORM_VALUE_ENUM.TRADE_CRYPTO}
                    handleClick={formik.handleChange}
                    checked={getFieldValue(FORM_VALUE_ENUM.TRADE_CRYPTO)}
                    tid="OFFICE.CREATE.FORM.TRADE_CRYPTO"
                    placeholder="OFFICE.CREATE.FORM.ORDER_CRYPTO_PLACEHOLDER"
                  />
                  <SelectElem
                    value={getFieldValue(FORM_VALUE_ENUM.DESIRED_CURRENCY)}
                    name={FORM_VALUE_ENUM.DESIRED_CURRENCY}
                    title="OFFICE.CREATE.FORM.DESIRED_CURRENCY"
                    onChange={onChangeSelect}
                    errorMessage={getFieldError(FORM_VALUE_ENUM.DESIRED_CURRENCY)}
                    error={isFieldError(FORM_VALUE_ENUM.DESIRED_CURRENCY)}
                    options={currencyOptions}
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    isMulti
                    customComponents={{
                      MultiValueContainer: multiValueContainer,
                    }}
                  />
                </DoubleContainerElem>
              </GridElem>

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
                <SubmitContainer>
                  <ButtonElem
                    type="button"
                    tid="OFFICE.UPDATE.BUTTON.UPDATE"
                    disabled={isSubmitDisabled()}
                    onClick={formik.handleSubmit}
                  />
                </SubmitContainer>
              </DoubleContainerElem>
            </FlexContainer>
            {isError && <AlertActionElem text={i18n.t(`${errorMessage}`)} />}
            {isSuccess && <AlertActionElem type="success" tid="Success" />}
          </GridElem>
        </FormElem>
      </>
    );
  };

const SubmitContainer = styled.div`
  display: flex;
  max-width: ${Spacing(121)};
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing(8)};
`;

const ButtonStyled = styled(ButtonElem)`
  & > div > span {
    font-weight: 500 !important;
  }
`;
