import React from 'react';
import { Component } from './component';
import { SIZE_LAYOUT_TYPE } from '../../theme/size';

export const Container: React.FC<{
  path?: string | boolean;
  title?: any;
  tvalue?: object | undefined;
  icon?: string;
  size: SIZE_LAYOUT_TYPE;
}> = ({ path, title, tvalue, icon, size }) => {
  return (
    <Component
      path={path}
      title={title}
      tvalue={tvalue}
      icon={icon}
      size={size}
    />
  );
};
