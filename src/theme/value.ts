export enum VALUE_TRANSITION_ENUM {
  DEFAULT = 'default',
  HOVER = 'hover',
  EASE = 'ease',
}

export type VALUE_TRANSITION_TYPE = `${VALUE_TRANSITION_ENUM}`;

export const VALUE_TRANSITION_DATA = {
  [VALUE_TRANSITION_ENUM.DEFAULT]: '0.5s ease-in-out',
  [VALUE_TRANSITION_ENUM.HOVER]: '0.3s ease-in-out',
  [VALUE_TRANSITION_ENUM.EASE]: 'all 0.5s ease',
};

export enum VALUE_OPACITY_ENUM {
  BUTTON = 'button',
  DEFAULT = 'default',
  HOVER = 'hover',
  SKELETON = 'skeleton',
}

export type VALUE_OPACITY_TYPE = `${VALUE_OPACITY_ENUM}`;

export const VALUE_OPACITY_DATA = {
  [VALUE_OPACITY_ENUM.BUTTON]: 0.8,
  [VALUE_OPACITY_ENUM.DEFAULT]: 0.5,
  [VALUE_OPACITY_ENUM.HOVER]: 0.7,
  [VALUE_OPACITY_ENUM.SKELETON]: 0.6,
};

export const VALUE_OPACITY_DATA_LIGHT = {
  [VALUE_OPACITY_ENUM.SKELETON]: 0.6,
};

export const VALUE_OPACITY_DATA_DARK = {
  [VALUE_OPACITY_ENUM.SKELETON]: 1,
};
