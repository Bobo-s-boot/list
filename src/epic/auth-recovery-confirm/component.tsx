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
  phone: string;
}> = ({
  formik,
  isFieldError,
  getFieldError,
  isSubmitDisabled,
  getFieldValue,
  email,
  phone,
}) => {
  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <TitleContainer spacing={3}>
          <TextElem
            size="heading"
            type="bold"
            color="textSecondary"
            tid="AUTH.RECOVERY_CONFIRM.TITLE"
            isMulishFont
          />
          <div>
            <TextElem
              size="main"
              color="textDefault"
              type="medium"
              tid="AUTH.RECOVERY_CONFIRM.DESCRIPTION"
            />{' '}
            <TextElem
              size="main"
              color="textSecondary"
              type="bold"
              tid="AUTH.RECOVERY_CONFIRM.DESCRIPTION_PREFIX"
              tvalue={{ email: email || phone }}
            />
          </div>
        </TitleContainer>

        <GridStyled size="mod">
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
            <ResendComponent email={email} />
          </GridElem>
          <ButtonElem
            disabled={isSubmitDisabled()}
            type="submit"
            tid="AUTH.RECOVERY_CONFIRM.BUTTON"
          />
        </GridStyled>
      </Form>
    </>
  );
};

const GridStyled = styled(GridElem)`
  background-color: #ffffff;
  box-shadow: 0px 0px 50px 0px #24231e0d;
  padding: 50px 85px;
  gap: 40px;
  border-radius: 35px;
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
