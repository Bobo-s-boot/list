import { ACTION_TYPE, STORE_INTER } from './constant';
import { ActionData } from '../../lib/store/core';
import {
  initRequestState,
  setRequestPending,
  setRequestSuccess,
} from '../../lib/store/service';

const initialState: STORE_INTER = {
  request: initRequestState(),
};

export function Store(state = initialState, action: ActionData<{}>) {
  switch (action.type) {
    case ACTION_TYPE.PENDING:
      return {
        ...state,
        request: setRequestPending(state.request),
      };

    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        request: setRequestSuccess(state.request),
      };

    default:
      return state;
  }
}
