import React from 'react';
import { IonModal } from '@ionic/react';
import styled, { css } from 'styled-components';

import { Spacing } from '../../theme';
import { SIZE_LAYOUT_DATA, SIZE_LAYOUT_ENUM } from '../../theme/size';
import { COLOR_ENUM } from '../../theme/color';

import { PROPS_TYPE } from './constant';

export const Elem: React.FC<PROPS_TYPE> = ({
  open,
  onClose,
  children,
  closeAction,
  className,
}) => {
  const onCloseAction = () => {
    onClose();
    closeAction && closeAction();
  };
  const handleClose = () => onCloseAction();

  return (
    <Modal
      isOpen={open}
      // initialBreakpoint={1}
      // breakpoints={[0, 1]}
      // handleBehavior="cycle"
      onDidDismiss={handleClose}
      trigger="open-modal"
      className={className}
    >
      {children}
    </Modal>
  );
};

const Modal = styled(IonModal)<{ minHeight?: number }>`
  pointer-events: none;
  --height: auto;
  ${({ minHeight }) => css`
    min-height: ${minHeight}px;
  `}
  --backdrop-opacity:0;
  --box-shadow: none;

  background: rgba(20, 18, 26, 0.8);

  ::part(content) {
    background-color: ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_SECONDARY]};
    max-width: ${SIZE_LAYOUT_DATA[SIZE_LAYOUT_ENUM.SMALL]}px;
    border-radius: 16px;
    top: calc((50% - 200px) / 2);
    width: 450px;
    left: calc((100% - 260px) / 2);
  }
  & > div {
    margin: auto;
    max-width: ${SIZE_LAYOUT_DATA[SIZE_LAYOUT_ENUM.SMALL]}px;
    padding: ${Spacing(6)} ${Spacing(4)};
  }
  &.modal-handle::before {
    display: none;
    content: none;
  }
`;
