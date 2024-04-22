import React from 'react';
import { RouteComponentProps, useLocation } from 'react-router';
import { LayoutElem } from '../../common/layout';
import { HeaderContainer } from '../../epic/header';
import { LayoutAppElem } from '../../common/layout-app';
import { PageElem } from '../../common/page';
import queryString from 'query-string';

import { AuthRecoveryPasswordContainer } from '../../epic/auth-recovery-password';
import { AuthHeader } from '../../common/auth-header';

export const Page: React.FC<RouteComponentProps> = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const code = query.code;

  return (
    <PageElem>
      <LayoutAppElem oneColumn>
        <AuthHeader />
        <LayoutElem size="small" direction="column" oneColumn>
          <AuthRecoveryPasswordContainer code={code} />
        </LayoutElem>
      </LayoutAppElem>
    </PageElem>
  );
};
