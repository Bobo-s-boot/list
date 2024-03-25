import React, { useState } from 'react';

import { Component } from './component';

export const Container: React.FC<{
  action?: Function;
  children?: any;
  disabled?: boolean;
  message: string;
  titleTid?: string;
  titleValue?: object;
  infoTid?: any;
  infoValue?: object;
}> = ({
  action,
  children,
  disabled,
  message,
  titleTid,
  titleValue,
  infoTid,
  infoValue,
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    if (disabled) return null;
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAction = () => {
    handleClose();
    action && action();
  };

  return (
    <Component
      children={children}
      open={open}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      handleAction={handleAction}
      titleTid={titleTid}
      titleValue={titleValue}
      infoTid={infoTid}
      infoValue={infoValue}
      message={message}
    />
  );
};
