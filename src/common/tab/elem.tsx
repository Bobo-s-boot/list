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

  return (
    <Container>
      {tabList.map((item: TAB_ELEM_TYPE) => (
        <TabItem
          active={router.pathname.includes(item.path)}
          onClick={() => history.push(item.path)}
        >
          <TextElem
            tid={item.tid}
            color={
              router.pathname.includes(item.path) ? 'default' : 'textThird'
            }
            type="medium"
          />
        </TabItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: ${Spacing(0)} ${Spacing(1)};
  height: 46px;
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme[COLOR_ENUM.BACKGROUND_SECONDARY]};
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  gap: ${Spacing(1)};
`;

const TabItem = styled.div<{ active: boolean }>`
  cursor: pointer;
  border-radius: ${SIZE_BORDER_RADIUS_DATA[SIZE_BORDER_RADIUS_ENUM.DEFAULT]}px;
  padding: 0 ${Spacing(5)};
  height: 38px;
  line-height: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme[COLOR_ENUM.TRANSPARENT]};

  transition: all 0.2s;

  span {
    height: 14.5px;
  }

  ${({ active }) =>
    active
      ? css`
          border: 1px solid ${({ theme }) => theme[COLOR_ENUM.BORDER_ACTIVE]};
          background-color: ${({ theme }) =>
            theme[COLOR_ENUM.BACKGROUND_PRIMARY]};
        `
      : ''};
`;
