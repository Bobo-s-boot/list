import styled, { css } from 'styled-components';
import React, { useEffect } from 'react';

import { COLOR_ENUM } from '../../../theme/color';
import { Spacing } from '../../../theme';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
  SIZE_GRID_DATA,
  SIZE_GRID_ENUM,
} from '../../../theme/size';
import { TextElem } from '../../../common/text';
import { OFFICE_FILTER_TYPE } from '../constant';

export const TabType: React.FC<{
  type: OFFICE_FILTER_TYPE;
  setType: Function;
  disabledTypes?: OFFICE_FILTER_TYPE[];
}> = ({ type, setType, disabledTypes = [] }) => {
  const typeArr: OFFICE_FILTER_TYPE[] = [
    OFFICE_FILTER_TYPE.ALL,
    OFFICE_FILTER_TYPE.WORKING,
    OFFICE_FILTER_TYPE.NOT_WORKING,
    OFFICE_FILTER_TYPE.CRYPTO,
  ];

  useEffect(() => {
    setType(typeArr[0]);
  }, []);

  return (
    <Container>
      {typeArr.map((item: OFFICE_FILTER_TYPE) => (
        <TabItem
          key={item}
          disabled={disabledTypes.includes(item)}
          active={type === item}
          onClick={() => !disabledTypes.includes(item) && setType(item)}
        >
          <TextElem
            tid={`OFFICE.LIST.FILTER.TAB.${item}`}
            color={type === item ? 'textSecondary' : 'textPrimary'}
            size="small"
            type={type === item ? 'bold' : 'medium'}
          />
        </TabItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: ${Spacing(0)} ${Spacing(1)};
  display: flex;
  align-items: center;
  width: 100%;

  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  gap: ${Spacing(2)};
  @media screen and (width < 800px) {
    overflow-y: auto;

    ::after {
      content: '';
      display: block;

      right: 20px;
      position: absolute;
      pointer-events: none;
    }
  }
`;

const TabItem = styled.div<{ active: boolean; disabled?: boolean }>`
  width: 100%;
  padding: ${Spacing(3)} ${Spacing(4)};
  cursor: pointer;
  text-align: center;

  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;

  & > * {
    transition: background 0.2s ease-in-out;
  }

  background: transparent;
  border: 1px solid ${({ theme }) => theme[COLOR_ENUM.WHITE]};

  ${({ active }) =>
    active
      ? css`
          border: unset !important;
          background: ${({ theme }) => theme[COLOR_ENUM.TAB]};
          font-size: ${SIZE_GRID_DATA[SIZE_GRID_ENUM.INPUT]};
          padding: ${Spacing(3)} ${Spacing(4)};
        `
      : css`
          :hover {
            border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER_DEFAULT]};

            & > span {
              color: ${({ theme }) => theme[COLOR_ENUM.TEXT_ACTIVE]};
            }
          }
        `};

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      cursor: not-allowed;
      border: 1px solid ${({ theme }) => theme[COLOR_ENUM.CHIP_INACTIVE]};
      border: dashed 3px ${({ theme }) => theme[COLOR_ENUM.CHIP_INACTIVE]};
      border-style: dashed;
      background: ${({ theme }) => theme[COLOR_ENUM.TRANSPARENT]};
      font-size: ${SIZE_GRID_DATA[SIZE_GRID_ENUM.INPUT]};
      padding: ${Spacing(3)} ${Spacing(4)};
      :hover {
        border: 1px solid ${({ theme }) => theme[COLOR_ENUM.CHIP_INACTIVE]};
      }
    `}
`;
