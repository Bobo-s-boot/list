import { AUTH_TYPE } from './constant';

export const convertAuthDataToType = (data: any): any => {
  if (data.type === AUTH_TYPE.EMAIL) {
    delete data.phone;
  }
  if (data.type === AUTH_TYPE.PHONE) {
    delete data.email;
  }

  return data;
};
