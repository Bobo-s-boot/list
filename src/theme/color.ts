export enum COLOR_ENUM {
  DEFAULT = 'default', // ДЕФОЛТНЫЙ
  TEXT_PRIMARY = 'textPrimary', // Активный цвет шрифта. Юзается на заголовках и важном тексте
  TEXT_SECONDARY = 'textSecondary', // Основной цвет шрифта. Юзается на дефолтных компонентах, дефолтном тексте данных
  INPUT = 'input', // Цвет инпута и любых других элементов с которыми можно инпутировать
  ERROR = 'error', // Ошибка
  BUTTON_PRIMARY = 'buttonPrimary', // Активный цвет кнопки
  BUTTON_SECONDARY = 'buttonSecondary',
  BORDER = 'border', // Цвет бордера и дивидера
  BORDER_DEFAULT = 'borderDefault', //GRAY_3
  BORDER_HOVER = 'borderHover', //GRAY_4
  BORDER_DISABLED = 'borderDisabled', //GRAY_3
  BORDER_ACTIVE_SELECT = 'borderActiveSelect',
  TEXT_PLACEHOLDER = 'textPlaceholder',
  TEXT_BUTTON_CLICK = 'textButtonClick',
  TEXT_BUTTON_DISABLED = 'textButtonDisabled',
  TEXT_BUTTON = 'textButton',
  TEXT_HOVER = 'textHover', //GRAY_4
  TEXT_DISABLED = 'textDisabled', //GRAY_3
  TEXT_DEFAULT = 'textDefault', //GRAY_3
  TEXT_ACTIVE = 'textActive',
  SELECT_TEXT_PLACEHOLDER = 'selectTextPlaceholder',
  SELECT_TEXT_HOVER = 'selectTextHover', //GRAY_4
  SELECT_TEXT_DISABLED = 'selectTextDisable', //GRAY_3
  SELECT_TEXT_DEFAULT = 'selectTextDefault', //GRAY_3
  SELECT_TEXT_ACTIVE = 'selectTextActive',
  BORDER_SECONDARY = 'borderSecondary', // Цвет бордера и дивидера
  SUCCESS = 'success', // Цвет успеха
  RECOMENDATION = 'recomendation',
  DISABLED = 'disabled', // Цвет неактивного инпута или чего-либо другого (если у него нет своего цвета неактивности)
  TEXT_THIRD = 'textThird', // Второстепенный не важный цвет текста
  BACKGROUND_PRIMARY = 'backgroundPrimary', // Основноый цвет фона
  BACKGROUND_SECONDARY = 'backgroundSecondary', // Основноый цвет фона
  TEXT_LINK = 'textLink', // Цвет активных ссылок
  LIGHT = 'light', // Светлый цвет
  BUTTON_HOVER = 'buttonHover', // Цвет ховер кнопки
  BUTTON_ACTIVE = 'buttonActive', // цвет фокус/нажатия кнопки
  ACTION = 'action', // CTA цвет
  WHITE = 'white', // Белый цвет
  BACKGROUND_THIRD = 'backgroundThird', // Белый цвет
  CHECKBOX = 'checkbox',
  CHIP = 'chip',
  TEXT_FOURTH = 'textFourth',
  BUTTON_FOCUS = 'buttonFocus',
  ACTIVE = 'active',
  ACTIVE_BACKGROUND = 'activeBACKGROUND',
  LINK = 'link',
  DIVIDER = 'divider',
  MODAL_BACKGROUND = 'modalBackground',
  BUTTON_THIRD = 'buttonThird',
  BUTTON_TEXT = 'buttonText',
  TOGGLE_BACKGROUND = 'toggleBackground',
  TOGGLE_BACKGROUND_ACTIVE = 'toggleBackgroundActive',
  TOGGLE_HANDLE = 'toggleHandle',
  TOGGLE_HANDLE_ACTIVE = 'toggleHandleActive',
  SELECT_MENU_DIVIDER = 'selectMenuDivider',
  SELECT_MENU_BACKGROUND = 'selectMenuBackground',
  MENU_BACKGROUND = 'menuBackground',
  INPUT_DISABLED = 'inputDisabled',
  INPUT_ACTIVE = 'inputActive',
  NEWS_TITLE = 'newsTitle',
  ERROR_BACKGROUND = 'error_background',
  SUCCESS_BACKGROUND = 'success_background',
  RECOMENDATION_BACKGROUND = 'recomendation_background',
  SECONDARY_INPUT = 'secondaryInput',
  HEADER_BACKGROUND = 'headerBackground',
  CALENDAR_DATE = 'calendarDate',
  CHIP_SECONDARY = 'chipSecondary',
  MODAL_CANCEL = 'modelCancel',
  MENU_APP_BACKGROUND = 'menuAppBackground',
  BORDER_THIRD = 'borderThird',
  CHECKBOX_NONE = 'checkboxNone',
  CHECKBOX_IN_PROGRESS = 'checkboxInprogress',
  CHECKBOX_DONE = 'checkboxDone',
  CHECKBOX_NEW = 'checkboxNew',
  DAY_BUTTON = 'dayButton',
  CHECKBOX_INACTIVE = 'checkboxInactive',
  BUTTON_DISABLED = 'buttonDisabled',
  MAIN = 'main',
  SELECT_CALENDAR = 'selectCalendar',
  TRANSPARENT = 'transparent',
  HOVER = 'hover',
  ONGOING_STATUS = 'ongoingStatus',
  BORDER_ACTIVE = 'borderActive',
}

export type COLOR_TYPE = `${COLOR_ENUM}`;

export const COLOR_DATA = {
  [COLOR_ENUM.DEFAULT]: '#2C2C2C',
  [COLOR_ENUM.TEXT_PRIMARY]: '#2C2C2C',
  [COLOR_ENUM.TEXT_SECONDARY]: '#24231E',
  [COLOR_ENUM.INPUT]: '#FFFFFF',
  [COLOR_ENUM.ERROR]: '#E53939',
  [COLOR_ENUM.BUTTON_PRIMARY]: '#E5EE5C',
  [COLOR_ENUM.BUTTON_SECONDARY]: '#186C9B',
  [COLOR_ENUM.BORDER]: '#E1E1E3',
  [COLOR_ENUM.SUCCESS]: '#24B277',
  [COLOR_ENUM.RECOMENDATION]: '#178FE5',
  [COLOR_ENUM.DISABLED]: '#888888',
  [COLOR_ENUM.TEXT_THIRD]: '#808080',
  [COLOR_ENUM.TEXT_FOURTH]: '#888888',
  [COLOR_ENUM.BACKGROUND_PRIMARY]: '#FEF1E8',
  [COLOR_ENUM.BACKGROUND_SECONDARY]: '#16151C',
  [COLOR_ENUM.TEXT_LINK]: '#1D84BE',
  [COLOR_ENUM.LIGHT]: '#E6E6E6',
  [COLOR_ENUM.BUTTON_HOVER]: '#6A52CC',
  [COLOR_ENUM.BUTTON_ACTIVE]: '#24231E',
  [COLOR_ENUM.BUTTON_DISABLED]: '#D9D9D9',
  [COLOR_ENUM.ACTION]: '#8240FF',
  [COLOR_ENUM.WHITE]: '#fff',
  [COLOR_ENUM.BACKGROUND_THIRD]: '#F7F7F7',
  [COLOR_ENUM.CHECKBOX]: '#30C20B',
  [COLOR_ENUM.CHIP]: '#387ABB',
  [COLOR_ENUM.BORDER_SECONDARY]: '#D8D8D8',
  [COLOR_ENUM.BUTTON_FOCUS]: '#2198DC',
  [COLOR_ENUM.ACTIVE]: '#8240FF10',
  [COLOR_ENUM.ACTIVE_BACKGROUND]: '#8240FF10',
  [COLOR_ENUM.LINK]: '#7E7E83',
  [COLOR_ENUM.DIVIDER]: '#EBEBEB',
  [COLOR_ENUM.MODAL_BACKGROUND]: '#FFFFFF',
  [COLOR_ENUM.BUTTON_THIRD]: '#6B7CA5',
  [COLOR_ENUM.BUTTON_TEXT]: '#fff',
  [COLOR_ENUM.ERROR_BACKGROUND]: '#E53939',
  [COLOR_ENUM.SUCCESS_BACKGROUND]: '#24B27720',
  [COLOR_ENUM.RECOMENDATION_BACKGROUND]: '#178FE520',
  [COLOR_ENUM.HEADER_BACKGROUND]: '#F2F7FE',
  [COLOR_ENUM.CALENDAR_DATE]: '#38383A',
  [COLOR_ENUM.CHIP_SECONDARY]: '#96B8DE',
  [COLOR_ENUM.MODAL_CANCEL]: '#F9F9F9',
  [COLOR_ENUM.MENU_APP_BACKGROUND]: '#F9F9F9',
  [COLOR_ENUM.BORDER_THIRD]: '#5ECDF1',
  [COLOR_ENUM.CHECKBOX_NONE]: '#DADADA',
  [COLOR_ENUM.CHECKBOX_IN_PROGRESS]: '#30C20B',
  [COLOR_ENUM.CHECKBOX_DONE]: '#00A0FA',
  [COLOR_ENUM.CHECKBOX_NEW]: '#31C5D8',
  [COLOR_ENUM.CHECKBOX_INACTIVE]: '#2C2C2C',
  [COLOR_ENUM.MAIN]: '#775CE5',
  [COLOR_ENUM.SELECT_CALENDAR]: '#F1EEFC',
  [COLOR_ENUM.HOVER]: '#1E1D26',
  [COLOR_ENUM.TRANSPARENT]: 'transparent',
  [COLOR_ENUM.ONGOING_STATUS]: '#599BFF',
  [COLOR_ENUM.BORDER_ACTIVE]: '#24231E', //GRAY_5
};
export const LIGHT_COLOR_DATA = {
  [COLOR_ENUM.DEFAULT]: '#1B1924', //WHITE
  [COLOR_ENUM.TEXT_PRIMARY]: '#1B1924', //GRAY_8
  [COLOR_ENUM.TEXT_SECONDARY]: '#24231E', //GRAY_7
  [COLOR_ENUM.TEXT_THIRD]: '#A4A1B2', //GRAY_6
  [COLOR_ENUM.TEXT_FOURTH]: '#312F3B', //GRAY_4
  [COLOR_ENUM.BUTTON_TEXT]: '#312F3B',

  [COLOR_ENUM.ERROR]: '#E53939', //RED_2
  [COLOR_ENUM.BUTTON_PRIMARY]: '#E5EE5C',
  [COLOR_ENUM.BUTTON_SECONDARY]: '#31C5D8',
  [COLOR_ENUM.SUCCESS]: '#2E9973', //GREEN
  [COLOR_ENUM.RECOMENDATION]: '#178FE5',
  [COLOR_ENUM.DISABLED]: '#3B404B',

  [COLOR_ENUM.INPUT]: '#FFFFFF',
  [COLOR_ENUM.INPUT_DISABLED]: '#FFF', //GRAY_1
  [COLOR_ENUM.INPUT_ACTIVE]: '#FFF', //GRAY_2

  [COLOR_ENUM.BORDER]: '#FBFBFB', //GRAY_3
  [COLOR_ENUM.BORDER_DEFAULT]: '#616F7C', //GRAY_3
  [COLOR_ENUM.BORDER_HOVER]: '#24231E', //GRAY_4
  [COLOR_ENUM.BORDER_DISABLED]: '#D9D9D9', //GRAY_3
  [COLOR_ENUM.BORDER_ACTIVE_SELECT]: '#24231E',
  [COLOR_ENUM.BORDER_ACTIVE]: '#24231E',

  [COLOR_ENUM.TEXT_PLACEHOLDER]: '#616F7C',
  [COLOR_ENUM.TEXT_BUTTON_CLICK]: '#E5EE5C',
  [COLOR_ENUM.TEXT_BUTTON_DISABLED]: '#616F7C',
  [COLOR_ENUM.TEXT_BUTTON]: '#24231E',
  [COLOR_ENUM.TEXT_HOVER]: '#A4A1B2', //GRAY_4
  [COLOR_ENUM.TEXT_DISABLED]: '#D9D9D9', //GRAY_3
  [COLOR_ENUM.TEXT_DEFAULT]: '#616F7C', //GRAY_3

  [COLOR_ENUM.TEXT_ACTIVE]: '#24231E',
  [COLOR_ENUM.SELECT_TEXT_PLACEHOLDER]: '#75758A',
  [COLOR_ENUM.SELECT_TEXT_HOVER]: '#75758A', //GRAY_4
  [COLOR_ENUM.SELECT_TEXT_DISABLED]: '#D9D9D9', //GRAY_3
  [COLOR_ENUM.SELECT_TEXT_DEFAULT]: '#24232E', //GRAY_3
  [COLOR_ENUM.SELECT_TEXT_ACTIVE]: '#1B1924',
  [COLOR_ENUM.DIVIDER]: '#E8E6EB',

  [COLOR_ENUM.HOVER]: '#FCFAFF', //GRAY_2

  [COLOR_ENUM.BACKGROUND_PRIMARY]: '#FBFBFB', //BG
  [COLOR_ENUM.BACKGROUND_SECONDARY]: '#FCFAFF', //GRAY_1
  [COLOR_ENUM.BACKGROUND_THIRD]: '#E8E6EB', //GRAY_3
  [COLOR_ENUM.ACTIVE]: '#C9A365',

  [COLOR_ENUM.ACTIVE_BACKGROUND]:
    'linear-gradient(90deg, #f0ca92 0%, #fadbab 57%, #f2d5a1 100%)', //LINEAR 15%

  [COLOR_ENUM.TOGGLE_HANDLE_ACTIVE]: '#FFFFFF',
  [COLOR_ENUM.TOGGLE_HANDLE]: '#FCFAFF', //LINEAR
  [COLOR_ENUM.TOGGLE_BACKGROUND]:
    'linear-gradient(90deg, #f0ca92 0%, #fadbab 57%, #f2d5a1 100%)', //LINEAR 15%

  [COLOR_ENUM.TOGGLE_BACKGROUND_ACTIVE]:
    'linear-gradient(90deg, #f0ca92 0%, #fadbab 57%, #f2d5a1 100%)', //LINEAR 15%

  [COLOR_ENUM.ACTION]: '#775CE5',
  [COLOR_ENUM.WHITE]: '#fff',
  [COLOR_ENUM.CHECKBOX]: '#30C20B',
  [COLOR_ENUM.BUTTON_ACTIVE]: '#24231E',
  [COLOR_ENUM.BUTTON_DISABLED]: '#D9D9D9',
  [COLOR_ENUM.CHIP]: '#387ABB',
  [COLOR_ENUM.BORDER_SECONDARY]: '#D8D8D8',
  [COLOR_ENUM.BUTTON_FOCUS]: '#2198DC',
  [COLOR_ENUM.LINK]: '#7E7E83',
  [COLOR_ENUM.MODAL_BACKGROUND]: '#FFFFFF',
  [COLOR_ENUM.BUTTON_THIRD]: '#16151C',

  [COLOR_ENUM.SELECT_MENU_DIVIDER]: '#a3d0f9',
  [COLOR_ENUM.SELECT_MENU_BACKGROUND]: '#fff',
  [COLOR_ENUM.MENU_BACKGROUND]: '#F5F5F7',
  [COLOR_ENUM.NEWS_TITLE]: '#1D84BE',
  [COLOR_ENUM.ERROR_BACKGROUND]: '#E53939',

  [COLOR_ENUM.SUCCESS_BACKGROUND]: '#24B27720',
  [COLOR_ENUM.RECOMENDATION_BACKGROUND]: '#178FE520',
  [COLOR_ENUM.SECONDARY_INPUT]: '#c6e1fb',
  [COLOR_ENUM.HEADER_BACKGROUND]: '#F2F7FE',
  [COLOR_ENUM.CALENDAR_DATE]: '#38383A',
  [COLOR_ENUM.CHIP_SECONDARY]: '#96B8DE',
  [COLOR_ENUM.MODAL_CANCEL]: '#F9F9F9',
  [COLOR_ENUM.MENU_APP_BACKGROUND]: '#F9F9F9',
  [COLOR_ENUM.BORDER_THIRD]: '#5ECDF1',
  [COLOR_ENUM.CHECKBOX_NONE]: '#DADADA',
  [COLOR_ENUM.CHECKBOX_IN_PROGRESS]: '#30C20B',
  [COLOR_ENUM.CHECKBOX_DONE]: '#00A0FA',
  [COLOR_ENUM.CHECKBOX_NEW]: '#31C5D8',
  [COLOR_ENUM.DAY_BUTTON]: '#FFFFFF',
  [COLOR_ENUM.CHECKBOX_INACTIVE]: '#2C2C2C',
  [COLOR_ENUM.MAIN]: '#775CE5',
  [COLOR_ENUM.SELECT_CALENDAR]: '#F1EEFC',
  [COLOR_ENUM.TRANSPARENT]: 'transparent',
  [COLOR_ENUM.ONGOING_STATUS]: '#599BFF',
};
export const DARK_COLOR_DATA = {
  [COLOR_ENUM.DEFAULT]: '#FCFAFF', //WHITE
  [COLOR_ENUM.TEXT_PRIMARY]: '#A4A1B2', //GRAY_8
  [COLOR_ENUM.TEXT_SECONDARY]: '#24231E', //GRAY_7
  [COLOR_ENUM.TEXT_THIRD]: '#75758A', //GRAY_6
  [COLOR_ENUM.TEXT_FOURTH]: '#E8E6EB', //GRAY_4

  [COLOR_ENUM.ERROR]: '#E53939', //RED_2
  [COLOR_ENUM.BUTTON_PRIMARY]:
    'linear-gradient(90deg, #c79e66 0%, #f0d09d 60%, #ebcc95 100%)',

  [COLOR_ENUM.BUTTON_SECONDARY]: '#31C5D8',
  [COLOR_ENUM.SUCCESS]: '#2E9973', //GREEN
  [COLOR_ENUM.RECOMENDATION]: '#178FE5',
  [COLOR_ENUM.DISABLED]: '#3B404B',

  [COLOR_ENUM.INPUT]: '#FFFFFF',
  [COLOR_ENUM.INPUT_DISABLED]: '#1b1924', //GRAY_1
  [COLOR_ENUM.INPUT_ACTIVE]: '#24232E', //GRAY_2

  [COLOR_ENUM.BORDER]: '#312F3B', //GRAY_3
  [COLOR_ENUM.BORDER_DEFAULT]: '#616F7C', //GRAY_3
  [COLOR_ENUM.BORDER_HOVER]: '#24231E', //GRAY_4
  [COLOR_ENUM.BORDER_DISABLED]: '#D9D9D9', //GRAY_3
  [COLOR_ENUM.BORDER_ACTIVE_SELECT]: '#24231E',
  [COLOR_ENUM.BORDER_ACTIVE]: '#24231E',

  [COLOR_ENUM.TEXT_PLACEHOLDER]: '#616F7C',
  [COLOR_ENUM.TEXT_BUTTON]: '#24231E',
  [COLOR_ENUM.TEXT_BUTTON_CLICK]: '#E5EE5C',
  [COLOR_ENUM.TEXT_BUTTON_DISABLED]: '#616F7C',
  [COLOR_ENUM.TEXT_HOVER]: '#A4A1B2', //GRAY_4
  [COLOR_ENUM.TEXT_DISABLED]: '#D9D9D9', //GRAY_3
  [COLOR_ENUM.TEXT_DEFAULT]: '#616F7C', //GRAY_3
  [COLOR_ENUM.TEXT_ACTIVE]: '#24231E',
  [COLOR_ENUM.SELECT_TEXT_PLACEHOLDER]: '#A4A1B2',
  [COLOR_ENUM.SELECT_TEXT_HOVER]: '#A4A1B2', //GRAY_4
  [COLOR_ENUM.SELECT_TEXT_DISABLED]: '#D9D9D9', //GRAY_3
  [COLOR_ENUM.SELECT_TEXT_DEFAULT]: '#FBFBFB', //GRAY_3
  [COLOR_ENUM.SELECT_TEXT_ACTIVE]: '#FBFBFB',

  [COLOR_ENUM.BUTTON_TEXT]: '#312F3B',

  [COLOR_ENUM.HOVER]: '#24232E', //GRAY_2
  [COLOR_ENUM.DIVIDER]: '#312F3B',

  [COLOR_ENUM.BACKGROUND_PRIMARY]: '#24232e', //BG
  [COLOR_ENUM.BACKGROUND_SECONDARY]: '#1b1924', //GRAY_1
  [COLOR_ENUM.BACKGROUND_THIRD]: '#312F3B', //GRAY_3

  [COLOR_ENUM.ACTIVE]: 'red', //LINEAR
  [COLOR_ENUM.ACTIVE_BACKGROUND]:
    'linear-gradient(90deg, #c79e6615 0%, #f0d09d15 60%, #ebcc9515 100%)', //LINEAR 15%

  [COLOR_ENUM.TOGGLE_HANDLE_ACTIVE]: '#24232E',
  [COLOR_ENUM.TOGGLE_HANDLE]:
    'linear-gradient(90deg, #c79e66 0%, #f0d09d 60%, #ebcc95 100%)', //LINEAR
  [COLOR_ENUM.TOGGLE_BACKGROUND]:
    'linear-gradient(90deg, #c79e6615 0%, #f0d09d15 60%, #ebcc9515 100%)', //LINEAR 15%

  [COLOR_ENUM.TOGGLE_BACKGROUND_ACTIVE]:
    'linear-gradient(90deg, #c79e66 0%, #f0d09d 60%, #ebcc95 100%)', //LINEAR 15%

  [COLOR_ENUM.TEXT_LINK]: '#FFFFFF',
  [COLOR_ENUM.LIGHT]: '#E6E6E6',
  [COLOR_ENUM.BUTTON_ACTIVE]: '#24231E',
  [COLOR_ENUM.BUTTON_DISABLED]: '#D9D9D9',
  [COLOR_ENUM.ACTION]: '#8240FF',
  [COLOR_ENUM.WHITE]: '#fff',
  [COLOR_ENUM.CHECKBOX]: '#31C5D8',
  [COLOR_ENUM.CHIP]: '#387ABB',
  [COLOR_ENUM.BORDER_SECONDARY]: '#D8D8D8',
  [COLOR_ENUM.BUTTON_FOCUS]: '#2198DC',
  [COLOR_ENUM.LINK]: '#7E7E83',
  [COLOR_ENUM.MODAL_BACKGROUND]: '#16151C',
  [COLOR_ENUM.BUTTON_THIRD]: '#6B7CA5',

  [COLOR_ENUM.SELECT_MENU_DIVIDER]: 'rgba(235, 235, 235, 0.2)',
  [COLOR_ENUM.SELECT_MENU_BACKGROUND]: '#485268',
  [COLOR_ENUM.MENU_BACKGROUND]: '#3F4656',
  [COLOR_ENUM.NEWS_TITLE]: '#fff',
  [COLOR_ENUM.ERROR_BACKGROUND]: '#E53939',
  [COLOR_ENUM.SUCCESS_BACKGROUND]: '#24B27720',
  [COLOR_ENUM.RECOMENDATION_BACKGROUND]: '#178FE520',
  [COLOR_ENUM.SECONDARY_INPUT]: '#485472',
  [COLOR_ENUM.HEADER_BACKGROUND]: '#596276',
  [COLOR_ENUM.CALENDAR_DATE]: '#FFFFFF',
  [COLOR_ENUM.CHIP_SECONDARY]: '#96B8DE',
  [COLOR_ENUM.MODAL_CANCEL]: '#2E3647',
  [COLOR_ENUM.MENU_APP_BACKGROUND]: '#2D323E',
  [COLOR_ENUM.BORDER_THIRD]: '#5ECDF1',
  [COLOR_ENUM.CHECKBOX_NONE]: '#DADADA',
  [COLOR_ENUM.CHECKBOX_IN_PROGRESS]: '#30C20B',
  [COLOR_ENUM.CHECKBOX_DONE]: '#00A0FA',
  [COLOR_ENUM.CHECKBOX_NEW]: '#31C5D8',
  [COLOR_ENUM.DAY_BUTTON]: '#2F3646',
  [COLOR_ENUM.CHECKBOX_INACTIVE]: '#EFEFF0',
  [COLOR_ENUM.MAIN]: '#775CE5',
  [COLOR_ENUM.SELECT_CALENDAR]: '#F1EEFC',
  [COLOR_ENUM.TRANSPARENT]: 'transparent',
  [COLOR_ENUM.ONGOING_STATUS]: '#599BFF',
};
