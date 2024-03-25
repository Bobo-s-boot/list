import { HttpRequest } from '../../lib/http';
import { API } from './constant';

export const getProjectList = () => {
  return HttpRequest({
    method: API.LIST.TYPE,
    url: API.LIST.URL,
  });
};
