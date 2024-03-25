import React from 'react';
import styled from 'styled-components';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
  SIZE_ICON_DATA,
  SIZE_ICON_ENUM,
} from '../../theme/size';
import { COLOR_ENUM } from '../../theme/color';
import moment, { months } from 'moment';
import { useState, useEffect, memo } from 'react';
import arrowIcon from '../../asset/svg/calendar/arrow.svg';
import arrowIconDark from '../../asset/svg/calendar/arrowDark.svg';
import { TextElem } from '../text';
import { Spacing } from '../../theme';
import { IonIcon } from '@ionic/react';
import { GridElem } from '../grid';
import { monthConvert } from '../../lib/util/dateConvert';
import { THEME_MODULE_NAME } from '../../data/theme';
import { THEME_ENUM } from '../../data/theme/constant';
import { useSelector } from '../../lib/store';

export const Elem: React.FC<{
  onChange?: any;
}> = memo(({ onChange }) => {
  const [yearIndex, setYearIndex] = useState(0);
  const [years, setYears] = useState([]);
  const [selected, setSelected] = useState<string[]>([]);

  const { theme } = useSelector((s: any) => ({
    theme: s[THEME_MODULE_NAME],
  }));

  useEffect(() => {
    let ys = [];
    for (let year = 2010; year <= Number(moment().format('YYYY')); year++) {
      const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
        let date = year.toString() + (month < 10 ? `0${month}` : month);
        return {
          selected: false,
          date,
        };
      });
      ys.push({ year, months });
    }
    //  @ts-ignore
    setYears(ys);
    setYearIndex(ys.length - 1);
  }, []);

  useEffect(() => {
    if (selected.length === 2 || selected.length === 1) {
      onChange(selected);
    }
  }, [selected]);

  const setSelectedLocal = (monthIndex: any, month: any) => {
    let ys = [...years];

    //  @ts-ignore
    ys[yearIndex].months[monthIndex].selected = true;
    setYears(ys);
    if (!selected.length) {
      setSelected([month.date]);
    } else if (selected.length == 2) {
      setSelected([month.date]);
    } else {
      if (selected[0] < month.date) {
        setSelected([selected[0], month.date]);
      } else {
        setSelected([month.date, selected[0]]);
      }
    }
  };
  const year = years[yearIndex];

  if (!year) {
    return null;
  }
  const handleYearFirst = () =>
    yearIndex ? setYearIndex(yearIndex - 1) : null;
  const handleYearSecond = () =>
    yearIndex < years.length - 1 ? setYearIndex(yearIndex + 1) : null;

  return (
    <Container>
      <MonthPicker>
        <GridElem>
          <YearPicker>
            <Arrow
              icon={theme.type === THEME_ENUM.LIGHT ? arrowIcon : arrowIconDark}
              style={{
                opacity: !yearIndex ? 0.2 : 1,
                cursor: !yearIndex ? 'default' : 'pointer',
                transform: 'rotate(180deg)',
              }}
              onClick={handleYearFirst}
            />
            <YearTitle type="bold" size="main">
              {/* @ts-ignore */}
              {year.year}
            </YearTitle>
            <Arrow
              icon={theme.type === THEME_ENUM.LIGHT ? arrowIcon : arrowIconDark}
              style={{
                opacity: yearIndex === years.length - 1 ? 0.2 : 1,
                cursor: yearIndex === years.length - 1 ? 'default' : 'pointer',
              }}
              onClick={handleYearSecond}
            />
          </YearPicker>
          <Title tid="COMMON.SPRAV.CALENDAR.TITLE" type="bold" />

          <Months>
            {/* @ts-ignore */}
            {year.months.map((m: any, i: any) => {
              const handleSelectedLocale = () => setSelectedLocal(i, m);
              return (
                <MonthContainer onClick={handleSelectedLocale}>
                  <Month
                    size="main"
                    className={`
                    ${
                      selected.length === 2 &&
                      m.date >= selected[0] &&
                      m.date <= selected[1]
                        ? 'selected'
                        : ''
                    } 
                    ${selected[0] == m.date && 'start selected'} 
                    ${selected[0] == m.date && selected[1] && 'startWithRange'} 
                    ${selected[1] == m.date && 'end'} 
                    ${[0, 3, 6, 9].includes(i) && 'startMonth'}
                    ${[2, 5, 8, 11].includes(i) && 'endMonth'}`}
                    disabled={moment(m.date).isAfter(moment().endOf('month'))}
                    key={i}
                  >
                    {moment(monthConvert(m.date)).format('MMMM')}
                  </Month>
                </MonthContainer>
              );
            })}
          </Months>
        </GridElem>
      </MonthPicker>
    </Container>
  );
});

const Arrow = styled(IonIcon)`
  width: ${SIZE_ICON_DATA[SIZE_ICON_ENUM.DEFAULT]};
  height: ${SIZE_ICON_DATA[SIZE_ICON_ENUM.DEFAULT]};
`;

const Title = styled(TextElem)`
  display: flex;
  justify-content: center;
`;

const MonthPicker = styled.div`
  box-sizing: border-box;
  flex: 1;
  padding: ${Spacing(5)};
`;

const YearPicker = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${Spacing(14)};
  background: ${({ theme }) => theme[COLOR_ENUM.HEADER_BACKGROUND]};
  height: 41px;
  align-items: center;
`;

const YearTitle = styled(TextElem)``;

const Months = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: ${Spacing(3)};
`;

const MonthContainer = styled.div``;

const Month = styled(TextElem)<{ disabled: any }>`
  border: 1px solid transparent;
  padding: ${Spacing(2.5)};
  text-transform: capitalize;
  background-color: transparent;
  text-align: center;
  color: ${({ theme }) => theme[COLOR_ENUM.CALENDAR_DATE]};

  &.selected {
    background-color: ${({ theme }) => theme[COLOR_ENUM.ACTION]};
    color: white;
  }
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  transition: 0.2s;

  &.start {
    border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.CHIP]}px;
  }
  &.end {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &.startWithRange {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &.startMonth {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &.endMonth {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme[COLOR_ENUM.ACTION]};
    border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.CHIP]}px;
    opacity: 0.6;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
