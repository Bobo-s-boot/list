import { API } from './constant';
import { HttpRequest } from '../../lib/http';

export const resendCode = () => {
  return HttpRequest({
    method: API.MAIN.TYPE,
    url: API.MAIN.URL,
  });
};
