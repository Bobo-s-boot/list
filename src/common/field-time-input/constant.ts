import { TimeRangePickerProps } from 'antd';
import React from 'react';

export interface PROPS_TYPE extends TimeRangePickerProps {
  title: string;
}

export interface CALENDAR {
  startDate: any;
  endDate: any;
  key?: string;
}
