import React from 'react';

import { LayoutSectionElem } from '../../common/layout-section';
import { HeaderContainer } from '../../epic/header';
import { LayoutAppElem } from '../../common/layout-app';
import { LayoutElem } from '../../common/layout';
import { PageElem } from '../../common/page';

import { LayoutFooterElem } from '../../common/layout-footer';
import { OfficeListContainer } from '../../epic/office-list';
import { DesktopMenuAppContainer } from '../../epic/desktop-menu-app';
import { TextElem } from '../../common/text';
import { Spacing } from '../../theme';

export const Page: React.FC = () => {
  return (
    <PageElem>
      <LayoutAppElem gap={`${Spacing(3)}`}>
        {/* <HeaderContainer title="PROJECT.LIST.HEADER" size="default" /> */}
        <LayoutElem backgroundColor="white" size="default">
          <LayoutSectionElem spacing={5}>
            <TextElem
              tid="OFFICE.LIST.TITLE"
              color="textSecondary"
              type="bold"
              size="title"
            />
            <OfficeListContainer />
          </LayoutSectionElem>
        </LayoutElem>
      </LayoutAppElem>
      <LayoutFooterElem>
        <DesktopMenuAppContainer />
      </LayoutFooterElem>
    </PageElem>
  );
};
