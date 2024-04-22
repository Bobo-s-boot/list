import React from 'react';
import { RouteComponentProps, useLocation } from 'react-router';
import { LayoutElem } from '../../common/layout';
import { HeaderContainer } from '../../epic/header';
import { LayoutAppElem } from '../../common/layout-app';
import { PageElem } from '../../common/page';

import { AuthRecoveryConfirmContainer } from '../../epic/auth-recovery-confirm';
import queryString from 'query-string';
import { AuthHeader } from '../../common/auth-header';

export const Page: React.FC<RouteComponentProps> = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const email = query.email;
  const phone = query.phone;

  return (
    <PageElem>
      <LayoutAppElem oneColumn>
        <AuthHeader />
        <LayoutElem size="small" direction="column" oneColumn>
          <AuthRecoveryConfirmContainer phone={phone} email={email} />
        </LayoutElem>
      </LayoutAppElem>
    </PageElem>
  );
};
