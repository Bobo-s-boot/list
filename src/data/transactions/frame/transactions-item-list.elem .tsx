import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import moment from 'moment';

import { OFFICE_ITEM_DATA_INTER } from '../constant';
import { Spacing } from '../../../theme';
import { TextElem } from '../../../common/text';
import { ChipElem } from '../../../common/chip';
import { COLOR_ENUM } from '../../../theme/color';
import {
  VALUE_TRANSITION_DATA,
  VALUE_TRANSITION_ENUM,
} from '../../../theme/value';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../../theme/size';
import { OFFICE_ITEM_UPDATE_PAGE_PATH_DYNAMIC } from '../../../page/office-update';

const Elem: React.FC<OFFICE_ITEM_DATA_INTER> = ({
  name,
  address,
  isTradeCrypto,
  id,
  isWork,
  isPause,
  days,
  ...props
}) => {
  const history = useHistory();

  const now = moment();
  const currentDay: any = now.day();
  const workDaysNumber = days.map((day) => Number(day));

  const breakStart = moment(props.pauseStartTime, 'HH:mm:ss');
  const breakEnd = moment(props.pauseEndTime, 'HH:mm:ss');

  const workStart = moment(props.workStartTime, 'HH:mm:ss');
  const workEnd = moment(props.workEndTime, 'HH:mm:ss');

  const isWorking =
    workDaysNumber.includes(currentDay) && now.isBetween(workStart, workEnd);
  const isBreak = now.isBetween(breakStart, breakEnd);

  const handleClick = () => {
    return history.push(OFFICE_ITEM_UPDATE_PAGE_PATH_DYNAMIC(id));
  };

  // const [width, setWidth] = useState(window.innerWidth); --- ?????? Для чего?
  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  return (
    <>
      <ContainerElem onClick={handleClick}>
        <NameContainer>
          <TextElem size="label" type="bold" tid={name} oneLine />
          {!isBreak && (
            <ChipElem
              active={isWorking}
              tid={
                isWorking ? 'OFFICE.LIST.WORKING' : 'OFFICE.LIST.NOT_WORKING'
              }
            />
          )}
          {(isPause || isBreak) && (
            <ChipElem active={false} tid="OFFICE.LIST.BREAK" />
          )}
          {isTradeCrypto && (
            <ChipElem
              textColor="textSecondary"
              color="chip"
              tid="OFFICE.LIST.CRYPTO"
            />
          )}
        </NameContainer>
        <InfoContainer>
          <TextElem size="small" type="regular" tid={address} />
          {isWork && (
            <div>
              <TextElem size="small" type="regular" tid="Менеджер " />
              {'  '}
              <TextElem size="semiSmall" type="medium" tid="Петренко Дмитро" />
            </div>
          )}
        </InfoContainer>
      </ContainerElem>
    </>
  );
};

const InfoContainer = styled.div`
  display: flex;
  gap: ${Spacing(5)};
  align-items: center;
  line-height: 1em !important;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${Spacing(3)};
  vertical-align: middle;
`;

const ContainerElem = styled.div`
  padding: ${Spacing(4)} ${Spacing(5)};
  align-items: center;
  border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER_DEFAULT]};
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.CARD]}px;

  display: flex;
  gap: 15px;
  justify-content: space-between;

  transition: opacity ${VALUE_TRANSITION_DATA[VALUE_TRANSITION_ENUM.HOVER]};

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export { Elem as OfficeItemElem };
