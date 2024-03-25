import { HttpRequest } from '../../lib/http';
import { API } from './constant';

export const getUserList = () => {
  return HttpRequest({
    method: API.LIST.TYPE,
    url: API.LIST.URL,
  });
};
