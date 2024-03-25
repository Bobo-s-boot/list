import queryString from 'query-string';
import { useLocation } from 'react-router';

export const getQuery = (queryProperty: any) => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const queryValue = query[queryProperty];
  return queryValue ? queryValue : '';
};
