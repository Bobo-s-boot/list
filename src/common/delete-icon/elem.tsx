import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from '../../asset/svg/delete/delete.svg';
import { LoaderIconElem } from '../../common/loader-icon';
import { ModalConfirmElem } from '../../common/modal-confirm';
import { THEME_MODULE_NAME } from '../../data/theme';
import { useSelector } from '../../lib/store';
import { THEME_ENUM } from '../../data/theme/constant';
import { Spacing } from '../../theme';
import { TextElem } from '../text';
import { LoaderElem } from '../loader';
import { COLOR_ENUM } from '../../theme/color';

export const Elem: React.FC<{
  onClick: Function;
  isLoading?: boolean;
  className?: string;
  titleTid?: string;
  titleValue?: string;
  buttonDisabled?: boolean;
  style?: Object;
}> = ({
  children,
  onClick,
  isLoading,
  className,
  titleTid,
  titleValue,
  buttonDisabled = true,
  style = {},
}) => {
  const { theme } = useSelector((s: any) => ({
    theme: s[THEME_MODULE_NAME],
  }));

  return (
    <Container className={className} style={style}>
      {isLoading ? (
        <LoaderElem />
      ) : (
        <ModalConfirmElem
          action={onClick}
          titleTid={titleTid}
          titleValue={{ value: titleValue }}
          type="delete"
        >
          {children ? (
            children
          ) : (
            <Button>
              <DeleteIcon />
              <TextElem tid="COMMON.MODAL.BUTTON.DELETE" color="error" />
            </Button>
          )}
        </ModalConfirmElem>
      )}
    </Container>
  );
};
const Container = styled.div``;

const Button = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${Spacing(2)};
  padding: ${Spacing(4)};
  transition: all 0.2s;

  :hover {
    background: ${({ theme }) => theme[COLOR_ENUM.BORDER]};
  }
`;
