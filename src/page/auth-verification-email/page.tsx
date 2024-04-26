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
import { AuthHeader } from '../../common/auth-header';

export const Page: React.FC<RouteComponentProps> = () => {
  return (
    <PageElem>
      <LayoutAppElem oneColumn>
        <AuthHeader />
        <LayoutElem size="small" direction="column" oneColumn>
          <AuthVerificationContainer type={AUTH_TYPE.EMAIL} />
        </LayoutElem>
      </LayoutAppElem>
    </PageElem>
  );
};
