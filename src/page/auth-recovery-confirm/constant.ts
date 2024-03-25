export const PAGE_PATH = '/auth/recovery-confirm';
export const PAGE_PATH_DYNAMIC = (email: string) =>
  `/auth/recovery-confirm?email=${email}`;
