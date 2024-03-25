import React from 'react';
import { RouteComponentProps, useLocation } from 'react-router';
import { LayoutElem } from '../../common/layout';
import { HeaderContainer } from '../../epic/header';
import { LayoutAppElem } from '../../common/layout-app';
import { PageElem } from '../../common/page';

import {
  AuthRecoveryConfirmContainer,
  AUTH_RECOVERY_CONFIRM_MODULE_NAME,
} from '../../epic/auth-recovery-confirm';
import queryString from 'query-string';

export const Page: React.FC<RouteComponentProps> = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const email = query.email;

  return (
    <PageElem>
      <LayoutAppElem oneColumn>
        <HeaderContainer path title="AUTH.RECOVERY_CONFIRM.TITLE" />

        <LayoutElem size="small" direction="column" fullHeight oneColumn>
          <AuthRecoveryConfirmContainer email={email} />
        </LayoutElem>
      </LayoutAppElem>
    </PageElem>
  );
};
