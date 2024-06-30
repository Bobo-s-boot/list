import { HttpRequest } from '../../lib/http';
import { API } from './constant';

export const action = (TRANSACTIONSId: string) => {

  return HttpRequest({
    method: API.TYPE,
    url: API.URL(TRANSACTIONSId),
  });
};
