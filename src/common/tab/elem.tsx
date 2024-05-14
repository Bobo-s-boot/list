import React, { ReactNode } from 'react';

import styled, { css } from 'styled-components';
import {
  SIZE_BORDER_RADIUS_DATA,
  SIZE_BORDER_RADIUS_ENUM,
} from '../../theme/size';
import { COLOR_ENUM } from '../../theme/color';
import { Spacing } from '../../theme';
import { useHistory, useLocation } from 'react-router';
import { TextElem } from '../text';
import { TAB_ELEM_TYPE } from './constant';

export const Elem: React.FC<{ tabList: TAB_ELEM_TYPE[] }> = ({ tabList }) => {
  const router = useLocation();

  const history = useHistory();

  const isActive = (path: string) => router.pathname.includes(path);

  return (
    <Container>
      {tabList.map((item: TAB_ELEM_TYPE) => (
        <TabItem
          active={router.pathname.includes(item.path)}
          // onClick={() => history.push(item.path)}
        >
          <TextElem
            tid={item.tid}
            color={isActive(item.path) ? 'textSecondary' : 'textPrimary'}
            size="small"
            type={isActive(item.path) ? 'bold' : 'medium'}
          />
        </TabItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  height: 38px;
  display: flex;
  align-items: center;

  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  gap: ${Spacing(2)};
`;

const TabItem = styled.div<{ active: boolean }>`
  cursor: pointer;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  padding: ${Spacing(2)} ${Spacing(5)};
  height: 38px;
  line-height: 0.8em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  box-sizing: border-box;

  transition: all 0.2s;

  span {
    height: 14.5px;
  }

  ${({ active }) =>
    active
      ? css`
          border: unset !important;
          background: ${({ theme }) => theme[COLOR_ENUM.TAB]};
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
