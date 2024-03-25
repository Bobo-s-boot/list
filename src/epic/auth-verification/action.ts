import { API, CODE_VALUE_INTER } from './constant';
import { HttpRequest } from '../../lib/http';
import { updateAuthData } from '../../data/auth/action';
import { Dispatch } from '../../lib/store';
import { AUTH_TYPE } from '../../data/auth/constant';

export const action = (type: AUTH_TYPE) => {
  return HttpRequest({
    method: API.GET_CODE.TYPE,
    url: API.GET_CODE.URL(type),
  });
};

export const confirmAccount =
  (payload: CODE_VALUE_INTER, type: AUTH_TYPE) =>
  async (dispatch: Dispatch) => {
    return HttpRequest({
      method: API.CONFIRM.TYPE,
      url: API.CONFIRM.URL(type),
      data: payload,
    }).then(() => dispatch(updateAuthData()));
  };
