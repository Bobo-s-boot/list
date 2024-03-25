import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { COLOR_ENUM } from '../../theme/color';
import { Spacing } from '../../theme';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
  SIZE_FONT_DATA,
  SIZE_FONT_ENUM,
  SIZE_FONT_WEIGHT_DATA,
  SIZE_FONT_WEIGHT_ENUM,
} from '../../theme/size';
import { TextElem } from '../text';
import { PROPS_TYPE } from './constant';
import { i18n } from '../../lib/lang';
import CalendarIcon from '../../asset/svg/common/calendar.svg';

import PhoneInput from 'react-phone-input-2';

export const Elem: React.FC<PROPS_TYPE> = ({
  title,
  error,
  errorMessage,
  onChange,
  onBlur,
  value,
  name,
  type,
  disabled,
  icon,
  placeholder,
  className,
  maxLength,
  min,
  max,
  errorContainer = true,
  autoFocus = false,
}) => {
  const refIcon = useRef<HTMLDivElement>(null);
  const handleChange = (e: any) => {
    if (type === 'phone') {
      if (e && onChange && e.length < 14) {
        onChange({ target: { name: name, value: `+${e}` } });
      }
    } else {
      if (!e.target) e.target = {};
      e.target.name = name;
      e.target.value = maxLength
        ? e.target.value.substr(0, maxLength)
        : e.target.value;

      if (onChange) {
        onChange(e);
      }
    }
  };

  const handleBlur = (e: any) => {
    if (!e.target) e.target = {};

    e.target.name = name;
    e.target.value = e.target.value;

    if (onBlur) {
      onBlur(e);
    }
  };

  const iconSize = refIcon?.current?.clientWidth || 40;
  if (disabled) {
    return (
      <Container>
        {title && <TextElem tid={title} color="textPrimary" />}
        <FakeInput>
          <TextElem tid={value} />
          <Icon ref={refIcon}>{icon}</Icon>
        </FakeInput>
      </Container>
    );
  } else {
    return (
      <Container className={className}>
        {title && <TextElem tid={title} color="textPrimary" />}
        <Content>
          {type === 'phone' ? (
            <PhoneInputCustom
              country={'ua'}
              countryCodeEditable={false}
              onChange={handleChange}
              onBlur={handleBlur}
              value={value}
              inputProps={{
                name: name,
              }}
            />
          ) : (
            <>
              <CustomInput
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={error}
                type={type}
                value={value}
                // value={inputValue}
                iconSize={iconSize}
                placeholder={placeholder && i18n.t(placeholder)}
                className={className}
                maxLength={maxLength}
                min={min}
                max={max}
                autoFocus={autoFocus}
              />
              <div id="content" />
              <Icon ref={refIcon}>{icon}</Icon>
            </>
          )}
        </Content>
        {errorContainer && (
          <>
            {(error || errorMessage) && (
              <ErrorContainer className="errorContainer">
                <TextElem size="alert" color="error">
                  {errorMessage}
                </TextElem>
              </ErrorContainer>
            )}
          </>
        )}
      </Container>
    );
  }
};

const CustomInput = styled.input<{
  error?: boolean;
  onIonChange?: Function;
  type?: string;
  iconSize: number;
}>`
  cursor: pointer;
  height: 46px;
  :focus-visible {
    outline: none;
  }
  font-weight: ${SIZE_FONT_WEIGHT_DATA[SIZE_FONT_WEIGHT_ENUM.REGULAR]};

  padding-right: ${({ iconSize }) => iconSize}px;

  font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.INPUT]}px;
  line-height: 1em;
  text-align: start;
  color: ${({ theme }) => theme[COLOR_ENUM.TEXT_DEFAULT]};

  background: ${({ theme }) => theme[COLOR_ENUM.INPUT]};
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  width: 100%;
  /* border: none;
  outline: none; */

  transition: all 0.2s;

  border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER_DEFAULT]};

  &:hover {
    border-color: ${({ theme }) => theme[COLOR_ENUM.BORDER_HOVER]};
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_HOVER]};
  }

  &:focus-within {
    border-color: ${({ theme }) => theme[COLOR_ENUM.BORDER_ACTIVE]};
  }

  ::placeholder {
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_PLACEHOLDER]};
  }

  &:focus-within {
    background: ${({ theme }) => theme[COLOR_ENUM.TRANSPARENT]};
    border-color: ${({ theme }) => theme[COLOR_ENUM.ACTIVE]};
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_ACTIVE]};

    ::placeholder {
      display: none;
      color: ${({ theme }) => theme[COLOR_ENUM.TRANSPARENT]};
    }
  }
  padding: 0 ${Spacing(4)};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme[COLOR_ENUM.ERROR]} !important;
      color: ${({ theme }) => theme[COLOR_ENUM.ERROR]} !important;
    `}

  ::-webkit-calendar-picker-indicator {
    /* color: rgba(0, 0, 0, 0); */
    opacity: 1;
    display: block;
    background: url(${CalendarIcon}) no-repeat;
    width: 16px;
    height: 16px;
  }
`;

const PhoneInputCustom = styled(PhoneInput)<{}>`
  && div {
    display: none;
  }
  && input {
    :focus-visible {
      outline: none;
    }
    height: 46px;

    font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.INPUT]}px;
    line-height: 1em;
    text-align: start;
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_PRIMARY]};

    background: ${({ theme }) => theme[COLOR_ENUM.INPUT]};
    border-radius: ${SIZE_BORDER_RADIUS_DATA[
      SIZE_BORDER_RADIUS_ENUM.DEFAULT
    ]}px;
    width: 100%;
    border: none;
    outline: none;
    border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER_DEFAULT]};

    &:hover {
      border-color: ${({ theme }) => theme[COLOR_ENUM.BORDER_HOVER]};
      color: ${({ theme }) => theme[COLOR_ENUM.TEXT_HOVER]};
    }

    &:focus-within {
      border-color: ${({ theme }) => theme[COLOR_ENUM.BORDER_ACTIVE]};
    }

    ::placeholder {
      color: ${({ theme }) => theme[COLOR_ENUM.TEXT_PLACEHOLDER]};
    }

    &:focus-within {
      background: ${({ theme }) => theme[COLOR_ENUM.TRANSPARENT]};
      border-color: ${({ theme }) => theme[COLOR_ENUM.ACTIVE]};
      color: ${({ theme }) => theme[COLOR_ENUM.TEXT_ACTIVE]};

      ::placeholder {
        display: none;
        color: ${({ theme }) => theme[COLOR_ENUM.TRANSPARENT]};
      }
    }
  }
`;

const FakeInput = styled.div`
  padding: 0 ${Spacing(4)};
  position: relative;
  height: 46px;
  font-size: ${({ theme }) => theme[SIZE_FONT_ENUM.INPUT]}px;
  color: ${({ theme }) => theme[COLOR_ENUM.TEXT_DISABLED]};
  background: ${({ theme }) => theme[COLOR_ENUM.INPUT_DISABLED]};
  line-height: 1em;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER]};
  overflow: hidden;
  display: flex;
  align-items: center;
  && > span {
    width: calc(100% - 40px);
    display: block;
    overflow: hidden;
    white-space: nowrap !important;
    text-overflow: ellipsis !important;
  }
`;

const ErrorMessage = styled.div`
  display: flex;
  gap: 10px;
`;

const Content = styled.div`
  position: relative;
`;

const ErrorContainer = styled.div`
  height: 13.19px;
`;

const Container = styled.div`
  display: grid;
  grid-gap: ${Spacing(2)};
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme[COLOR_ENUM.TEXT_PRIMARY]};
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme[COLOR_ENUM.INPUT]}
      inset;
  }
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: max-content;
  box-sizing: content-box;
  z-index: 2;
`;
