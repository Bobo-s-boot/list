import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Switch } from 'react-router';
import { SettingsPage, SETTINGS_PAGE_PATH } from '../settings';

import { useSelector } from '../../lib/store';
import { AUTH_MODULE_NAME } from '../../data/auth';

import {
  AUTH_RECOVERY_CONFIRM_PAGE_PATH,
  AuthRecoveryConfirmPage,
} from '../auth-recovery-confirm';

import {
  AUTH_RECOVERY_PASSWORD_PAGE_PATH,
  AuthRecoveryPasswordPage,
} from '../auth-recovery-password';

import { STORE_INTER, USER_ROLE } from '../../data/auth/constant';

import { AUTH_LOGIN_PAGE_PATH, AuthLoginPage } from '../auth-login';
import { AUTH_RECOVERY_PAGE_PATH, AuthRecoveryPage } from '../auth-recovery';
import { AUTH_SIGNUP_PAGE_PATH, AuthSignupPage } from '../auth-signup';
import {
  AUTH_VERIFICATION_PHONE_PAGE_PATH,
  AuthVerificationPhonePage,
} from '../auth-verification-phone';
import { WELLCOME_PAGE_PATH, WellcomePage } from '../wellcome';
import { PROJECT_PAGE_PATH, ProjectPage } from '../project';
import {
  AUTH_VERIFICATION_EMAIL_PAGE_PATH,
  AuthVerificationEmailPage,
} from '../auth-verification-email';

export const Page: React.FC = () => {
  const state: STORE_INTER = useSelector((s) => s[AUTH_MODULE_NAME]);

  const isLogged = () => state.logged;
  const isConfirmEmail = () => state?.isConfirmEmail;
  const isConfirmPhone = () => state?.isConfirmPhone;

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {isLogged() ? (
            <Switch>
              <Route path={SETTINGS_PAGE_PATH} component={SettingsPage} exact />
              <Route path={PROJECT_PAGE_PATH} component={ProjectPage} exact />
              <Route
                path={AUTH_VERIFICATION_PHONE_PAGE_PATH}
                component={AuthVerificationPhonePage}
                exact
              />

              <Route
                path={AUTH_VERIFICATION_EMAIL_PAGE_PATH}
                component={AuthVerificationEmailPage}
                exact
              />

              {!isConfirmEmail() && (
                <Redirect to={AUTH_VERIFICATION_EMAIL_PAGE_PATH} />
              )}

              {!isConfirmPhone() && (
                <Redirect to={AUTH_VERIFICATION_PHONE_PAGE_PATH} />
              )}

              <Redirect to={PROJECT_PAGE_PATH} />
            </Switch>
          ) : (
            <Switch>
              <Route path={WELLCOME_PAGE_PATH} component={WellcomePage} exact />
              <Route
                path={AUTH_LOGIN_PAGE_PATH}
                component={AuthLoginPage}
                exact
              />
              <Route
                path={AUTH_RECOVERY_PAGE_PATH}
                component={AuthRecoveryPage}
                exact
              />

              <Route
                path={AUTH_RECOVERY_CONFIRM_PAGE_PATH}
                component={AuthRecoveryConfirmPage}
                exact
              />
              <Route
                path={AUTH_RECOVERY_PASSWORD_PAGE_PATH}
                component={AuthRecoveryPasswordPage}
                exact
              />
              <Route
                path={AUTH_SIGNUP_PAGE_PATH}
                component={AuthSignupPage}
                exact
              />
              <Redirect to={AUTH_LOGIN_PAGE_PATH} />
            </Switch>
          )}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};
