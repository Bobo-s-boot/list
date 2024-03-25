import React from 'react';
import { RouteComponentProps } from 'react-router';
import { LayoutElem } from '../../common/layout';
import { LayoutAppElem } from '../../common/layout-app';
import { PageElem } from '../../common/page';

import {
  AuthSignupContainer,
  AUTH_SIGNUP_MODULE_NAME,
} from '../../epic/auth-signup';
import { HeaderContainer } from '../../epic/header';
import { WELLCOME_MODULE_NAME } from '../../epic/wellcome';

export const Page: React.FC<RouteComponentProps> = () => {
  return (
    <PageElem>
      <LayoutAppElem oneColumn>
        <HeaderContainer path={WELLCOME_MODULE_NAME} />

        <LayoutElem size="small" direction="column" fullHeight oneColumn>
          <AuthSignupContainer />
        </LayoutElem>
      </LayoutAppElem>
    </PageElem>
  );
};
