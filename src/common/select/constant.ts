export interface PROPS_TYPE {
  title?: string;
  onChange?: any;
  options?: any;
  placeholder?: string;
  name?: string;
  value?: any;
  error?: boolean;
  errorMessage?: string;
  dynamic?: boolean;
  noOptionsMessage?: string;
  onInputChange?: any;
  defaultValue?: any;
  textOnly?: boolean;
  noAlertContainer?: boolean;
  customComponents?: any;
  className?: string;
  initialValue?: any;
  isDisabled?: true | undefined;
  isMulti?: boolean;
  isRtl?: boolean;
  closeMenuOnSelect?: boolean;
  hideSelectedOptions?: boolean;
  maxWidth?: string;
  ref?: any;
  formatGroupLabel?: any;
}

export interface OPTION_ITEM_DATA {
  value: string;
  label: string;
}
