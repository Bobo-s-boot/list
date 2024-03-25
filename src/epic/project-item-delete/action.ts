import { API } from './constant';
import { HttpRequest } from '../../lib/http';

export const action = (id: string) => {
  return HttpRequest({
    method: API.TYPE,
    url: API.URL(id),
  });
};
