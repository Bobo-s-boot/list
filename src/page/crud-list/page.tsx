// В Page.tsx или другом главном файле

import React from 'react';
import { CrudProjectListItem } from '../../epic/crud-projec-list';
import { PageElem } from '../../common/page';
import { LayoutAppElem } from '../../common/layout-app';
import { Spacing } from '../../theme';
import { LayoutElem } from '../../common/layout';
import { LayoutSectionElem } from '../../common/layout-section';
import { TextElem } from '../../common/text';
import { LayoutFooterElem } from '../../common/layout-footer';
import { DesktopMenuAppContainer } from '../../epic/desktop-menu-app';

export const Page: React.FC = () => {
  return (
    <PageElem>
      <LayoutAppElem gap={`${Spacing(3)}`}>
        <LayoutElem backgroundColor="white" size="default">
          <LayoutSectionElem spacing={5}>
            <TextElem
              tid="CRUD.LIST.TITLE"
              color="textSecondary"
              type="bold"
              size="title"
            />
            <CrudProjectListItem />
          </LayoutSectionElem>
        </LayoutElem>
      </LayoutAppElem>
      <LayoutFooterElem>
        <DesktopMenuAppContainer />
      </LayoutFooterElem>
    </PageElem>
  );
};
