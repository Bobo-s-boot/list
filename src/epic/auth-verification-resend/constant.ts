export const MODULE_NAME = 'AUTH_VERIFICATION_RESEND_MODULE_NAME';

export const ACTION_TYPE = {
  REQUEST_PENDING: `${MODULE_NAME}.REQUEST_PENDING`,
};

export const API = {
  MAIN: {
    TYPE: 'GET',
    URL: '/user-verification/email',
  },
};

export interface ACTION_RESPONSE_INTER {}

export interface ACTION_ERROR_INTER {
  error: string;
  message: string;
  statusCode: string;
}
