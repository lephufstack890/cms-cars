import moment from 'moment';

import { DateTimeFormat, TIME_FORMAT } from '@/constants';

export const getCurrentTimeFormat = (format: DateTimeFormat = TIME_FORMAT.FE.FULL_DATE_TIME) => {
  return moment().format(format);
};

export const getTimeFormat = (
  time: string,
  format: DateTimeFormat = TIME_FORMAT.FE.FULL_DATE_TIME
) => {
  return moment(time).format(format);
};
