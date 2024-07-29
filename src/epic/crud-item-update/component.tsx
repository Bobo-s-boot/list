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
import { error } from 'console';

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
          {/* <TextElem size="medium" type="bold" tid={name} /> */}
          <TabElem tabList={mockData} />

          <FlexContainer>
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
              name={FORM_VALUE_ENUM.PRICE}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              title="OFFICE.CREATE.FORM.PRICE"
              value={getFieldValue(FORM_VALUE_ENUM.PRICE)}
              errorMessage={getFieldError(FORM_VALUE_ENUM.PRICE)}
              error={isFieldError(FORM_VALUE_ENUM.PRICE)}
            />

            <FieldTextElem
              name={FORM_VALUE_ENUM.DESCRIPTION}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              title="OFFICE.CREATE.FORM.DESCRIPTION"
              value={getFieldValue(FORM_VALUE_ENUM.DESCRIPTION)}
              errorMessage={getFieldError(FORM_VALUE_ENUM.DESCRIPTION)}
              error={isFieldError(FORM_VALUE_ENUM.DESCRIPTION)}
            />
          </FlexContainer>
          {isError && <AlertActionElem text={i18n.t(`${errorMessage}`)} />}
          {isSuccess && <AlertActionElem type="success" tid="Success" />}
        </GridElem>
      </FormElem>
    </>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing(8)};
`;
