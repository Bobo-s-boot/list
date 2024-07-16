import React from 'react';

import { FormikValues } from 'formik';

import { GridElem } from '../../common/grid';
import { FieldTextElem } from '../../common/field-text';
import { ButtonElem } from '../../common/button';
import { LoaderElem } from '../../common/loader';
import { AlertActionElem } from '../../common/alert-action';
import { FormElem } from '../../common/form';
import styled from 'styled-components';
import { Spacing } from '../../theme';
import { i18n } from '../../lib/lang';
import { FORM_VALUE_ENUM } from './constant';
import { TextElem } from '../../common/text';
import { DoubleContainerElem } from '../../common/double-container';
import closeIcon from '../../asset/svg/common/close.svg';

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
  close: Function;
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
  close,
}) => {
    return (
      <FormElem onSubmit={formik.handleSubmit}>
        {isLoading && <LoaderElem />}

        <GridElem spacing={5}>
          <TitleContainer>
            <TextElem tid="PROJECT.UPDATE.TITLE" type="semi-bold" size="main" />
            <Icon src={closeIcon} onClick={() => close()} />
          </TitleContainer>
          <ButtonContainerStyled>
            <FieldTextElem
              name={FORM_VALUE_ENUM.NAME}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              title="PROJECT.UPDATE.FORM.NAME"
              value={getFieldValue(FORM_VALUE_ENUM.NAME)}
              errorMessage={getFieldError(FORM_VALUE_ENUM.NAME)}
              error={isFieldError(FORM_VALUE_ENUM.NAME)}
            />

            <ButtonElem
              type="button"
              tid="PROJECT.UPDATE.BUTTON"
              fill="solid"
              disabled={isSubmitDisabled()}
              color="success"
            />
          </ButtonContainerStyled>

          {isError && <AlertActionElem text={i18n.t(`${errorMessage}`)} />}
          {isSuccess && <AlertActionElem type="success" tid="Success" />}
        </GridElem>
      </FormElem>
    );
  };

const ButtonContainerStyled = styled(DoubleContainerElem)`
  display: grid;
  align-items: end;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.img`
  cursor: pointer;
`;
