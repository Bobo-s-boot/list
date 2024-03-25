import React from 'react';
import { THEME_MODULE_NAME } from '../../data/theme';
import { activeSystem, changeThemeData } from '../../data/theme/action';
import { THEME_ENUM } from '../../data/theme/constant';
import { useDispatch, useSelector } from '../../lib/store';
import { Component } from './component';
import { THEME_CHANGE_OPTION, THEME_CHANGE_OPTION_TYPE } from './constant';
export const Container: React.FC = () => {
  const { state } = useSelector((s: any) => ({
    state: s[THEME_MODULE_NAME],
  }));
  const dispatch = useDispatch();

  const handleClick = () => {
    if (state?.type === THEME_ENUM.DARK)
      return dispatch(changeThemeData(THEME_ENUM.LIGHT));
    if (state?.type === THEME_ENUM.LIGHT)
      return dispatch(changeThemeData(THEME_ENUM.DARK));
  };

  return (
    <Component
      active={state?.type === THEME_ENUM.DARK}
      isSystem={state?.isSystem}
      handleClick={handleClick}
    />
  );
};
