import { LocalStore } from './index';

export const setLocalData = async (key: string, value: any) => {
  return LocalStore.set(key, JSON.stringify(value));
};

export const getLocalData = async (key: string) => {
  const data = await LocalStore.get(key);

  if (data) {
    return JSON.parse(data);
  }

  return null;
};

// Initital state

export interface defaultRequestStateDto {
  pending?: boolean | null;
  success?: boolean | null;
  error?: boolean | null;
  errorMessage?: string | null;
  updating?: boolean | null;
  updated?: boolean | null;
  data?: any | null;
}

const defaultRequestState: defaultRequestStateDto = {
  pending: null,
  success: null,
  error: null,
  errorMessage: null,
  updating: null,
  updated: null,
};

export const initRequestState = (data = null, additional = null) => ({
  ...defaultRequestState,
  data: null,
  ...(data ? { data: data } : null),
  ...(additional ? { additional } : null),
});

export const setRequestPending = (state: defaultRequestStateDto) => {
  state.error = defaultRequestState.error;
  state.errorMessage = defaultRequestState.errorMessage;
  state.success = defaultRequestState.success;
  state.pending = true;
  state.updated = false;
  state.updating = false;
  return state;
};

export const setRequestSuccess = (
  state: defaultRequestStateDto,
  data = null,
) => {
  state.error = false;
  state.errorMessage = null;
  state.success = true;
  state.pending = false;
  state.updated = false;
  state.updating = false;

  if (data) {
    state.data = data;
  }

  return state;
};

export const setRequestError = (
  state: defaultRequestStateDto,
  message: string | null = null,
) => {
  state.error = true;
  state.updated = false;
  state.updating = false;
  state.success = false;
  state.pending = false;

  if (message) {
    if (Array.isArray(message)) {
      state.errorMessage = message.join(', ');
    } else {
      state.errorMessage = String(message);
    }
  }

  return state;
};

export const setRequestUpdatePending = (state: defaultRequestStateDto) => {
  state.error = defaultRequestState.error;
  state.errorMessage = defaultRequestState.errorMessage;
  state.updating = true;
  state.updated = false;
  return state;
};

export const resetRequestStatus = (state: defaultRequestStateDto) => {
  state.error = defaultRequestState.error;
  state.errorMessage = defaultRequestState.errorMessage;
  state.success = defaultRequestState.success;
  state.pending = defaultRequestState.pending;
  state.updated = defaultRequestState.updated;
  state.updating = defaultRequestState.updating;

  return state;
};
export const resetRequestErrorStatus = (state: defaultRequestStateDto) => {
  state.error = null;
  state.errorMessage = null;

  return state;
};

export const updateRequestData = (state: defaultRequestStateDto, data: any) => {
  state.data = { ...state.data, ...data };

  return state;
};

export const setRequestUpdateSuccess = (
  state: defaultRequestStateDto,
  data = null,
) => {
  state.updating = false;
  state.updated = true;

  if (data) {
    state = updateRequestData(state, data);
  }

  return state;
};

export const editRequestData = (
  state: defaultRequestStateDto,
  fn: (p: any) => {},
) => {
  state.data = fn(state.data);
  return state;
};

export const isRequestPending = (state: defaultRequestStateDto = {}) =>
  !!state.pending;

export const isRequestSuccess = (state: defaultRequestStateDto = {}) =>
  !!state.success;

export const isRequestError = (state: defaultRequestStateDto = {}) =>
  !!state.error;

export const isRequestUpdatePending = (state: defaultRequestStateDto = {}) =>
  !!state.updating;

export const isRequestUpdateSuccess = (state: defaultRequestStateDto = {}) =>
  !!state.updated;

export const getRequestData = (
  state: defaultRequestStateDto = {},
  defaultValue = {},
) => state.data || defaultValue;

export const getRequestErrorMessage = (state: defaultRequestStateDto = {}) =>
  state.errorMessage || null;
