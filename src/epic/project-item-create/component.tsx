import React, { useState } from 'react';
import styled from 'styled-components';
import { FormikValues } from 'formik';

import { FORM_VALUE_ENUM } from './constant';

import { GridElem } from '../../common/grid';
import { FieldTextElem } from '../../common/field-text';
import { ButtonElem } from '../../common/button';
import { LoaderElem } from '../../common/loader';
import { AlertActionElem } from '../../common/alert-action';
import { FormElem } from '../../common/form';
import { i18n } from '../../lib/lang';

import { TextElem } from '../../common/text';
import { DoubleContainerElem } from '../../common/double-container';
import { Spacing } from '../../theme';
import { ContentContainerElem } from '../../common/content-container';
import addIcon from '../../asset/svg/common/add-small.svg';
import { COLOR_ENUM } from '../../theme/color';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';

import { ReactComponent as AddIconLarge } from '../../asset/svg/common/add.svg';
import { ReactComponent as CloseIcon } from '../../asset/svg/common/close.svg';

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
  const [formVisible, setFormVisible] = useState(false);
  return (
    <>
      {formVisible ? (
        <FormElem onSubmit={formik.handleSubmit}>
          {isLoading && <LoaderElem />}
          <ContentContainerElem>
            <GridElem spacing={5}>
              <TitleContainer>
                <TextElem
                  tid="PROJECT.CREATE.TITLE"
                  type="semi-bold"
                  size="main"
                />
                <CloseIcon
                  onClick={() => setFormVisible(false)}
                  style={{ cursor: 'pointer' }}
                />
              </TitleContainer>
              <DoubleContainerElem>
                <FieldTextElem
                  name={FORM_VALUE_ENUM.NAME}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  title="PROJECT.CREATE.FORM.NAME"
                  value={getFieldValue(FORM_VALUE_ENUM.NAME)}
                  errorMessage={getFieldError(FORM_VALUE_ENUM.NAME)}
                  error={isFieldError(FORM_VALUE_ENUM.NAME)}
                />

                <ButtonStyled
                  type="button"
                  tid="PROJECT.CREATE.BUTTON"
                  fill="solid"
                  disabled={isSubmitDisabled()}
                  iconRight={addIcon}
                  iconSize="very_small"
                  onClick={formik.handleSubmit}
                />
              </DoubleContainerElem>

              {isError && <AlertActionElem text={i18n.t(`${errorMessage}`)} />}
              {isSuccess && <AlertActionElem type="success" tid="Success" />}
            </GridElem>
          </ContentContainerElem>
        </FormElem>
      ) : (
        <AddContainer onClick={() => setFormVisible(true)}>
          <TextElem tid="PROJECT.CREATE.ADD" type="medium" size="main" />
          <AddIconLarge />
        </AddContainer>
      )}
    </>
  );
};

const ButtonStyled = styled(ButtonElem)`
  margin-top: 29px;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddContainer = styled(TitleContainer)<{ disabled?: boolean }>`
  padding: ${Spacing(5)};
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme[COLOR_ENUM.BORDER]};
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.CARD]}px;
  opacity: ${({ disabled }) => disabled && '0.4'};
  :hover {
    opacity: 0.8;
  }
`;

const Icon = styled.img`
  cursor: pointer;
`;
