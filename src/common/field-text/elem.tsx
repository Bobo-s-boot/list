import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import PhoneInput from 'react-phone-input-2';

import { COLOR_DATA, COLOR_ENUM } from '../../theme/color';
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
import { VerificationCodeInputElem } from '../verification-code-input';

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
  const [isFocused, setIsFocused] = useState(false);
  const isSuccess = !!value && !error;

  const refIcon = useRef<HTMLDivElement>(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: any) => {
    setIsFocused(false);
    if (!e.target) e.target = {};
    e.target.name = name;
    e.target.value = e.target.value;
    if (onBlur) {
      onBlur(e);
    }
  };

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

  const iconSize = refIcon?.current?.clientWidth || 40;

  if (disabled) {
    return (
      <Container>
        {title && <TextElem tid={title} type="medium" color="textPrimary" />}
        <FakeInput>
          <TextElem
            color="textDisabled"
            tid={value || i18n.t(placeholder || '')}
          />
        </FakeInput>
      </Container>
    );
  } else {
    return (
      <Container className={className}>
        {title && (
          <TextElem
            tid={title}
            size="default"
            type="medium"
            color="textSecondary"
          />
        )}
        <Content>
          {type === 'phone' && (
            <PhoneInputCustom
              isSuccess={isSuccess}
              isFocused={isFocused}
              errorMessage={!!errorMessage}
              onFocus={handleFocus}
              onBlur={handleBlur}
              country={'ua'}
              countryCodeEditable={false}
              onChange={handleChange}
              value={value}
              inputProps={{
                name: name,
              }}
            />
          )}

          {type !== 'phone' && type !== 'code' && (
            <>
              <CustomInput
                isSuccess={isSuccess}
                isFocused={isFocused}
                errorMessage={!!errorMessage}
                onFocus={handleFocus}
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={error}
                type={type}
                value={value}
                iconSize={iconSize}
                placeholder={placeholder && i18n.t(placeholder)}
                className={className}
                maxLength={maxLength}
                min={min}
                max={max}
                autoFocus={autoFocus}
              />
              <div id="content" />
              <Icon ref={refIcon}>{icon && icon}</Icon>
            </>
          )}

          {type === 'code' && (
            <VerificationCodeInputElem
              length={maxLength}
              loading={false}
              onComplete={(code: string) =>
                handleChange({ target: { name, value: code } })
              }
            />
          )}

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
        </Content>
      </Container>
    );
  }
};

const CustomInput = styled.input<{
  error?: boolean;
  onIonChange?: Function;
  type?: string;
  iconSize: number;
  isSuccess: boolean;
  isFocused: boolean;
  errorMessage: boolean;
}>`
  font-family: 'Helvetica', sans-serif;
  cursor: pointer;
  :focus-visible {
    outline: none;
  }
  font-weight: ${SIZE_FONT_WEIGHT_DATA[SIZE_FONT_WEIGHT_ENUM.MEDIUM]};

  padding: 16px 20px;
  min-height: 53px;

  padding-right: ${({ iconSize }) => iconSize}px;

  font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.INPUT]}px;
  line-height: 1em;
  text-align: start;
  color: ${({ theme }) => theme[COLOR_ENUM.TEXT_DEFAULT]};
  background-color: ${({ theme }) => theme[COLOR_ENUM.WHITE]};

  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  width: 100%;
  transition: all 0.2s;
  border: 1px solid
    ${({ theme, isSuccess, isFocused, errorMessage, value }) =>
    errorMessage
      ? theme[COLOR_ENUM.ERROR]
      : isFocused
        ? theme[COLOR_ENUM.BORDER]
        : !value
          ? theme[COLOR_ENUM.BORDER_DEFAULT]
          : isSuccess
            ? theme[COLOR_ENUM.BORDER_DEFAULT]
            : theme[COLOR_ENUM.BORDER]};
            

  &:hover {
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_ACTIVE]};

    ::placeholder {
      display: none;
      color: ${({ theme }) => theme[COLOR_ENUM.TEXT_ACTIVE]} !important;
    }
  }

  ::placeholder {
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_PLACEHOLDER]};
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme[COLOR_ENUM.ERROR]} !important;
    `}

  ::-webkit-calendar-picker-indicator {
    opacity: 1;
    display: block;
    background: url(${CalendarIcon}) no-repeat;
    width: 16px;
    height: 16px;
  }
`;

const FakeInput = styled.div`
  padding: 16px 20px;
  position: relative;
  height: 53px;
  font-size: ${({ theme }) => theme[SIZE_FONT_ENUM.INPUT]}px;
  font-weight: ${SIZE_FONT_WEIGHT_DATA[SIZE_FONT_WEIGHT_ENUM.MEDIUM]};
  color: ${({ theme }) => theme[COLOR_ENUM.TEXT_DISABLED]};
  background: ${({ theme }) => theme[COLOR_ENUM.INPUT_DISABLED]};
  line-height: 1em;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  width: 100%;
  border: 1px dashed ${({ theme }) => theme[COLOR_ENUM.BORDER_DEFAULT]};
  border-width: 3px;
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

const Content = styled.div`
  position: relative;
`;

const ErrorContainer = styled.div`
  height: 13.19px;
  position: absolute;
`;

const Container = styled.div`
  display: grid;
  grid-gap: ${Spacing(3)};

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

const PhoneInputCustom = styled(PhoneInput) <{
  isSuccess: boolean;
  isFocused: boolean;
  errorMessage: boolean;
}>`
  font-family: 'Helvetica', sans-serif;
  && div {
    display: none;
  }
  && input {
    :focus-visible {
      outline: none;
    }
    padding: 16px 20px;
    min-height: 53px;

    font-weight: ${SIZE_FONT_WEIGHT_DATA[SIZE_FONT_WEIGHT_ENUM.MEDIUM]};
    font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.INPUT]}px;
    line-height: 1em;
    text-align: start;
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_PRIMARY]};

    background: ${({ theme }) => theme[COLOR_ENUM.INPUT]};
    border-radius: ${SIZE_BORDER_RADIUS_DATA[
  SIZE_BORDER_RADIUS_ENUM.DEFAULT
  ]}px;
    width: 100%;
    outline: none;

    border: 1px solid
      ${({ theme, isSuccess, isFocused, errorMessage }) =>
    errorMessage
      ? theme[COLOR_ENUM.ERROR]
      : isFocused
        ? theme[COLOR_ENUM.BORDER]
        : isSuccess
          ? theme[COLOR_ENUM.BORDER_DEFAULT]
          : theme[COLOR_ENUM.BORDER]};

    ::placeholder {
      color: ${({ theme }) => theme[COLOR_ENUM.TEXT_PLACEHOLDER]};
    }

    &:hover {
      color: ${({ theme }) => theme[COLOR_ENUM.TEXT_ACTIVE]};

      ::placeholder {
        display: none;
        color: ${({ theme }) => theme[COLOR_ENUM.TRANSPARENT]};
      }
    }
  }
`;
