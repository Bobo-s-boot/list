import React from 'react';
import { RouteComponentProps } from 'react-router';
import { LayoutElem } from '../../common/layout';

import { LayoutAppElem } from '../../common/layout-app';
import { PageElem } from '../../common/page';

import { AuthVerificationContainer } from '../../epic/auth-verification';
import { AUTH_TYPE } from '../../data/auth/constant';
import { AuthHeader } from '../../common/auth-header';

export const Page: React.FC<RouteComponentProps> = () => {
  return (
    <PageElem>
      <LayoutAppElem oneColumn>
        <AuthHeader />
        <LayoutElem size="small" direction="column" oneColumn>
          <AuthVerificationContainer type={AUTH_TYPE.PHONE} />
        </LayoutElem>
      </LayoutAppElem>
    </PageElem>
  );
};
