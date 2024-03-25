import React from 'react';

import { RouteComponentProps } from 'react-router';

import { AccountSettingsChangeEmailContainer } from '../../epic/account-settings-change-email';
import { AccountSettingsChangePasswordContainer } from '../../epic/account-settings-change-password';
import { LayoutSectionElem } from '../../common/layout-section';
import { DividerElem } from '../../common/divider';
import { HeaderContainer } from '../../epic/header';
import { LayoutFooterElem } from '../../common/layout-footer';
import { LayoutAppElem } from '../../common/layout-app';
import { LayoutElem } from '../../common/layout';
import { PageElem } from '../../common/page';
import { AccountSettingsChangePhoneContainer } from '../../epic/account-settings-change-phone';
import { AccountSettingsChangeNameContainer } from '../../epic/account-settings-change-name';
import { AccountSettingsLogoutContainer } from '../../epic/account-settings-logout';
import { DesktopMenuAppContainer } from '../../epic/desktop-menu-app';

export const Page: React.FC<RouteComponentProps> = () => {
  return (
    <PageElem>
      <LayoutAppElem>
        <HeaderContainer path title="SETTINGS.HEADER" />

        <LayoutElem size="small">
          <LayoutSectionElem spacing={5}>
            <AccountSettingsChangeEmailContainer />
            <DividerElem />
            <AccountSettingsChangePhoneContainer />
            <DividerElem />
            <AccountSettingsChangePasswordContainer />
            <DividerElem />
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
