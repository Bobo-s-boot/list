import { HttpRequest } from '../../lib/http';
import { API } from './constant';

export const action = ({
  sessionId,
  category,
  search,
  fromDate,
  toDate,
  session,
  pageParam,
}: any) => {
  let params = '';
  if (search) params += `&search=${search}`;
  if (category) params += `&${category}`;
  if (fromDate) params += `&fromDate=${fromDate}`;
  if (toDate) params += `&toDate=${toDate}`;
  // if (session) params += `&session=${session}`;
  if (pageParam) params += `&skip${pageParam}`;

  return HttpRequest({
    method: API.TYPE,
    url: API.URL(sessionId, params),
  });
};
