import { HttpRequest } from '../../lib/http';
import { API } from './constant';

export const getWebinarList = () => {
  return HttpRequest({
    method: API.LIST.TYPE,
    url: API.LIST.URL,
  });
};
