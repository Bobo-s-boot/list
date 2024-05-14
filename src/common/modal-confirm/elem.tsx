import React, { ReactNode, useEffect, useState } from 'react';
import { i18n } from '../../lib/lang';
import { ButtonElem } from '../button';
import {
  BUTTON_COLOR_TYPE_DATA,
  MODAL_TYPE_DATA,
  MODAL_TYPE_ENUM,
  PROPS_TYPE,
} from './constant';
import { ModalElem } from '../modal';
import styled from 'styled-components';
import deleteIcon from '../../asset/svg/button/delete.svg';
import { Spacing } from '../../theme';
import { GridElem } from '../grid';
import { TextElem } from '../text';
import closeIcon from '../../asset/svg/common/close.svg';

export const Elem: React.FC<PROPS_TYPE> = ({
  children,
  action,
  open,
  onClose,
  closeAction,
  type = 'confirm',
  ref,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    onClose !== undefined ? onClose() : setOpenModal(false);
  };

  const handleAction = (e: any) => {
    action && action();
  };

  useEffect(() => {
    if (open === true) {
      setOpenModal(true);
    }
  }, [open]);

  return (
    <>
      <Container onClick={handleClickOpen}>{children}</Container>
      <ModalElem
        open={openModal}
        onClose={handleClose}
        closeAction={closeAction}
        ref={ref}
      >
        <GridElem spacing={5}>
          <TitleContainer>
            <TextElem
              tid="COMMON.MODAL.TITLE.DELETE"
              type="semi-bold"
              size="main"
            />
            <Icon src={closeIcon} onClick={handleClose} />
          </TitleContainer>

          <GridElem spacing={2}>
            <TextElem tid="COMMON.MODAL.TEXT.DELETE.1" type="medium" />
            <TextElem tid="COMMON.MODAL.TEXT.DELETE.2" type="medium" />
          </GridElem>

          <ButtonContainer>
            <ButtonElem
              onClick={handleClose}
              color="border"
              tid="COMMON.MODAL.BUTTON.CANCEL"
            />
            <ButtonElem
              tid={MODAL_TYPE_DATA[type]}
              onClick={handleAction}
              color={BUTTON_COLOR_TYPE_DATA[type]}
              fill="solid"
              iconRight={deleteIcon}
            />
          </ButtonContainer>
        </GridElem>
      </ModalElem>
    </>
  );
};
const Container = styled.div`
  display: flex;
`;

const Icon = styled.img`
  cursor: pointer;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: grid;
  gap: ${Spacing(3)};
  grid-template-columns: 1fr 1fr;
`;
