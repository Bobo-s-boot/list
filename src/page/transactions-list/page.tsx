import React from 'react';

import { LayoutSectionElem } from '../../common/layout-section';
import { HeaderContainer } from '../../epic/header';
import { LayoutAppElem } from '../../common/layout-app';
import { LayoutElem } from '../../common/layout';
import { PageElem } from '../../common/page';

import { LayoutFooterElem } from '../../common/layout-footer';

import { DesktopMenuAppContainer } from '../../epic/desktop-menu-app';
import { TextElem } from '../../common/text';
import { TransactionsListContainer } from '../../epic/transactions-list';

export const Page: React.FC = () => {
  return (
    <PageElem>
      <LayoutAppElem>
        <HeaderContainer title="TRANSACTIONS.LIST.TITLE" size="default" />
        <LayoutElem size="default">
          <LayoutSectionElem spacing={5}>
            <TextElem
              tid="TRANSACTIONS.LIST.TITLE"
              color="textSecondary"
              type="bold"
              size="title"
            />
            <TransactionsListContainer />
          </LayoutSectionElem>
        </LayoutElem>
      </LayoutAppElem>
      <LayoutFooterElem>
        <DesktopMenuAppContainer />
      </LayoutFooterElem>
    </PageElem>
  );
};
