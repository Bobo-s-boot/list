import { AnyAction } from 'redux';

import {
  useDispatch as useDispatchOrigin,
  useSelector as useSelectorOrigin,
  TypedUseSelectorHook,
} from 'react-redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { reducers, store } from './index';

/* Types */
export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof reducers>;
export type Dispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type Action<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
export const useDispatch = () => useDispatchOrigin<Dispatch>();
export const useSelector: TypedUseSelectorHook<ReduxState> = useSelectorOrigin;

export type ActionData<T> = {
  type: string;
  data: T;
};

export type GetState = () => ReduxState;
