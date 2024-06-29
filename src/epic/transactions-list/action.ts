import { HttpRequest } from '../../lib/http';
import { API } from './constant';

export const action = ({ search, type, project, pageParam }: any) => {
  let params = '?';

  if (search) {
    params += `name=${search}`;
  }

  if (type) {
    params += `&type=${type}`;
  }

  if (project) {
    project?.map((item: any) => (params += `&project=${item.value}`));
  }

  if (pageParam) {
    params += `&skip${pageParam}`;
  }

  return HttpRequest({
    method: API.TYPE,
    url: API.URL(params),
  });
};
