import styled from 'styled-components';
import React from 'react';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';

import { Spacing } from '../../theme';
import { COLOR_ENUM } from '../../theme/color';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
  SIZE_FONT_DATA,
  SIZE_FONT_ENUM,
  SIZE_FONT_WEIGHT_DATA,
  SIZE_FONT_WEIGHT_ENUM,
} from '../../theme/size';
import { ReactComponent as CloseIcon } from '../../asset/svg/common/close.svg';
import { ReactComponent as CalendarIcon } from '../../asset/svg/common/calendar.svg';
import ArrowIcon from '../../asset/svg/common/arrow.svg';
import { PROPS_TYPE } from './constant';
import { TextElem } from '../text';

export const Elem: React.FC<PROPS_TYPE> = ({
  onChange = () => { },
  title,
  fieldValue = ['00:00:00', '00:00:00'],
  ...props
}) => {
  const onChangeDate = (value: any, stringValue: any) => {
    onChange(value, stringValue);
  };

  const startDate = fieldValue[0];
  const endDate = fieldValue[1];

  return (
    <Container id="container" className="timeRange">
      {title && (
        <TextElem
          tid={title}
          type="medium"
          color="textSecondary"
          size="input"
        />
      )}

      <Field
        {...props}
        value={[
          dayjs(startDate || '00:00:00', 'HH:mm:ss'),
          dayjs(endDate || '00:00:00', 'HH:mm:ss'),
        ]}
        format="HH:mm:ss"
        onChange={onChangeDate}
        onCalendarChange={onChange}
        needConfirm
        suffixIcon={<CalendarIcon />}
        allowClear={{ clearIcon: <CloseIcon /> }}
        //@ts-ignore
        getPopupContainer={() => document.getElementById('container')}
      />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-gap: ${Spacing(3)};

  .ant-picker-range-arrow {
    display: none !important;
  }
  .ant-picker-panel-container {
    background: transparent;
  }
  .ant-picker-panel {
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_SECONDARY]} !important;
    background-color: ${({ theme }) =>
    theme[COLOR_ENUM.INPUT_ACTIVE]} !important;
    border-radius: ${SIZE_BORDER_RADIUS_DATA[
  SIZE_BORDER_RADIUS_ENUM.DEFAULT
  ]}px;
  }
  .ant-picker-suffix {
    padding-right: 0px;
  }
  .ant-picker-clear {
    padding-right: 9px;
  }

  .ant-picker-focused {
  }

  .ant-picker-footer {
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_SECONDARY]} !important;
    background-color: ${({ theme }) =>
    theme[COLOR_ENUM.INPUT_ACTIVE]} !important;
    border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER]} !important;
  }
  .ant-picker-panel-layout {
    border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER]} !important;
    overflow: auto;
    border-radius: ${SIZE_BORDER_RADIUS_DATA[
  SIZE_BORDER_RADIUS_ENUM.DEFAULT
  ]}px;
    min-height: 53px !important;
  }
  .ant-picker-time-panel-cell-inner {
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_SECONDARY]} !important;
  }

  .ant-picker-time-panel-cell-selected > .ant-picker-time-panel-cell-inner {
    color: ${({ theme }) => theme[COLOR_ENUM.DEFAULT]} !important;
    background-color: ${({ theme }) => theme[COLOR_ENUM.BORDER]} !important;
  }
`;

const Field = styled(TimePicker.RangePicker)`
  min-height: 53px;
  box-sizing: border-box;

  .calendar-popup.ant-picker-range-arrow {
    display: none;
  }
  .calendar-popup.ant-picker-panel {
  }
  .ant-picker-range-separator {
    svg {
      path {
        d: path('M20 12H4M4 12L8.75676 6M4 12L8.75676 18');
      }
    }
    position: relative;
    ::after {
      position: absolute;
      display: block;
      content: '';
      height: 14px;
      width: 18px;
      background: url(${ArrowIcon});
      top: 1px;
      left: 5px;
    }
  }

  cursor: pointer;
  height: 53px;
  :focus-visible {
    outline: none;
  }
  position: relative;
  .ant-picker-active-bar {
    display: none;
  }
  box-shadow: none !important;
  .ant-picker-input > input {
    ::placeholder {
      color: ${({ theme }) => theme[COLOR_ENUM.TEXT_PLACEHOLDER]};
    }
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_DEFAULT]} !important;
  }

  font-weight: ${SIZE_FONT_WEIGHT_DATA[SIZE_FONT_WEIGHT_ENUM.REGULAR]};

  font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.INPUT]}px;
  @media screen and (width<=600px) {
    font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.INPUT]}px;
  }
  line-height: 1em;
  text-align: start;

  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  width: 100%;

  border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER_DEFAULT]} !important;

  &:hover {
    border-color: ${({ theme }) => theme[COLOR_ENUM.BORDER_HOVER]};
    background: ${({ theme }) => theme[COLOR_ENUM.INPUT]};

    .ant-picker-input > input {
      color: ${({ theme }) => theme[COLOR_ENUM.TEXT_SECONDARY]} !important;

      ::placeholder {
        color: ${({ theme }) => theme[COLOR_ENUM.TEXT_SECONDARY]};
      }
    }
  }

  &:focus-within {
    background: ${({ theme }) => theme[COLOR_ENUM.INPUT]};
  }

  background: ${({ theme }) => theme[COLOR_ENUM.INPUT]};

  padding: ${Spacing(4)} ${Spacing(5)};
`;
