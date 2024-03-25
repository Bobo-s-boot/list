import { defaultRequestStateDto } from '../../lib/store/service';
import { THEME_TYPE } from '../theme/constant';

export const MODULE_NAME = 'APP_MODULE_NAME';

export const ACTION_TYPE = {
  PENDING: `${MODULE_NAME}.PENDING`,
  SUCCESS: `${MODULE_NAME}.SUCCESS`,
  UPDATING: `${MODULE_NAME}.UPDATING`,
  UPDATED: `${MODULE_NAME}.UPDATED`,
};

export interface STORE_INTER {
  request: defaultRequestStateDto;
}
