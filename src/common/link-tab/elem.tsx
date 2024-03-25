import React from 'react';
import styled, { css } from 'styled-components';
import { Spacing } from '../../theme';
import { TextElem } from '../text';
import { Link } from 'react-router-dom';
import { COLOR_ENUM } from '../../theme/color';

export const Elem: React.FC<{
  activePath?: any;
  tab?: any;
  marginTop?: number;
}> = ({ activePath, tab, marginTop }) => {
  return (
    <TabContainer marginT={marginTop}>
      {tab.map((item: any) =>
        item.path === activePath ? (
          <Tab>
            <TextElem
              tid={item.tid}
              color="action"
              size="main"
              type="bold"
              tvalue={item.tvalue}
            />
          </Tab>
        ) : (
          <TabLink to={item.path}>
            <TextElem
              tid={item.tid}
              size="main"
              type="bold"
              tvalue={item.tvalue}
            />
          </TabLink>
        ),
      )}
    </TabContainer>
  );
};

const TabContainer = styled.div<{ marginT?: number }>`
  ${({ marginT }) => {
    if (marginT) {
      return css`
        margin-top: ${marginT}px;
      `;
    }
  }};
  display: flex;
  height: 40px;
  gap: ${Spacing(8)};
  align-items: center;
`;

const Tab = styled.div<{ active?: Boolean }>`
  border-bottom: 2px solid ${({ theme }) => theme[COLOR_ENUM.ACTION]};
`;
const TabLink = styled(Link)`
  text-decoration: none;
`;
