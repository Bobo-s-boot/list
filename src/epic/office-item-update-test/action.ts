import { API, FORM_VALUE_INTER } from './constant';
import { HttpRequest } from '../../lib/http';
import { convert as convertOfficeItemSend } from '../office-item-create/convert';

export const updateData = (id: string, payload: FORM_VALUE_INTER) => {
  return HttpRequest({
    method: API.UPDATE.TYPE,
    url: API.UPDATE.URL(id),
    data: convertOfficeItemSend(payload),
  });
};

export const getData = (id: string) => {
  return HttpRequest({
    method: API.GET.TYPE,
    url: API.GET.URL(id),
  });
};
