import jwtDecode from 'jwt-decode';
import { HttpRequest } from '../http';

export const setAuthorization = (tokenHash: string | null) => {
  if (!tokenHash) {
    HttpRequest.defaults.headers.common['Authorization'] = '';
  } else {
    try {
      jwtDecode(tokenHash);

      const token = `Bearer ${tokenHash}`;
      HttpRequest.defaults.headers.common['Authorization'] = token;
    } catch (err) {
      console.log(err);
    }
  }
};

export const jwtTokenDecode = (tokenHash: string) => {
  try {
    return jwtDecode(tokenHash);
  } catch (err) {
    console.log(err);
  }
};
