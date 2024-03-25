import React from 'react';

import { LayoutSectionElem } from '../../common/layout-section';
import { HeaderContainer } from '../../epic/header';
import { LayoutAppElem } from '../../common/layout-app';
import { LayoutElem } from '../../common/layout';
import { PageElem } from '../../common/page';

import { LayoutFooterElem } from '../../common/layout-footer';
import { ProjectListContainer } from '../../epic/project-list';
import { DesktopMenuAppContainer } from '../../epic/desktop-menu-app';

export const Page: React.FC = () => {
  return (
    <PageElem>
      <LayoutAppElem>
        <HeaderContainer title="PROJECT.LIST.HEADER" size="default" />
        <LayoutElem size="default">
          <LayoutSectionElem spacing={5}>
            <ProjectListContainer />
          </LayoutSectionElem>
        </LayoutElem>
      </LayoutAppElem>
      <LayoutFooterElem>
        <DesktopMenuAppContainer />
      </LayoutFooterElem>
    </PageElem>
  );
};
