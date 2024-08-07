import React from 'react';
import { RouteComponentProps } from 'react-router';
import { LayoutSectionElem } from '../../common/layout-section';
import { LayoutFooterElem } from '../../common/layout-footer';
import { LayoutAppElem } from '../../common/layout-app';
import { LayoutElem } from '../../common/layout';
import { PageElem } from '../../common/page';
import { DesktopMenuAppContainer } from '../../epic/desktop-menu-app';
import { CrudItemCreateContainer } from '../../epic/crud-item-create';
import { TextElem } from '../../common/text';

export const Page: React.FC<RouteComponentProps> = () => {
  return (
    <PageElem>
      <LayoutAppElem>
        <LayoutElem size="default">
          <LayoutSectionElem spacing={8}>
            <TextElem
              tid="CRUD.CREATE.BUTTON.CREATE"
              color="textSecondary"
              type="bold"
              size="title"
            />
            <LayoutSectionElem spacing={5}>
              <CrudItemCreateContainer />
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
