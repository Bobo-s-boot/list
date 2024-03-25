import { API, FORM_VALUE_INTER } from './constant';
import { HttpRequest } from '../../lib/http';

export const sendAuthLoginData = (payload: FORM_VALUE_INTER) => {
  return HttpRequest({
    method: API.MAIN.TYPE,
    url: API.MAIN.URL,
    data: payload,
  });
};
