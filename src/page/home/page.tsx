import React from 'react';
import { RouteComponentProps } from 'react-router';

import { LayoutFooterElem } from '../../common/layout-footer';
import { LayoutAppElem } from '../../common/layout-app';
import { LayoutElem } from '../../common/layout';
import { PageElem } from '../../common/page';

import { Spacing } from '../../theme';
import { HeaderContainer } from '../../epic/header';
import { DesktopMenuAppContainer } from '../../epic/desktop-menu-app';

export const Page: React.FC<RouteComponentProps> = () => {
  return (
    <PageElem>
      <LayoutAppElem oneColumn>
        <HeaderContainer path title="ACCOUNT.PROFILE.TITLE" />

        <LayoutElem direction="column">
          <div>FDDDDDDDDDDDDDD</div>
        </LayoutElem>
      </LayoutAppElem>
      <LayoutFooterElem>
        <DesktopMenuAppContainer />
      </LayoutFooterElem>
    </PageElem>
  );
};
