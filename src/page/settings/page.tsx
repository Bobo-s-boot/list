import React from 'react';

import { RouteComponentProps } from 'react-router';

import { AccountSettingsChangeEmailContainer } from '../../epic/account-settings-change-email';
import { AccountSettingsChangePasswordContainer } from '../../epic/account-settings-change-password';
import { LayoutSectionElem } from '../../common/layout-section';
import { LayoutFooterElem } from '../../common/layout-footer';
import { LayoutAppElem } from '../../common/layout-app';
import { LayoutElem } from '../../common/layout';
import { PageElem } from '../../common/page';
import { AccountSettingsChangePhoneContainer } from '../../epic/account-settings-change-phone';
import { AccountSettingsChangeNameContainer } from '../../epic/account-settings-change-name';
import { DesktopMenuAppContainer } from '../../epic/desktop-menu-app';
import { HeaderContainer } from '../../epic/header';
import { TextElem } from '../../common/text';

export const Page: React.FC<RouteComponentProps> = () => {
  return (
    <PageElem>
      <LayoutAppElem>
        {/* <HeaderContainer title="PROJECT.LIST.HEADER" size="default" /> */}
        <LayoutElem size="default">
          <LayoutSectionElem spacing={8}>
            <TextElem
              tid="SETTINGS.HEADER"
              color="textSecondary"
              type="bold"
              size="title"
            />
            <AccountSettingsChangeEmailContainer />
            <AccountSettingsChangePhoneContainer />
            <AccountSettingsChangePasswordContainer />
            <AccountSettingsChangeNameContainer />
          </LayoutSectionElem>
        </LayoutElem>
      </LayoutAppElem>
      <LayoutFooterElem>
        <DesktopMenuAppContainer />
      </LayoutFooterElem>
    </PageElem>
  );
};
