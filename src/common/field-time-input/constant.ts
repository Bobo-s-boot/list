import { TimeRangePickerProps } from 'antd';

export interface PROPS_TYPE extends TimeRangePickerProps {
  title: string;
  fieldValue?: [string, string];
}

export interface CALENDAR {
  startDate: any;
  endDate: any;
  key?: string;
}
