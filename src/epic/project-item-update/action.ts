import { API, FORM_VALUE_ENUM, FORM_VALUE_INTER } from './constant';
import { HttpRequest } from '../../lib/http';

export const updateProject = (id: string, payload: FORM_VALUE_INTER) => {
  return HttpRequest({
    method: API.UPDATE.TYPE,
    url: API.UPDATE.URL(id),
    data: payload,
  });
};
