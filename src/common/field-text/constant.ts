export interface PROPS_TYPE {
  title?: string;
  error?: boolean;
  errorMessage?: string;
  onChange?: Function;
  onBlur?: Function;
  value?: any;
  name?: string;
  disabled?: boolean;
  icon?: any;
  placeholder?: string;
  className?: string;
  maxLength?: number;
  min?: number;
  max?: number;
  errorContainer?: boolean;
  autoFocus?: boolean;
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
    | 'datetime-local'
    | 'phone';
}
