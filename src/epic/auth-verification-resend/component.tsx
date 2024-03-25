import React from 'react';
import { ButtonElem } from '../../common/button';

export const Component: React.FC<{
  onButtonAction: Function;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  active: boolean;
}> = ({ onButtonAction, isLoading, isError, errorMessage, active }) => {
  return (
    <ButtonElem
      tid="AUTH.RECOVERY_CONFIRM.RESEND_CODE_BUTTON"
      fill="outline"
      color={active ? 'textSecondary' : 'disabled'}
      onClick={onButtonAction}
      disabled={!active}
    />
  );
};
