import moment from 'moment';

export const toDateUTC = (time) => moment(time).valueOf();

export const toDateStr = (time) => moment(time).format();

export const toNow = (time) => moment(time).toNow();

export const toDuration = (duration) => {
  const milliSecond = moment.duration(duration, 'seconds').asMilliseconds();
  return moment.utc(milliSecond).format('HH:mm:ss');
};
