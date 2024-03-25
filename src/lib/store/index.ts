import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { Storage } from '@ionic/storage';

import { AUTH_MODULE_NAME, AuthStore } from '../../data/auth';
import { AppStore, APP_MODULE_NAME } from '../../data/app';

import { ThemeStore, THEME_MODULE_NAME } from '../../data/theme';

export const LocalStore = new Storage();

const initialState = {};

export const reducers = combineReducers({
  [AUTH_MODULE_NAME]: AuthStore,
  [APP_MODULE_NAME]: AppStore,
  [THEME_MODULE_NAME]: ThemeStore,
});

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);
export { useDispatch } from './core';
export { useSelector } from './core';
export type { Action, Dispatch, GetState } from './core';
