import { API, FORM_VALUE_INTER } from './constant';
import { HttpRequest } from '../../lib/http';

export const action = (payload: FORM_VALUE_INTER) => {
  return HttpRequest({
    method: API.TYPE,
    url: API.URL,
    data: payload,
  });
};
