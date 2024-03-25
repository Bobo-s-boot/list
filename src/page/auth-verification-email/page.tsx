import React from 'react';
import { RouteComponentProps, useLocation } from 'react-router';
import { LayoutElem } from '../../common/layout';

import { GridElem } from '../../common/grid';
import { LayoutAppElem } from '../../common/layout-app';
import { PageElem } from '../../common/page';

import { HeaderContainer } from '../../epic/header';
import { AuthVerificationContainer } from '../../epic/auth-verification';
import { LayoutCenterElem } from '../../common/layout-center';
import { AUTH_TYPE } from '../../data/auth/constant';

export const Page: React.FC<RouteComponentProps> = () => {
  return (
    <PageElem>
      <LayoutAppElem oneColumn>
        <HeaderContainer path />
        <LayoutElem size="small" direction="column" fullHeight oneColumn>
          <LayoutCenterElem>
            <GridElem spacing={6}>
              <AuthVerificationContainer type={AUTH_TYPE.EMAIL} />
            </GridElem>
          </LayoutCenterElem>
        </LayoutElem>
      </LayoutAppElem>
    </PageElem>
  );
};
