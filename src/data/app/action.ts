import { Dispatch, LocalStore } from '../../lib/store';
import { ACTION_TYPE } from './constant';
import { preloadAuthData, updateAuthData } from '../auth/action';
import { Storage } from '@ionic/storage';
import { preloadThemeData } from '../theme/action';

let LocalStoreCreated: Storage | null = null;

const getStore = async () => {
  if (LocalStoreCreated) return LocalStoreCreated;

  LocalStoreCreated = await LocalStore.create();

  return LocalStoreCreated;
};

export const appPreloadAllLocalStateData = () => async (dispatch: Dispatch) => {
  dispatch({
    type: ACTION_TYPE.PENDING,
  });

  await getStore();

  await dispatch(preloadAuthData());

  await dispatch(updateAuthData());

  await dispatch(preloadThemeData());

  dispatch({
    type: ACTION_TYPE.SUCCESS,
  });
};

export const appSaveLocalStateData = async (name: string, data: any) => {
  const localStore = await getStore();

  await localStore.set(name, JSON.stringify(data));
};

export const appClearLocalStateData = async (name: string) => {
  const localStore = await getStore();

  await localStore.remove(name);
};

export const appLoadLocalStateData = async (name: string) => {
  const localStore = await getStore();

  const raw = await localStore.get(name);

  return JSON.parse(raw);
};
