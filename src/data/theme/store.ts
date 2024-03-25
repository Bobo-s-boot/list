import { ACTION_TYPE, STORE_INTER } from './constant';
import { ActionData } from '../../lib/store/core';
import { THEME_ENUM } from '../theme/constant';

const initialState: STORE_INTER = {
  type: THEME_ENUM.LIGHT,
  isSystem: true,
  systemType: null,
};

export function Store(state = initialState, action: ActionData<{}>) {
  switch (action.type) {
    case ACTION_TYPE.INIT_THEME:
      return {
        ...action.data,
      };

    case ACTION_TYPE.CHANGE_THEME:
      return {
        ...action.data,
      };

    case ACTION_TYPE.SET_DATA:
      return {
        ...action.data,
      };
    case ACTION_TYPE.ACTIVE_SYSTEM:
      return {
        ...action.data,
      };
    case ACTION_TYPE.INIT_SYSTEM_TYPE:
      return {
        ...action.data,
      };

    default:
      return state;
  }
}
