import React from 'react';

import { FormikValues } from 'formik';

import { FORM_VALUE_ENUM } from './constant';

import { TextElem } from '../../common/text';
import { GridElem } from '../../common/grid';
import { FieldTextElem } from '../../common/field-text';
import { ButtonElem } from '../../common/button';
import { FormElem } from '../../common/form';
import { ResendComponent } from './frame/resend.component';
import { LayoutSectionElem } from '../../common/layout-section';
import styled from 'styled-components';

export const Component: React.FC<{
  formik: FormikValues;
  isFieldError: Function;
  getFieldError: Function;
  isSubmitDisabled: Function;
  getFieldValue: Function;
  email: string;
}> = ({
  formik,
  isFieldError,
  getFieldError,
  isSubmitDisabled,
  getFieldValue,
  email,
}) => {
  return (
    <LayoutSectionElem>
      <FormElem onSubmit={formik.handleSubmit}>
        <GridElem size="mod">
          <TitleContainer spacing={3}>
            <TextElem
              size="heading"
              type="bold"
              tid="AUTH.RECOVERY_CONFIRM.TITLE"
            />
            <TextElem
              color="textSecondary"
              tid="AUTH.RECOVERY_CONFIRM.DESCRIPTION"
            />
          </TitleContainer>
          <GridElem size="input">
            <FieldTextElem
              name={FORM_VALUE_ENUM.CODE}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              title="AUTH.RECOVERY_CONFIRM.CODE"
              value={getFieldValue(FORM_VALUE_ENUM.CODE)}
              errorMessage={getFieldError(FORM_VALUE_ENUM.CODE)}
              error={isFieldError(FORM_VALUE_ENUM.CODE)}
            />
          </GridElem>
          <ButtonElem
            disabled={isSubmitDisabled()}
            type="submit"
            tid="AUTH.RECOVERY_CONFIRM.BUTTON"
          />
        </GridElem>
      </FormElem>
      <ResendComponent email={email} />
    </LayoutSectionElem>
  );
};

const TitleContainer = styled(GridElem)`
  justify-items: center;
`;
