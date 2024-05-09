import React from 'react';
import { LayoutAppElem } from '../../common/layout-app';
import { LayoutElem } from '../../common/layout';
import { PageElem } from '../../common/page';
import { RouteComponentProps } from 'react-router';

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
        <LayoutElem oneColumn>
          <OfficeItemUpdateContainer officeId={officeId} />
        </LayoutElem>
      </LayoutAppElem>
    </PageElem>
  );
};
