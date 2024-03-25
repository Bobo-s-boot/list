import React from 'react';

import { RouteComponentProps } from 'react-router';
import { WellcomeContainer, WELLCOME_MODULE_NAME } from '../../epic/wellcome';

import { PageElem } from '../../common/page';
import { LayoutAppElem } from '../../common/layout-app';

export const Page: React.FC<RouteComponentProps> = () => {
  return (
    <PageElem>
      <LayoutAppElem oneColumn>
        <WellcomeContainer />
      </LayoutAppElem>
    </PageElem>
  );
};
