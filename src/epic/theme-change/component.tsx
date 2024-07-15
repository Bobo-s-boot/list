import React from 'react';

import { ToggleElem } from '../../common/toggle';

export const Component: React.FC<{
  active: boolean;
  handleClick: Function;
  isSystem: boolean;
}> = ({ handleClick, active, isSystem }) => {
  return (
    <>
      <ToggleElem
        gap={3}
        checked={active}
        handleClick={handleClick}
        tid={
          active
            ? 'NAVIGATION.TAB_APP.THEME_DARK'
            : 'NAVIGATION.TAB_APP.THEME_LIGHT'
        }
      />
    </>
  );
};
