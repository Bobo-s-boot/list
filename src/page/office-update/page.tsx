import React from 'react';

import { RouteComponentProps } from 'react-router';

import { LayoutSectionElem } from '../../common/layout-section';
import { LayoutFooterElem } from '../../common/layout-footer';
import { LayoutAppElem } from '../../common/layout-app';
import { LayoutElem } from '../../common/layout';
import { PageElem } from '../../common/page';
import { DesktopMenuAppContainer } from '../../epic/desktop-menu-app';
import { OfficeItemUpdateContainer } from '../../epic/office-item-update';

interface SessionItemPageProps
  extends RouteComponentProps<{
    officeId: string;
  }> {}

export const Page: React.FC<SessionItemPageProps> = ({ match }) => {
  const officeId = match.params.officeId;

  return (
    <PageElem>
      <LayoutAppElem>
        <LayoutElem size="small">
          <LayoutSectionElem spacing={5}>
            <OfficeItemUpdateContainer officeId={officeId} />
          </LayoutSectionElem>
        </LayoutElem>
      </LayoutAppElem>
      <LayoutFooterElem>
        <DesktopMenuAppContainer />
      </LayoutFooterElem>
    </PageElem>
  );
};
