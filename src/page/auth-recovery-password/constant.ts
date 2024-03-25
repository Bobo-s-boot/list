export const PAGE_PATH = '/auth/recovery-password';
export const PAGE_PATH_DYNAMIC = (code: string) =>
  `/auth/recovery-password?code=${code}`;
