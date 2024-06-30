import React from 'react';
import { LayoutElem } from '../../common/layout';
import { LayoutAppElem } from '../../common/layout-app';
import { LayoutFooterElem } from '../../common/layout-footer';
import { LayoutSectionElem } from '../../common/layout-section';
import { PageElem } from '../../common/page';
import { DesktopMenuAppContainer } from '../../epic/desktop-menu-app';
import { HeaderContainer } from '../../epic/header';
import { TransitionsListContainer } from '../../epic/transactions-list';

export const Page: React.FC = () => {
  return (
    <PageElem>
      <LayoutAppElem>
        <HeaderContainer title="TRANSACTIONS.TITLE" size="default" />
        <LayoutElem size="default">
          <LayoutSectionElem spacing={5}>
            {/* <TextElem
              tid="TRANSACTIONS.LIST.TITLE"
              color="textSecondary"
              type="bold"
              size="title"
            /> */}
            <TransitionsListContainer sessionId={''} />
          </LayoutSectionElem>
        </LayoutElem>
      </LayoutAppElem>
      <LayoutFooterElem>
        <DesktopMenuAppContainer />
      </LayoutFooterElem>
    </PageElem>
  );
};
