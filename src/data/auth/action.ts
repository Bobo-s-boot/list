import { Dispatch, GetState } from '../../lib/store';
import {
  ACTION_DATA_INTER,
  ACTION_TYPE,
  LOCAL_STORE_INTER,
  META_DATA_INTER,
  MODULE_NAME,
  STORE_INTER,
  API,
  GET_TOKEN_ACTION_RESPONSE_INTER,
  USER_DATA_INTER,
} from './constant';
import { jwtTokenDecode, setAuthorization } from '../../lib/jwt';
import { appLoadLocalStateData, appSaveLocalStateData } from '../app';
import { AUTH_MODULE_NAME } from './index';
import { HttpRequest } from '../../lib/http';

export const setAuthData = (jwtToken: string) => async (dispatch: Dispatch) => {
  const jwtData: any = jwtTokenDecode(jwtToken);
  const storeData: LOCAL_STORE_INTER = await appLoadLocalStateData(MODULE_NAME);

  if (jwtData) {
    setAuthorization(jwtToken);

    const data: ACTION_DATA_INTER = {
      user: {
        ...jwtData,
      },
      meta: {
        haveLogin: true,

        haveWellcome: storeData?.meta?.haveWellcome,
      },
    };
    const localStateData: LOCAL_STORE_INTER = {
      token: jwtToken,
      user: data.user,
      meta: data.meta,
    };

    await appSaveLocalStateData(MODULE_NAME, localStateData);

    return dispatch({
      type: ACTION_TYPE.SET_DATA,
      data,
    });
  }
};

export const resetAuthData =
  () => async (dispatch: Dispatch, getState: GetState) => {
    setAuthorization(null);

    const store: STORE_INTER = await getState()[AUTH_MODULE_NAME];

    const localStateData: LOCAL_STORE_INTER = {
      token: null,
      user: null,
      meta: {
        ...store.meta,
      },
    };

    await appSaveLocalStateData(MODULE_NAME, localStateData);

    return dispatch({
      type: ACTION_TYPE.CLEAR_DATA,
    });
  };

export const setAuthHaveWellcomeData =
  () => async (dispatch: Dispatch, getState: GetState) => {
    const store: STORE_INTER = await getState()[AUTH_MODULE_NAME];

    const newMetadata: META_DATA_INTER = {
      ...store.meta,
      haveWellcome: true,
    };

    const localStoreData = await appLoadLocalStateData(MODULE_NAME);

    await appSaveLocalStateData(MODULE_NAME, {
      ...localStoreData,
      meta: {
        ...newMetadata,
      },
    });

    return dispatch({
      type: ACTION_TYPE.SET_META_DATA,
      data: {
        meta: newMetadata,
      },
    });
  };

export const updateAuthData = () => async (dispatch: Dispatch) => {
  try {
    const resData: any = await HttpRequest({
      method: API.GET_TOKEN.TYPE,
      url: API.GET_TOKEN.URL,
    });

    const data = resData as GET_TOKEN_ACTION_RESPONSE_INTER;

    await dispatch(setAuthData(data.accessToken));
  } catch (e) {
    console.log(String(e));
  }
};

export const preloadAuthData = () => async (dispatch: Dispatch) => {
  const storeData: LOCAL_STORE_INTER = await appLoadLocalStateData(MODULE_NAME);
  console.warn('LOCAL STORE LOADED', storeData);

  if (storeData) {
    if (storeData.token) {
      setAuthorization(storeData.token);
    }

    return dispatch({
      type: ACTION_TYPE.SET_DATA,

      data: {
        user: storeData?.user,
        meta: storeData?.meta,
      },
    });
  }
};
