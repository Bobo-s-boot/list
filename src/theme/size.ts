export enum SIZE_FONT_ENUM {
  DEFAULT = 'default', // Дефолтный body текст для обычного контента
  SMALL = 'small', // Маленький дополнительный текст в итемах сущностей или вывода данных
  SEMI_SMALL = 'semiSmall', // Маленький дополнительный текст в итемах сущностей или вывода данных
  INPUT = 'input', // текст данных в инпут элементах (в тех элементах с которыми юзер инпутирует)
  HEADING = 'heading', // заголовок страницы
  LABEL = 'label', // текст label на инпут элементах или прочих элементах
  ALERT = 'alert', // тот текст что выводиться во всех алертах, попапах
  MAIN = 'main', // основной важный текст в контенте
  TITLE = 'title', // заголовок в модулях итемах секций
  CHIP = 'chip', // текст в chip, маленький chip-кнопках
  MEDIUM = 'medium',
  VERY_SMALL = 'verySmall',
}

export type SIZE_FONT_TYPE = `${SIZE_FONT_ENUM}`;

export const SIZE_FONT_DATA = {
  [SIZE_FONT_ENUM.DEFAULT]: 14,
  [SIZE_FONT_ENUM.VERY_SMALL]: 11,
  [SIZE_FONT_ENUM.SMALL]: 12,
  [SIZE_FONT_ENUM.SEMI_SMALL]: 13,
  [SIZE_FONT_ENUM.HEADING]: 20,
  [SIZE_FONT_ENUM.CHIP]: 12,
  [SIZE_FONT_ENUM.MEDIUM]: 18,
  [SIZE_FONT_ENUM.MAIN]: 16,

  [SIZE_FONT_ENUM.LABEL]: 16,
  [SIZE_FONT_ENUM.INPUT]: 14,
  [SIZE_FONT_ENUM.ALERT]: 12,
  [SIZE_FONT_ENUM.TITLE]: 16,
};

export enum SIZE_LAYOUT_ENUM {
  DEFAULT = 'default',
  SMALL = 'small',
  MOBILE = 'mobile',
  AUTH = 'auth',
}

export type SIZE_LAYOUT_TYPE = `${SIZE_LAYOUT_ENUM}`;

export const SIZE_LAYOUT_DATA = {
  [SIZE_LAYOUT_ENUM.DEFAULT]: 1050,
  [SIZE_LAYOUT_ENUM.SMALL]: 800,
  [SIZE_LAYOUT_ENUM.MOBILE]: 480,
  [SIZE_LAYOUT_ENUM.AUTH]: 310,
};

export enum SIZE_GRID_ENUM {
  DEFAULT = 'default', // ДЕФОЛТНЫЙ
  INPUT = 'input', // Отступы между инпутами в форме
  MOD = 'mod', // Отступы между компонентами в модуле
  COM = 'com', // Отступы между компонентами в итеме сущносте
  FORM = 'form', // Отступы между компонентами в итеме сущносте
  ELEM = 'elem', // Отступы между элементами в итеме сущносте
  LIST = 'list', // Отступы между итемами в списке итемов
}

export type SIZE_GRID_TYPE = `${SIZE_GRID_ENUM}`;

export const SIZE_GRID_DATA = {
  [SIZE_GRID_ENUM.DEFAULT]: 16,
  [SIZE_GRID_ENUM.INPUT]: 12,
  [SIZE_GRID_ENUM.MOD]: 24,
  [SIZE_GRID_ENUM.FORM]: 26,
  [SIZE_GRID_ENUM.LIST]: 24,
  [SIZE_GRID_ENUM.COM]: 16,
  [SIZE_GRID_ENUM.ELEM]: 8,
};

export enum SIZE_FONT_WEIGHT_ENUM {
  LIGHT = 'light',
  REGULAR = 'regular',
  MEDIUM = 'medium',
  SEMI_BOLD = 'semi-bold',
  BOLD = 'bold',
}

export type SIZE_FONT_WEIGHT_TYPE = `${SIZE_FONT_WEIGHT_ENUM}`;

export const SIZE_FONT_WEIGHT_DATA = {
  [SIZE_FONT_WEIGHT_ENUM.LIGHT]: 300,
  [SIZE_FONT_WEIGHT_ENUM.REGULAR]: 400,
  [SIZE_FONT_WEIGHT_ENUM.MEDIUM]: 500,
  [SIZE_FONT_WEIGHT_ENUM.SEMI_BOLD]: 600,
  [SIZE_FONT_WEIGHT_ENUM.BOLD]: 700,
};

export enum SIZE_BORDER_RADIUS_ENUM {
  DEFAULT = 'default',
  CARD = 'card',
  CHIP = 'chip',
  ALERT = 'alert',
  CIRCLE = 'circle',
  PAYMENT_BUTTON = 'paymentButton',
  CONTENT = 'content',
}

export type SIZE_BORDER_RADIUS_TYPE = `${SIZE_BORDER_RADIUS_ENUM}`;

export const SIZE_BORDER_RADIUS_DATA = {
  [SIZE_BORDER_RADIUS_ENUM.DEFAULT]: 10,
  [SIZE_BORDER_RADIUS_ENUM.CARD]: 12,
  [SIZE_BORDER_RADIUS_ENUM.CONTENT]: 16,
  [SIZE_BORDER_RADIUS_ENUM.CHIP]: 100,
  [SIZE_BORDER_RADIUS_ENUM.ALERT]: 8,
  [SIZE_BORDER_RADIUS_ENUM.CIRCLE]: 100,
};

export enum SIZE_SECTION_ENUM {
  DEFAULT = 'default',
}

export type SIZE_SECTION_TYPE = `${SIZE_SECTION_ENUM}`;

export const SIZE_SECTION_DATA = {
  [SIZE_SECTION_ENUM.DEFAULT]: 32,
};

export enum SIZE_ICON_ENUM {
  DEFAULT = 'default',
  SMALL = 'small',
  LARGE = 'large',
  VERY_SMALL = 'very_small',
}

export type SIZE_ICON_TYPE = `${SIZE_ICON_ENUM}`;

export const SIZE_ICON_DATA = {
  [SIZE_ICON_ENUM.DEFAULT]: 20,
  [SIZE_ICON_ENUM.SMALL]: 16,
  [SIZE_ICON_ENUM.VERY_SMALL]: 14,
  [SIZE_ICON_ENUM.LARGE]: 24,
};
