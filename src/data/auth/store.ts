import { ACTION_DATA_INTER, ACTION_TYPE, STORE_INTER } from './constant';
import { ActionData } from '../../lib/store/core';

const initialState: STORE_INTER = {
  logged: null,
  isConfirmEmail: null,
  isConfirmPhone: null,
  user: null,
  meta: null,
};

export function Store(
  state = initialState,
  action: ActionData<ACTION_DATA_INTER>,
) {
  switch (action.type) {
    case ACTION_TYPE.SET_DATA:
      return {
        ...state,
        logged: !!action.data.user,
        isConfirmPhone: action.data.user?.confirmPhone,
        isConfirmEmail: action.data.user?.confirmEmail,
        user: action.data.user,
        meta: action.data.meta,
      };
    case ACTION_TYPE.SET_META_DATA:
      return {
        ...state,
        meta: action.data,
      };

    case ACTION_TYPE.CLEAR_DATA:
      return {
        ...initialState,
      };

    default:
      return state;
  }
}
