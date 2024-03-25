import React, { useState } from 'react';

import styled from 'styled-components';
import { Spacing } from '../../theme';

import { ToggleElem } from '../../common/toggle';

export const Component: React.FC<{
  active: boolean;
  handleClick: Function;
  isSystem: boolean;
}> = ({ handleClick, active, isSystem }) => {
  return (
    <ToggleElem
      checked={active}
      handleClick={handleClick}
      tid={
        active
          ? 'NAVIGATION.TAB_APP.THEME_DARK'
          : 'NAVIGATION.TAB_APP.THEME_LIGHT'
      }
    />
  );
};
