import React from 'react';
import { RouteComponentProps } from 'react-router';

import { LayoutElem } from '../../common/layout';
import { AuthLoginContainer } from '../../epic/auth-login';
import { LayoutAppElem } from '../../common/layout-app';
import { PageElem } from '../../common/page';
import { AuthHeader } from '../../common/auth-header';

export const Page: React.FC<RouteComponentProps> = () => {
  return (
    <PageElem>
      <LayoutAppElem oneColumn>
        <AuthHeader />
        <LayoutElem size="small" direction="column" oneColumn>
          <AuthLoginContainer />
        </LayoutElem>
      </LayoutAppElem>
    </PageElem>
  );
};
