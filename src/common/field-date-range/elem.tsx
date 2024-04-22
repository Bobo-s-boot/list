import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { DateRange, DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {
  SIZE_BORDER_RADIUS_ENUM,
  SIZE_FONT_DATA,
  SIZE_FONT_ENUM,
  SIZE_FONT_WEIGHT_DATA,
  SIZE_FONT_WEIGHT_ENUM,
} from '../../theme/size';
import { COLOR_ENUM } from '../../theme/color';
import { Spacing } from '../../theme';
import { THEME_MODULE_NAME } from '../../data/theme';
import { useSelector } from '../../lib/store';
import { THEME_ENUM } from '../../data/theme/constant';

export const Elem: React.FC<{
  range: any;
  setRange: Function;
}> = ({ range, setRange }) => {
  const { theme } = useSelector((s: any) => ({
    theme: s[THEME_MODULE_NAME],
  }));
  const changeHandler = (item: any) => {
    setRange([item.selection]);
  };
  const handleChange = (item: any) => changeHandler(item);
  const defaultValue = [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ];
  return (
    <Container>
      <Calendar
        weekStartsOn={0}
        weekdayDisplayFormat="EEEEE"
        onChange={handleChange}
        ranges={range[0].startDate ? range : defaultValue}
        showMonthAndYearPickers={false}
        showMonthArrow={false}
        showDateDisplay={false}
        showPreview={false}
        themeType={theme && theme.type === THEME_ENUM.LIGHT}
        direction="vertical"
        monthDisplayFormat="MMMM yyyy"
        scroll={{
          enabled: true,
          monthHeight: 260,
          longMonthHeight: 292,
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1000;
  height: 100%;
`;

const Calendar = styled(DateRangePicker)<{ iconPrev?: any; themeType?: any }>`
  text-transform: capitalize;
  font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.MAIN]}px;
  z-index: 1000;

  .rdrMonthsVertical {
    height: calc(80vh - 150px) !important;
  }

  .rdrMonthAndYearWrapper {
    display: none;
  }

  .rdrWeekDays {
    height: 64px;
    position: relative;
  }

  .rdrWeekDays::after {
    content: '';

    background: ${({ theme }) => theme[COLOR_ENUM.DIVIDER]};
    display: block;
    z-index: 100;
    height: 1px;
    position: absolute;
    width: 100%;
    bottom: 0px;
  }

  .rdrCalendarWrapper,
  .rdrMonth {
    width: 100%;
  }
  width: 100%;

  .rdrDefinedRangesWrapper {
    display: none;
  }

  .rdrDayNumber > * {
    color: ${({ theme }) => theme[COLOR_ENUM.CALENDAR_DATE]};
  }

  .rdrInRange {
    background: ${({ theme }) => theme[COLOR_ENUM.SELECT_CALENDAR]};
    font-weight: ${SIZE_FONT_WEIGHT_DATA[
      SIZE_FONT_WEIGHT_ENUM.MEDIUM
    ]} !important;
  }

  .rdrStartEdge,
  .rdrEndEdge {
    background: ${({ theme }) => theme[COLOR_ENUM.ACTION]};
    width: 40px;
    border-radius: 100% !important;
    margin: 0 auto;
  }

  .rdrStartEdge:not(.rdrEndEdge)::after {
    content: '';
    display: block;
    z-index: -10;
    position: relative;
    height: 40px;
    left: 50%;
    width: 50px;
    background: ${({ theme }) => theme[COLOR_ENUM.SELECT_CALENDAR]};
  }

  .rdrEndEdge:not(.rdrStartEdge)::before {
    content: '';
    display: block;
    z-index: -10;
    position: relative;
    height: 40px;
    right: 50%;
    width: 50px;
    background: ${({ theme }) => theme[COLOR_ENUM.SELECT_CALENDAR]};
  }

  .rdrDayPassive > * > * {
    color: ${({ theme }) => theme[COLOR_ENUM.LINK]} !important;
  }

  .rdrDayToday .rdrDayNumber span:after {
    display: none;
  }
  .rdrDayNumber > * {
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme[COLOR_ENUM.DEFAULT]};
  }

  .rdrMonthName,
  .rdrMonthAndYearPickers,
  .rdrWeekDay {
    font-weight: ${SIZE_FONT_WEIGHT_DATA[
      SIZE_FONT_WEIGHT_ENUM.MEDIUM
    ]} !important;
    font-size: 16px;
    color: ${({ theme }) => theme[COLOR_ENUM.TEXT_SECONDARY]};
    padding-top: 12;
    padding-bottom: 0;
  }

  .rdrMonth::before {
    content: '';
    background: ${({ theme }) => theme[COLOR_ENUM.DIVIDER]};
    display: block;
    z-index: 100;
    height: 1px;
    position: relative;
    width: 100%;
  }

  .rdrWeekDays {
    padding: 0;
  }
  .rdrDayPassive > .rdrDayNumber > * {
    display: none;
  }

  .rdrDayHovered {
    border: none;
  }

  .rdrMonth {
    padding: 0;
  }
  .rdrMonthAndYearWrapper {
    padding: 0;
  }
  .rdrNextPrevButton > i {
    display: none;
  }

  .rdrEndEdge {
    right: 0;
  }

  .rdrStartEdge {
    left: 0;
  }
  .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span {
    color: ${({ theme }) => theme[COLOR_ENUM.ACTION]};
  }
  .rdrDay,
  .rdrDayNumber,
  .rdrInRange,
  .rdrStartEdge,
  .rdrEndEdge {
    border-radius: none !important;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    height: 40px !important;
  }

  .rdrDayEndOfWeek .rdrInRange {
    right: 0;
  }

  .rdrDayEndOfWeek .rdrStartEdge {
    right: 0;
  }

  .rdrDayStartOfWeek .rdrInRange {
    left: 0;
  }
`;
