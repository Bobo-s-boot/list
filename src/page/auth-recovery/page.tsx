import React from 'react';

import { RouteComponentProps } from 'react-router';
import { LayoutElem } from '../../common/layout';
import { AuthRecoveryContainer } from '../../epic/auth-recovery';
import { HeaderContainer } from '../../epic/header';
import { LayoutAppElem } from '../../common/layout-app';
import { PageElem } from '../../common/page';

export const Page: React.FC<RouteComponentProps> = () => {
  return (
    <PageElem>
      <LayoutAppElem oneColumn>
        <HeaderContainer path />

        <LayoutElem size="small" direction="column" fullHeight oneColumn>
          <AuthRecoveryContainer />
        </LayoutElem>
      </LayoutAppElem>
    </PageElem>
  );
};
