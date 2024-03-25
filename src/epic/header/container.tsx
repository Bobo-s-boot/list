import React from 'react';
import { THEME_MODULE_NAME } from '../../data/theme';
import { useSelector } from '../../lib/store';
import { Component } from './component';
import { COLOR_TYPE } from '../../theme/color';
import { SIZE_LAYOUT_TYPE } from '../../theme/size';

export const Container: React.FC<{
  path?: string | boolean;
  title?: any;
  icon?: string;
  iconLight?: string;
  iconDark?: string;
  button?: any;
  tvalue?: object | undefined;
  className?: string;
  light?: boolean;
  background?: COLOR_TYPE;
  size?: SIZE_LAYOUT_TYPE;
}> = ({
  path,
  title,
  icon,
  iconLight,
  iconDark,
  button,
  tvalue,
  className,
  light = false,
  background,
  size = 'small',
}) => {
  const { state } = useSelector((s: any) => ({
    state: s[THEME_MODULE_NAME],
  }));
  return (
    <Component
      path={path}
      title={title}
      icon={icon}
      theme={state.type}
      iconLight={iconLight}
      iconDark={iconDark}
      button={button}
      tvalue={tvalue}
      className={className}
      light={light}
      background={background}
      size={size}
    />
  );
};
