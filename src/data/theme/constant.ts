export enum THEME_ENUM {
  LIGHT = 0,
  DARK = 1,
}

export type THEME_TYPE = THEME_ENUM.LIGHT | THEME_ENUM.DARK;

export const MODULE_NAME = 'TMEME_MODULE_NAME';

export const ACTION_TYPE = {
  INIT_THEME: `${MODULE_NAME}.INIT_THEME`,
  CHANGE_THEME: `${MODULE_NAME}.CHANGE_THEME`,
  SET_DATA: `${MODULE_NAME}.SET_DATA`,
  ACTIVE_SYSTEM: `${MODULE_NAME}.ACTIVE_SYSTEM`,
  INIT_SYSTEM_TYPE: `${MODULE_NAME}.INIT_SYSTEM_TYPE`,
};

export interface STORE_INTER {
  type: THEME_TYPE;
  isSystem: boolean;
  systemType: THEME_TYPE | null;
}

export enum DETECTION_THEME_TYPE {
  true = THEME_ENUM.DARK,
  false = THEME_ENUM.LIGHT,
}

export interface LOCAL_STORE_INTER {
  theme: {
    type: THEME_TYPE;
    isSystem: boolean;
    systemType: THEME_TYPE | null;
  };
}
