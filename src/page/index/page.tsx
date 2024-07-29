import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Switch } from 'react-router';

import { useSelector } from '../../lib/store';
import { AUTH_MODULE_NAME } from '../../data/auth';
import { STORE_INTER, USER_ROLE } from '../../data/auth/constant';

import { SettingsPage, SETTINGS_PAGE_PATH } from '../settings';
import {
  AUTH_RECOVERY_CONFIRM_PAGE_PATH,
  AuthRecoveryConfirmPage,
} from '../auth-recovery-confirm';
import {
  AUTH_RECOVERY_PASSWORD_PAGE_PATH,
  AuthRecoveryPasswordPage,
} from '../auth-recovery-password';
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
// import { OFFICE_PAGE_PATH, OfficePage } from '../office-list';
// import { OFFICE_CREATE_PAGE_PATH, OfficeCreatePage } from '../office-create';
// import {
//   OFFICE_ITEM_UPDATE_PAGE_PATH,
//   OfficeItemUpdatePage,
// } from '../office-update';

import { CRUD_PAGE_PATH, CrudListPage } from '../crud-list';
import { CRUD_CREATE_PAGE_PATH, CrudCreatePage } from '../crud-create';
import { CRUD_UPDATE_PAGE_PATH, CrudItemUpdatePage } from '../crud-update';

import { TRANSACTIONS_PAGE_PATH, TransactionsPage } from '../transactions-list';
import { from } from 'rxjs';

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
              {/* <Route path={OFFICE_PAGE_PATH} component={OfficePage} exact /> */}

              <Route path={CRUD_PAGE_PATH} component={CrudListPage} exact />

              <Route
                path={TRANSACTIONS_PAGE_PATH}
                component={TransactionsPage}
                exact
              />
              {/* <Route
                path={OFFICE_CREATE_PAGE_PATH}
                component={OfficeCreatePage}
                exact
              /> */}

              <Route
                path={CRUD_CREATE_PAGE_PATH}
                component={CrudCreatePage}
                exact
              />

              {/* <Route
                path={OFFICE_ITEM_UPDATE_PAGE_PATH}
                component={OfficeItemUpdatePage}
                exact
              /> */}

              <Route
                path={CRUD_UPDATE_PAGE_PATH}
                component={CrudItemUpdatePage}
                exact
              />

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
