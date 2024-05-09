import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

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
}) => {
  const history = useHistory();

  const handleClick = () => {
    return history.push(OFFICE_ITEM_UPDATE_PAGE_PATH_DYNAMIC(id));
  };

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isWorking = true;
  return (
    <>
      <ContainerElem onClick={handleClick}>
        <NameContainer>
          <TextElem size="label" type="bold" tid={name} oneLine />
          {isWorking && (
            <ChipElem textColor="textSecondary" color="chip" tid={'Працює'} />
          )}
          {!isWorking && (
            <ChipElem
              textColor="textSecondary"
              color="chip"
              tid={'Криптовалюта'}
            />
          )}
          {isTradeCrypto && (
            <ChipElem
              textColor="textSecondary"
              color="chip"
              tid="Криптовалюта"
            />
          )}
        </NameContainer>
        <InfoContainer>
          <TextElem size="small" type="regular" tid={address} />
          <div>
            <TextElem size="small" type="regular" tid="Менеджер " />
            {'  '}
            <TextElem size="semiSmall" type="medium" tid="Петренко Дмитро" />
          </div>
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
