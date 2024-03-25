import { Dispatch, GetState } from '../../lib/store';
import {
  ACTION_TYPE,
  LOCAL_STORE_INTER,
  MODULE_NAME,
  STORE_INTER,
  THEME_ENUM,
} from './constant';
import { THEME_TYPE } from '../theme/constant';
import { appLoadLocalStateData, appSaveLocalStateData } from '../app';

export const changeThemeData =
  (data: THEME_TYPE) => async (dispatch: Dispatch, getState: GetState) => {
    const store: STORE_INTER = getState()[MODULE_NAME];

    const newThemeData: STORE_INTER = {
      ...store,
      isSystem: false,
      type: data,
    };
    await appSaveLocalStateData(MODULE_NAME, {
      theme: { ...newThemeData },
    });

    return dispatch({
      type: ACTION_TYPE.CHANGE_THEME,
      data: { ...newThemeData },
    });
  };

export const initThemeData =
  (isDark: boolean) => async (dispatch: Dispatch, getState: GetState) => {
    let store: STORE_INTER;
    if (await appLoadLocalStateData(MODULE_NAME)) {
      const localStore: LOCAL_STORE_INTER = await appLoadLocalStateData(
        MODULE_NAME,
      );
      store = localStore.theme;
    } else {
      store = await getState()[MODULE_NAME];
    }
    const newThemeData: STORE_INTER = {
      ...store,
      type: isDark ? THEME_ENUM.DARK : THEME_ENUM.LIGHT,
    };

    await appSaveLocalStateData(MODULE_NAME, {
      theme: { ...newThemeData },
    });

    return dispatch({
      type: ACTION_TYPE.INIT_THEME,
      data: { ...newThemeData },
    });
  };

export const initSystemThemeType =
  (isDark: boolean) => async (dispatch: Dispatch, getState: GetState) => {
    let store: STORE_INTER;
    if (await appLoadLocalStateData(MODULE_NAME)) {
      const localStore: LOCAL_STORE_INTER = await appLoadLocalStateData(
        MODULE_NAME,
      );
      store = localStore.theme;
    } else {
      store = await getState()[MODULE_NAME];
    }
    const newThemeData: STORE_INTER = {
      ...store,
      systemType: isDark ? THEME_ENUM.DARK : THEME_ENUM.LIGHT,
    };

    await appSaveLocalStateData(MODULE_NAME, { theme: { ...newThemeData } });
    return dispatch({
      type: ACTION_TYPE.INIT_SYSTEM_TYPE,
      data: { ...newThemeData },
    });
  };

export const activeSystem =
  () => async (dispatch: Dispatch, getState: GetState) => {
    const store: STORE_INTER = await getState()[MODULE_NAME];
    const newThemeData: STORE_INTER = {
      ...store,
      isSystem: true,
    };

    await appSaveLocalStateData(MODULE_NAME, {
      theme: { ...newThemeData },
    });
    return dispatch({
      type: ACTION_TYPE.ACTIVE_SYSTEM,
      data: { ...newThemeData },
    });
  };

export const preloadThemeData = () => async (dispatch: Dispatch) => {
  const storeData: LOCAL_STORE_INTER = await appLoadLocalStateData(MODULE_NAME);
  if (storeData.theme) {
    return dispatch({
      type: ACTION_TYPE.SET_DATA,

      data: {
        ...storeData.theme,
      },
    });
  }
};
