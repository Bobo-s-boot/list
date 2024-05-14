import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import Select, { DropdownIndicatorProps, components } from 'react-select';

import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
  SIZE_FONT_DATA,
  SIZE_FONT_ENUM,
  SIZE_FONT_WEIGHT_DATA,
  SIZE_FONT_WEIGHT_ENUM,
} from '../../theme/size';
import { COLOR_ENUM } from '../../theme/color';
import { Spacing } from '../../theme';
import { PROPS_TYPE } from './constant';
import { TextElem } from '../text';
import { i18n } from '../../lib/lang';
import { VALUE_OPACITY_DATA, VALUE_OPACITY_ENUM } from '../../theme/value';
import arrowIcon from '../../asset/svg/common/selectArrow.svg';
import checkIcon from '../../asset/svg/common/selectCheck.svg';
import { ReactComponent as IndicatorIcon } from '../../asset/svg/common/selectIndicator.svg';

export const Elem: React.FC<PROPS_TYPE> = ({
  placeholder,
  onChange,
  defaultValue,
  title,
  options,
  name,
  value,
  error,
  errorMessage,
  noOptionsMessage,
  dynamic,
  onInputChange,
  textOnly = false,
  customComponents = {},
  className,
  isDisabled = undefined,
  isMulti = false,
  isRtl = false,
  closeMenuOnSelect = true,
  hideSelectedOptions = false,
  formatGroupLabel,
  maxWidth = '356px',
}) => {
  const refSelect = useRef<any>();

  const handleChange = (e: any) => {
    onChange(name, e);
  };
  const noOptionsMessageFn = (inputValue: string) => {
    return !inputValue ? 'Почніть вводити' : 'Нічого не знайдено';
  };

  const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <IndicatorIcon />
      </components.DropdownIndicator>
    );
  };

  return (
    <Container className={className}>
      {title && (
        <TextElem
          size="input"
          type="medium"
          tid={title}
          color="textSecondary"
        />
      )}
      <CustomSelect
        value={value}
        classNamePrefix="Select"
        options={options}
        placeholder={placeholder && i18n.t(placeholder)}
        onChange={handleChange}
        name={name}
        isSearchable={dynamic || false}
        noOptionsMessage={({ inputValue }) =>
          noOptionsMessage ? noOptionsMessage : noOptionsMessageFn(inputValue)
        }
        onInputChange={onInputChange}
        menuPlacement="auto"
        textOnly={textOnly}
        defaultValue={defaultValue || 'select'}
        closeMenuOnSelect={closeMenuOnSelect}
        isDisabled={isDisabled}
        isMulti={isMulti}
        isRtl={isRtl}
        hideSelectedOptions={hideSelectedOptions}
        formatGroupLabel={formatGroupLabel}
        ref={refSelect}
        components={{
          ...customComponents,
          DropdownIndicator,
        }}
        maxWidth={maxWidth}
      />

      {(error || errorMessage) && (
        <>
          <TextElem size="alert" color="error">
            {errorMessage}
          </TextElem>
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-gap: ${Spacing(3)};

  width: 100%;
`;

const CustomSelect = styled(Select)<{
  textOnly: boolean;
  isDisabled: true | undefined;
  maxWidth: string;
}>`
  transition: all 0.2s;

  .Select__clear-indicator {
    display: none !important;
  }

  .Select__multi-value {
    background-color: transparent;
  }

  .Select__multi-value:not(:nth-last-child(2)) ::after {
    background-color: transparent;

    content: ',';
  }

  .Select__multi-value__remove {
    display: none;
  }

  :hover {
    .Select__value-container--is-multi {
      color: ${({ theme }) => theme[COLOR_ENUM.TEXT_SECONDARY]};
    }

    .Select__placeholder {
      color: ${({ theme }) => theme[COLOR_ENUM.TEXT_SECONDARY]};
    }
  }

  .Select__value-container--is-multi {
    text-overflow: ellipsis;
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_PRIMARY]};

    ${({ maxWidth }) => {
      if (maxWidth) {
        return css`
          max-width: calc(${maxWidth} - 40px);
        `;
      }
    }}

    font-size:14px !important;
    font-weight: 400;
    /* height: 1.4em; */
    max-height: 16px;

    white-space: nowrap;
    overflow: hidden;
    display: initial;
  }

  #react-select-5-input {
    display: none;
  }

  & .Select__control {
    border-radius: ${SIZE_BORDER_RADIUS_DATA[
      SIZE_BORDER_RADIUS_ENUM.DEFAULT
    ]}px;
    max-height: 53px;

    cursor: pointer;

    padding: 18px ${Spacing(5)};
    width: 100%;

    box-shadow: none;

    border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER_DEFAULT]};

    background: ${({ theme }) => theme[COLOR_ENUM.INPUT]};

    &:hover {
      border-color: ${({ theme }) => theme[COLOR_ENUM.BORDER_DEFAULT]};

      .Select__single-value {
        color: ${({ theme }) => theme[COLOR_ENUM.SELECT_TEXT_HOVER]} !important;
      }
    }
  }
  & .Select__control--is-focused {
    background: ${({ theme }) => theme[COLOR_ENUM.INPUT_ACTIVE]};
  }
  & .Select__control--menu-is-open {
    & .Select__indicator.Select__dropdown-indicator {
      transform: rotate(180deg);
    }
    & .Select__placeholder {
      color: ${({ theme }) => theme[COLOR_ENUM.SELECT_TEXT_PLACEHOLDER]};
    }

    border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px
      ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px 0px 0px;
    border-bottom: transparent;
  }
  & .Select__value-container {
    /* height: 1em; */
    padding: 0;
  }

  & .Select__input-container {
    margin: 0;
    padding: 0;
    font-weight: ${SIZE_FONT_WEIGHT_DATA[SIZE_FONT_WEIGHT_ENUM.REGULAR]};
    color: ${({ theme }) => theme[COLOR_ENUM.SELECT_TEXT_ACTIVE]} !important;
    font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.INPUT]}px;
  }
  & .Select__single-value {
    color: ${({ theme }) => theme[COLOR_ENUM.SELECT_TEXT_DEFAULT]};
    :hover {
      color: ${({ theme }) => theme[COLOR_ENUM.SELECT_TEXT_HOVER]} !important;
    }
    font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.INPUT]}px;
  }
  & .Select__placeholder {
    margin: 0;
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_PRIMARY]};
    font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.INPUT]}px;
    font-weight: ${SIZE_FONT_WEIGHT_DATA[SIZE_FONT_WEIGHT_ENUM.MEDIUM]};
  }
  & .Select__indicator-separator {
    display: none;
  }
  & .Select__indicator.Select__dropdown-indicator {
    /* width: 17px; */
    color: #000;
    padding: 0;
    transition: all 0.2s;
    /* margin-top: ${Spacing(2)}; */
    align-self: center !important;
  }
  & .Select__menu {
    border-radius: 0px 0px
      ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px
      ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
    margin: 0;

    background-color: ${({ theme }) => theme[COLOR_ENUM.INPUT_ACTIVE]};
    border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER]};
    box-shadow: none;
    z-index: 3;
  }

  & .Select__menu-list {
    padding: 0;

    border-radius: 0px 0px
      ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px
      ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
    background-color: ${({ theme }) => theme[COLOR_ENUM.INPUT_ACTIVE]};
    & :last-child {
      border-color: transparent;
    }
  }
  & .Select__menu-notice {
    text-align: left;
  }
  & .Select__option {
    cursor: pointer;
    position: relative;
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_FOURTH]};
    border-bottom: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER]};
    font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.INPUT]}px;
    padding: ${Spacing(4)};
    height: 53;
  }
  & .Select__option:hover {
    background-color: ${({ theme }) => theme[COLOR_ENUM.BORDER]};
  }
  & .Select__option--is-selected {
    color: ${({ theme }) => theme[COLOR_ENUM.DEFAULT]};
    background-color: transparent;
    position: relative;
  }

  & .Select__menu-list--is-multi > .Select__option::after {
    content: '';
    width: 16px !important;
    height: 16px !important;
    background: url(${checkIcon});
    display: block;
    position: absolute;
    right: 16px;
    top: 16px;
  }

  & .Select__menu-list--is-multi > .Select__option--is-selected::after {
    background: url(${arrowIcon});
  }

  & .Select__option--is-focused {
    background-color: transparent;
  }

  ${({ textOnly }) => {
    if (textOnly) {
      return css`
        & .Select__control {
          background-color: transparent;
          padding-top: 0;
          padding-bottom: 0;
          height: 53px;
        }
        & .Select__menu {
          border-radius: ${SIZE_BORDER_RADIUS_DATA[
            SIZE_BORDER_RADIUS_ENUM.DEFAULT
          ]}px;
          padding-top: 0;
          right: 0;
          width: 100%;
          min-width: fit-content;
          background: ${({ theme }) => theme[COLOR_ENUM.INPUT_ACTIVE]};
        }
        & .Select__menu-list {
          border-radius: ${SIZE_BORDER_RADIUS_DATA[
            SIZE_BORDER_RADIUS_ENUM.DEFAULT
          ]}px;
          background: ${({ theme }) => theme[COLOR_ENUM.INPUT_ACTIVE]};
        }
      `;
    }
  }}
  ${({ isDisabled }) => {
    if (isDisabled) {
      return css`
        & .Select__control {
          opacity: ${VALUE_OPACITY_DATA[VALUE_OPACITY_ENUM.DEFAULT]};
        }
      `;
    }
  }}
`;
const Label = styled.div`
  padding-left: ${Spacing(2.5)};
`;
