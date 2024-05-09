import styled, { css } from 'styled-components';
import React, { useEffect } from 'react';

import { COLOR_ENUM } from '../../../theme/color';
import { Spacing } from '../../../theme';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../../theme/size';
import { TextElem } from '../../../common/text';

export const TabType: React.FC<{
  type: string;
  setType: Function;
}> = ({ type, setType }) => {
  const typeArr = ['PLANNED', 'COMING_SOON', 'COMPLATED', 'AUTO'];

  useEffect(() => setType(typeArr[0]), []);
  return (
    <Container>
      {typeArr.map((item: string) => (
        <TabItem active={type === item} onClick={() => setType(item)}>
          <TextElem
            tid={`OFFICE.LIST.FILTER.TAB.${item}`}
            color={type === item ? 'textSecondary' : 'textPrimary'}
            size="tab"
            type="medium"
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
  @media screen and (width<800px) {
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

const TabItem = styled.div<{ active: boolean }>`
  width: 100%;
  padding: ${Spacing(4)} ${Spacing(4)};
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
          background: ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_THIRD]};
        `
      : css`
          :hover {
            border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER_DEFAULT]};

            & > span {
              color: ${({ theme }) => theme[COLOR_ENUM.TEXT_ACTIVE]};
            }
          }
        `};
`;
