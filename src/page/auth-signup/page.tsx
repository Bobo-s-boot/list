import React from 'react';
import { RouteComponentProps } from 'react-router';
import { LayoutElem } from '../../common/layout';
import { LayoutAppElem } from '../../common/layout-app';
import { PageElem } from '../../common/page';

import { AuthSignupContainer } from '../../epic/auth-signup';
import { AuthHeader } from '../../common/auth-header';

export const Page: React.FC<RouteComponentProps> = () => {
  return (
    <PageElem>
      <LayoutAppElem oneColumn>
        <AuthHeader />

        <LayoutElem size="small" direction="column" oneColumn>
          <AuthSignupContainer />
        </LayoutElem>
      </LayoutAppElem>
    </PageElem>
  );
};
