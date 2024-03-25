export interface PROPS_TYPE {
  title?: string;
  error?: boolean;
  errorMessage?: string;
  onChange?: Function;
  onBlur?: Function;
  value?: any;
  name?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  placeholder?: string;
  className?: string;
  type?:
    | 'number'
    | 'time'
    | 'text'
    | 'date'
    | 'email'
    | 'password'
    | 'search'
    | 'tel'
    | 'url'
    | 'week'
    | 'month'
    | 'datetime-local';
}
