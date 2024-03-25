import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { IonIcon } from '@ionic/react';
import { ButtonElem } from '../button';
import { ModalActionElem } from '../modal-action';
import copyIcon from '../../asset/img/icon/copy.svg';
import copyIconDark from '../../asset/img/icon/copyDark.svg';
import { useSelector } from 'react-redux';
import { THEME_MODULE_NAME } from '../../data/theme';
import { THEME_ENUM } from '../../data/theme/constant';
import { TextElem } from '../text';

export const Elem: React.FC<{
  options: string[];
  handleCopy?: any;
}> = ({ options, handleCopy }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = (value: any) => {
    handleClose();
    setTimeout(() => {
      try {
        handleCopy(value);
      } catch (e) {
        alert(e);
      }
    }, 300);
  };

  const { theme } = useSelector((s: any) => ({
    theme: s[THEME_MODULE_NAME],
  }));

  return (
    <ModalActionElem
      onOpen={handleClickOpen}
      open={open}
      action={handleCopy}
      titleTid="COMMON.MODAL.COPY"
      onClose={handleClose}
      buttons={options.map((item) => (
        <Button
          color="divider"
          fill="outline"
          onClick={() => handleAction(item)}
        >
          <TextElem>{item}</TextElem>
        </Button>
      ))}
    >
      <Img
        icon={theme.type === THEME_ENUM.LIGHT ? copyIcon : copyIconDark}
        size={22}
      />
    </ModalActionElem>
  );
};
const Img = styled(IonIcon)<{ size?: any }>`
  ${({ size }) => css`
    height: ${size}px;
    width: ${size}px;
  `};
`;
const Button = styled(ButtonElem)`
  text-transform: none;
`;
