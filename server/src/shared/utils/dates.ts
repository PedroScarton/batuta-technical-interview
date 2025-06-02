import { DateTime } from 'luxon';

import { Logger } from '@shared/helpers/classes/logger.class';

type DateParam = DateTime | Date | number[] | number | string;

export const convert = function (d: DateParam) {
  // Converts the date in d to a DateTime-object.
  // The input can be:
  //   a DateTime object: returned without modification
  //   a Date object    : Converted to DateTime
  //  an array          : Interpreted as [year,month,day]. NOTE: month is 0-11.
  //   a number         : Interpreted as number of milliseconds
  //                      since 1 Jan 1970 (a timestamp)
  //   a string         : Any format supported by the javascript engine, like
  //                      "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
  //  an object         : Interpreted as an object with year, month and date
  //                      attributes.  **NOTE** month is 0-11.
  return d.constructor === DateTime
    ? d
    : d.constructor === Date
    ? DateTime.fromMillis(d.valueOf())
    : d.constructor === Array
    ? DateTime.utc(d[0], d[1], d[2])
    : d.constructor === Number
    ? DateTime.fromMillis(d)
    : d.constructor === String
    ? DateTime.fromISO(d)
    : DateTime.now();
};

export const isValidDate = function (d: DateParam) {
  if (d) {
    try {
      return convert(d).isValid;
    } catch (error) {
      Logger.warning('Error trying to convert date:', d, 'Error:', error);
      return false;
    }
  } else {
    return false;
  }
};

export const firstDayOfCurrentMonth = function () {
  return DateTime.utc().startOf('month');
};

export const toLocaleStringFull = function (locale = 'en-US', d: DateParam) {
  return convert(d).setLocale(locale).toLocaleString(DateTime.DATE_MED);
};

export const toLocaleStringShort = function (locale = 'en-US', d: DateParam) {
  return convert(d).setLocale(locale).toLocaleString(DateTime.DATE_SHORT);
};

export const compare = function (a: DateParam, b: DateParam) {
  // Compare two dates (could be of any type supported by the convert
  // function above) and returns:
  //  -1 : if a < b
  //   0 : if a = b
  //   1 : if a > b
  // NaN : if a or b is an illegal date
  const numA = convert(a).valueOf();
  const numB = convert(b).valueOf();

  return Number.isFinite(numA) && Number.isFinite(numB)
    ? +(numA > numB) - +(numA < numB)
    : NaN;
};

export const haveMinDiff = function (
  start: DateParam,
  end: DateParam,
  minDiff: number
) {
  // Compare two dates (could be of any type supported by the convert
  // function above) with the minDiff in miliseconds and returns:
  //   true  : if difference between start and end is equal or bigger than minDiff
  //   false : if difference between start and end is less than minDiff
  //   NaN   : if one or more of the dates is illegal.
  // NOTE: The code inside isFinite does an assignment (=).
  const a = convert(start).valueOf();
  const b = convert(end).valueOf();

  return Number.isFinite(a) && Number.isFinite(b) ? b - a >= minDiff : NaN;
};

export const inRange = function (
  d: DateParam,
  start: DateParam,
  end: DateParam
) {
  // Checks if date in d is between dates in start and end.
  // Returns a boolean or NaN:
  //    true  : if d is between start and end (inclusive)
  //    false : if d is before start or after end
  //    NaN   : if one or more of the dates is illegal.
  d = convert(d).valueOf();
  start = convert(start).valueOf();
  end = convert(end).valueOf();

  return Number.isFinite(d) && Number.isFinite(start) && Number.isFinite(end)
    ? start < d && d < end
    : NaN;
};
