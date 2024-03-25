import React from 'react';

import ukLocale from 'date-fns/locale/uk';
import { Calendar } from 'react-date-range';
import { THEME_MODULE_NAME } from '../../data/theme';
import { useSelector } from '../../lib/store';
import styled, { css } from 'styled-components';
import { COLOR_ENUM } from '../../theme/color';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
  SIZE_FONT_DATA,
  SIZE_FONT_ENUM,
} from '../../theme/size';
import arrowIconDark from '../../asset/svg/sprav/arrowDark.svg';
import arrowBackIconDark from '../../asset/svg/sprav/arrowBackDark.svg';
import arrowIcon from '../../asset/svg/sprav/arrow.svg';
import arrowBackIcon from '../../asset/svg/sprav/arrowBack.svg';
import { THEME_ENUM } from '../../data/theme/constant';

export const Elem: React.FC<{ date: any; setDate: any; minDate?: Date }> = ({
  date,
  setDate,
  minDate,
}) => {
  const { theme } = useSelector((s: any) => ({
    theme: s[THEME_MODULE_NAME],
  }));
  return (
    <CalendarCustom
      date={date}
      onChange={setDate}
      locale={ukLocale}
      showMonthAndYearPickers={false}
      showDateDisplay={false}
      showPreview={false}
      weekdayDisplayFormat="EEEEEE"
      themeType={theme && theme.type === THEME_ENUM.LIGHT}
      minDate={minDate ? minDate : undefined}
    />
  );
};

const CalendarCustom = styled(Calendar)<{ iconPrev?: any; themeType?: any }>`
  text-transform: capitalize;
  font-size: ${SIZE_FONT_DATA[SIZE_FONT_ENUM.MAIN]}px;
  /* font-family: 'MacPaw Fixel Display' !important; */
  .rdrMonthAndYearPickers {
    color: ${({ theme }) => theme[COLOR_ENUM.CALENDAR_DATE]};
  }
  .rdrWeekDays {
    background: ${({ theme }) => theme[COLOR_ENUM.HEADER_BACKGROUND]};
  }
  .rdrWeekDays > * {
    color: ${({ theme }) => theme[COLOR_ENUM.CALENDAR_DATE]};
  }
  .rdrDayNumber > * {
    color: ${({ theme }) => theme[COLOR_ENUM.CALENDAR_DATE]};
  }

  .rdrDayToday > * > * {
    color: ${({ theme }) => theme[COLOR_ENUM.CHIP]};
    font-weight: 800 !important;
  }
  .rdrDay .rdrSelected {
    font-weight: 600;
    border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.CHIP]}px;
    border: none;
    left: 0;
    right: 0;
    color: ${({ theme }) => theme[COLOR_ENUM.ACTION]} !important;
  }

  .rdrDayDisabled span {
    color: ${({ theme }) => theme[COLOR_ENUM.LINK]} !important;
  }

  .rdrDayDisabled {
    background: transparent;
  }

  .rdrDayPassive > * > * {
    color: ${({ theme }) => theme[COLOR_ENUM.LINK]} !important;
  }

  .rdrDayToday .rdrDayNumber span:after {
    display: none;
  }
  .rdrDays > * > * {
    font-weight: 400;
  }
  .rdrDayHovered {
    border: none !important;
  }
  .rdrDayNumber:after {
    display: none;
  }
  .rdrDayNumber {
    left: 2px !important;
    right: 2px !important;
  }
  .rdrDayNumber:hover {
    border: 1px solid ${({ theme }) => theme[COLOR_ENUM.ACTION]};
    border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.CHIP]}px;
    opacity: 0.6;
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
  .rdrPprevButton {
    ${({ themeType }) =>
      themeType
        ? css`
            background: center no-repeat url(${arrowBackIcon});
          `
        : css`
            background: center no-repeat url(${arrowBackIconDark});
          `}
    color: ${({ theme }) => theme[COLOR_ENUM.CALENDAR_DATE]};
  }
  .rdrNextButton {
    ${({ themeType }) =>
      themeType
        ? css`
            background: center no-repeat url(${arrowIcon});
          `
        : css`
            background: center no-repeat url(${arrowIconDark});
          `}
  }
  .rdrNextButton > * {
    color: ${({ theme }) => theme[COLOR_ENUM.CALENDAR_DATE]};
  }

  .rdrDayStartPreview,
  .rdrDayEndPreview {
    all: unset;
  }

  @media (max-width: 560px) {
    .rdrMonth {
      width: 400px;
    }
  }

  @media (max-width: 470px) {
    .rdrMonth {
      width: 300px;
    }
  }

  @media (max-width: 360px) {
    .rdrMonth {
      width: auto;
    }
  }

  .rdrEndEdge {
    right: 0;
  }

  .rdrDayEndOfWeek .rdrInRange {
    right: 0;
  }
`;
