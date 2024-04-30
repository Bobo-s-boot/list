import React, { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';

import { GridElem } from '../../common/grid';

import { View } from './view';

import { Spacing } from '../../theme';
import { THEME_ENUM } from '../../data/theme/constant';

import settingIcon from '../../asset/svg/menu-app/setting.svg';
import settingActiveIcon from '../../asset/svg/menu-app/setting-active.svg';

import projectIcon from '../../asset/svg/menu-app/project.svg';
import projectActiveIcon from '../../asset/svg/menu-app/project-active.svg';
import { SETTINGS_PAGE_PATH } from '../../page/settings';
import { AUTH_MODULE_NAME } from '../../data/auth';
import { useSelector } from '../../lib/store';
import { DividerElem } from '../../common/divider';
import { COLOR_ENUM } from '../../theme/color';
import { AccountSettingsLogoutContainer } from '../account-settings-logout';
import { ThemeChangeContainer } from '../theme-change';
import { PROJECT_PAGE_PATH } from '../../page/project';

export const Component: React.FC<{
  isActivePath: Function;
  theme: THEME_ENUM;
  pathname: any;
}> = ({ isActivePath, theme }) => {
  return (
    <Container>
      <Content spacing={0}>
        <IconContainer />
        <DividerElem />
        <PageContainer spacing={0}>
          <GridElem spacing={1}>
            <View
              href={PROJECT_PAGE_PATH}
              title="NAVIGATION.TAB_APP.PROJECT"
              icon={projectIcon}
              iconActive={projectActiveIcon}
              isActive={isActivePath(PROJECT_PAGE_PATH)}
            />
          </GridElem>
          <ThemeContainer>
            <ThemeChangeContainer />
          </ThemeContainer>
        </PageContainer>
        <DividerElem />
        <SettingsContainer>
          <View
            href={SETTINGS_PAGE_PATH}
            title="NAVIGATION.TAB_APP.SETTINGS"
            icon={settingIcon}
            iconActive={settingActiveIcon}
            isActive={isActivePath(SETTINGS_PAGE_PATH)}
          />
          <AccountSettingsLogoutContainer />
        </SettingsContainer>
      </Content>
    </Container>
  );
};

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${Spacing(12)};
  padding-bottom: ${Spacing(8)};
`;

const Content = styled(GridElem)`
  width: 270px;
  border-right: 1px solid ${({ theme }) => theme[COLOR_ENUM.DIVIDER]};
  background: ${({ theme }) => theme[COLOR_ENUM.WHITE]};

  grid-template-rows: min-content 1px auto 1px min-content;
  height: 100vh;
  position: fixed;
`;

const SettingsContainer = styled(GridElem)`
  padding: ${Spacing(8)} ${Spacing(7)} ${Spacing(6)};
`;

const ThemeContainer = styled.div`
  padding-left: ${Spacing(3)};
`;

const PageContainer = styled(GridElem)`
  padding: ${Spacing(8)} ${Spacing(7)} ${Spacing(6)};
  height: 100%;
  align-content: space-between;
`;

const Container = styled.div`
  grid-row: 1/3;
`;
