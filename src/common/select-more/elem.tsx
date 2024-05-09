import React from 'react';
import { components } from 'react-select';
import styled from 'styled-components';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';
import MoreIcon from '../../asset/svg/common/more.svg';
import MoreIconDark from '../../asset/svg/common/more.svg';

import { SelectElem } from '../select';

import { Spacing } from '../../theme';

import { COLOR_ENUM } from '../../theme/color';
import { PROPS_TYPE } from './constant';
import { useSelector } from '../../lib/store';
import { THEME_MODULE_NAME } from '../../data/theme';
import { THEME_ENUM } from '../../data/theme/constant';

export const Elem: React.FC<PROPS_TYPE> = ({ ...props }) => {
  const { theme } = useSelector((s: any) => ({
    theme: s[THEME_MODULE_NAME],
  }));
  const DropdownIndicator = (props: any) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src={theme.type === THEME_ENUM.LIGHT ? MoreIcon : MoreIconDark} />
      </components.DropdownIndicator>
    );
  };
  return (
    <Select
      {...props}
      onChange={props.onChange}
      customComponents={{ DropdownIndicator: DropdownIndicator }}
    />
  );
};

const Select = styled(SelectElem)`
  & .Select__value-container {
    display: none;
  }
  & .Select__indicator {
    margin: 0 !important;
    display: flex;
    justify-content: center;
    width: 24px !important;
    height: 24px;
  }

  & .Select__control--menu-is-open {
    & .Select__indicator.Select__dropdown-indicator {
      transform: none;
    }
  }
  & .Select__option--is-selected {
    background-color: transparent !important;
  }
  & .Select__option--is-focused {
    background-color: transparent;
    cursor: pointer;
  }
  transition: all 0.2s;

  & .Select__option:hover {
    background-color: ${({ theme }) => theme[COLOR_ENUM.SELECT_MENU_DIVIDER]};
  }
  & .Select__menu {
    border-radius: ${SIZE_BORDER_RADIUS_DATA[
      SIZE_BORDER_RADIUS_ENUM.DEFAULT
    ]}px;
    padding-top: 0;
    width: max-content;
    top: calc(100% + ${Spacing(3)});
    right: 0;
  }
  & .Select__menu-list {
    border-radius: ${SIZE_BORDER_RADIUS_DATA[
      SIZE_BORDER_RADIUS_ENUM.DEFAULT
    ]}px;
  }
  & .Select__control {
    width: fit-content;
    background: transparent;
    padding: 0;
    min-height: fit-content;
    cursor: pointer;
  }
`;
