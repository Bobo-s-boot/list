export interface PROPS_TYPE {
  title?: string;
  onChange?: any;
  options?: OPTION_ITEM_DATA[];
  placeholder?: string;
  name: string;
  value?: string;
  error?: boolean;
  errorMessage?: string;
  dynamic?: boolean;
  noOptionsMessage?: string;
  onInputChange?: any;
}

export interface OPTION_ITEM_DATA {
  value: string;
  label: string;
}
