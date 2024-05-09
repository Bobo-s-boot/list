import React from 'react';

import { RouteComponentProps } from 'react-router';

import { LayoutSectionElem } from '../../common/layout-section';
import { LayoutFooterElem } from '../../common/layout-footer';
import { LayoutAppElem } from '../../common/layout-app';
import { LayoutElem } from '../../common/layout';
import { PageElem } from '../../common/page';
import { DesktopMenuAppContainer } from '../../epic/desktop-menu-app';
import { OfficeItemCreateContainer } from '../../epic/office-item-create';

export const Page: React.FC<RouteComponentProps> = () => {
  return (
    <PageElem>
      <LayoutAppElem>
        <LayoutElem size="small">
          <LayoutSectionElem spacing={5}>
            <OfficeItemCreateContainer />
          </LayoutSectionElem>
        </LayoutElem>
      </LayoutAppElem>
      <LayoutFooterElem>
        <DesktopMenuAppContainer />
      </LayoutFooterElem>
    </PageElem>
  );
};
