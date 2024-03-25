import React from 'react';

import { RouteComponentProps } from 'react-router';
import { LayoutElem } from '../../common/layout';
import { AuthLoginContainer } from '../../epic/auth-login';

import styled from 'styled-components';
import { LayoutAppElem } from '../../common/layout-app';
import { PageElem } from '../../common/page';

import { Spacing } from '../../theme';
import { HeaderContainer } from '../../epic/header';
import { WELLCOME_PAGE_PATH } from '../wellcome';

export const Page: React.FC<RouteComponentProps> = () => {
  return (
    <PageElem>
      <LayoutAppElem oneColumn>
        <HeaderContainer path={WELLCOME_PAGE_PATH} />

        <LayoutElem size="small" direction="column" fullHeight oneColumn>
          <AuthLoginContainer />
        </LayoutElem>
      </LayoutAppElem>
    </PageElem>
  );
};
const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 ${Spacing(3)};
`;
