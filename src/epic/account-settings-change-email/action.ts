import { API, FORM_VALUE_INTER } from './constant';
import { HttpRequest } from '../../lib/http';
import { Dispatch } from '../../lib/store';
import { updateAuthData } from '../../data/auth/action';

export const action =
  (payload: FORM_VALUE_INTER) => async (dispatch: Dispatch) => {
    return HttpRequest({
      method: API.MAIN.TYPE,
      url: API.MAIN.URL,
      data: payload,
    }).then(() => dispatch(updateAuthData()));
  };
