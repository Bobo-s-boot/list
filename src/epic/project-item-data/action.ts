import { API } from './constant';
import { HttpRequest } from '../../lib/http';

export const getProject = (id: string) => {
  return HttpRequest({
    method: API.GET.TYPE,
    url: API.GET.URL(id),
  });
};
