// @ts-nocheck

import { AxiosError } from 'axios';

const isDev = process.env.NODE_ENV !== 'production';

export const handleResponseError = (
  error: AxiosError,
  cb: (obj: object) => {},
) => {
  if (isDev) {
    console.log('ERROR HTTP', error);
  }

  if (!error.response) {
    return cb({
      message: 'CLIENT_ERROR',
    });
  }

  if (error.response) {
    if (error.response.status === 401) {
      return cb({
        ...error.response.data,
        message: error.response.data.message || '401',
      });
    }

    if (error.response.status === 403) {
      return cb({
        ...error.response.data,
        message: error.response.data.message || '403',
      });
    }

    if (error.response.status === 500) {
      return cb({
        ...error.response.data,
        message: error.response.data.message || '500',
      });
    }

    if (error.response.status === 404) {
      return cb({
        ...error.response.data,
        message: error.response.data.message || '404',
      });
    }
  }
};
