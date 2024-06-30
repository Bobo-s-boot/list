import { HttpRequest } from '../../lib/http';
import { API } from './constant';

export const action = (transitionId: string) => {

  return HttpRequest({
    method: API.TYPE,
    url: API.URL(transitionId),
  });
};
