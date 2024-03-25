import axios from 'axios';

import { BASE_URL } from './constant';
import { i18n } from '../lang';

const isDev = process.env.NODE_ENV !== 'production';

export const HttpRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 200000,
});

const onResponseSuccess = (response: any) => {
  return response.data;
};

const onResponseError = async (error: { response: any }) => {
  if (isDev) {
    console.log('ERROR HTTP', error);
  }

  if (!error.response) {
    error.response.data.message = 'CLIENT_ERROR';
  }

  if (error.response) {
    error.response.data.message =
      error.response.data.message || 'ERROR_UNDEFINED';

    if (error.response.status === 401) {
      error.response.data.message =
        String(error.response.data.message) || '401';
    }

    if (error.response.status === 403) {
      error.response.data.message =
        String(error.response.data.message) || '403';
    }

    if (error.response.status === 500) {
      error.response.data.message =
        String(error.response.data.message) || '500';
    }

    if (error.response.status === 404) {
      error.response.data.message =
        String(error.response.data.message) || '404';
    }

    if (typeof error.response.data.message === 'string') {
      error.response.data.message = i18n.t(
        `ERROR.${error.response.data.message}`,
      );
    } else {
      error.response.data.message = String(error.response.data.message);
    }
  }

  await Promise.reject(error.response.data);
};

HttpRequest.interceptors.response.use(onResponseSuccess, onResponseError);
