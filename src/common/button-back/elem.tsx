import React from 'react';
import { useHistory } from 'react-router';
import arrowBack from '../../asset/svg/common/arrowBack.svg';

import { ButtonElem } from '../button';

export const Elem: React.FC<{ path?: string | boolean }> = ({ path }) => {
  const history = useHistory();

  const handleAction = () => {
    if (typeof path === 'string') {
      history.push(`${path}`);
    }

    if (path === true) {
      history.go(-1);
    }
  };

  return (
    <ButtonElem onClick={handleAction} iconLeft={arrowBack} iconSize="large" />
  );
};
