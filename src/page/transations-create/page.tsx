import React from 'react';

import { RouteComponentProps } from 'react-router';

import { LayoutSectionElem } from '../../common/layout-section';
import { LayoutFooterElem } from '../../common/layout-footer';
import { LayoutAppElem } from '../../common/layout-app';
import { LayoutElem } from '../../common/layout';
import { PageElem } from '../../common/page';
import { DesktopMenuAppContainer } from '../../epic/desktop-menu-app';
import { OfficeItemCreateContainer } from '../../epic/office-item-create';
import { TextElem } from '../../common/text';

export const Page: React.FC<RouteComponentProps> = () => {
  return (
    <PageElem>
      <LayoutAppElem>
        <LayoutElem size="default">
          <LayoutSectionElem spacing={8}>
            <TextElem
              tid="TRANSACTIONS.CREATE.BUTTON.CREATE"
              color="textSecondary"
              type="bold"
              size="title"
            />
            <LayoutSectionElem spacing={5}>
              <OfficeItemCreateContainer />
            </LayoutSectionElem>
          </LayoutSectionElem>
        </LayoutElem>
      </LayoutAppElem>
      <LayoutFooterElem>
        <DesktopMenuAppContainer />
      </LayoutFooterElem>
    </PageElem>
  );
};
