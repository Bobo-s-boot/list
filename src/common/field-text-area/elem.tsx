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

import errorField from '../../asset/img/icon/errorField.svg';

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
}) => {
  const refIcon = useRef<HTMLDivElement>(null);

  const handleChange = (e: any) => {
    if (!e.target) e.target = {};

    e.target.name = name;
    e.target.value = e.target.value;

    if (onChange) {
      onChange(e);
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
    return <FakeInput>{value}</FakeInput>;
  } else {
    return (
      <Container className={className}>
        {title && <TextElem size="label" tid={title} />}
        <Content>
          <Input
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
          />
          <Icon ref={refIcon}>{icon}</Icon>
        </Content>
        <ErrorContainer className="errorContainer">
          {(error || errorMessage) && (
            <ErrorMessage>
              <TextElem size="alert" color="error">
                {errorMessage}
              </TextElem>
              <img src={errorField} />
            </ErrorMessage>
          )}
        </ErrorContainer>
      </Container>
    );
  }
};

const Input = styled.textarea<{
  error?: boolean;
  onIonChange?: Function;
  type?: string;
  iconSize: number;
}>`
  padding: ${Spacing(2.5)} ${Spacing(3)};

  color: ${({ theme }) => theme[COLOR_ENUM.TEXT_PRIMARY]};
  font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.INPUT]}px;
  font-weight: ${SIZE_FONT_WEIGHT_DATA[SIZE_FONT_WEIGHT_ENUM.REGULAR]};
  line-height: 30px;
  text-align: start;
  background: ${({ theme }) => theme[COLOR_ENUM.INPUT]};
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  width: 100%;
  border: none;
  outline: none;
  height: 144px;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme[COLOR_ENUM.BORDER]};
  }

  &:focus-within {
    background: ${({ theme }) => theme[COLOR_ENUM.INPUT_ACTIVE]};
  }
  ::placeholder {
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_SECONDARY]};
  }
  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme[COLOR_ENUM.ERROR]} !important;
    `}
`;

const FakeInput = styled.div`
  padding: ${Spacing(4)};
  height: 50px;
  font-size: ${({ theme }) => theme[SIZE_FONT_ENUM.INPUT]}px;
  color: ${({ theme }) => theme[COLOR_ENUM.DISABLED]};
  line-height: 1em;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme[COLOR_ENUM.DISABLED]};
`;

const ErrorMessage = styled.div`
  display: flex;
  justify-content: end;
  gap: ${Spacing(2.5)};
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
const Label = styled.div`
  padding-left: ${Spacing(2.5)};
`;
