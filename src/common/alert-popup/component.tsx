import React, { ReactNode } from 'react';
import { IonAlert, IonButton } from '@ionic/react';
import styled from 'styled-components';
import { i18n } from '../../lib/lang';

import './style.css';

export const Component: React.FC<{
  children?: ReactNode;
  open: boolean;
  handleAction: Function;
  handleClickOpen: Function;
  handleClose: Function;
  message: string;
  titleTid?: any;
  titleValue?: object;
  infoTid?: any;
  infoValue?: object;
}> = ({
  children,
  open,
  handleAction,
  handleClickOpen,
  handleClose,
  message,
  titleTid,
  titleValue,
  infoTid,
  infoValue,
}) => {
  return (
    <>
      <div onClick={() => handleClickOpen()}>{children}</div>
      <IonAlert
        isOpen={open}
        onDidDismiss={() => handleClose()}
        header={i18n.t(titleTid, titleValue)}
        cssClass="custom-alert"
        subHeader={i18n.t(infoTid, infoValue)}
        buttons={[
          {
            text: `${i18n.t('COMMON.POPUP.BUTTON.CONFIRM')}`,
            role: 'confirm',
            handler: () => {
              handleAction();
            },
          },
          {
            text: `${i18n.t('COMMON.POPUP.BUTTON.CANCEL')}`,
            role: 'cancel',
            handler: () => {
              handleClose();
            },
          },
        ]}
      />
    </>
  );
};
