import moment from 'moment';

export const getDurationForSecond = (duration) => {
  const milliSecond = moment.duration(duration, 'seconds').asMilliseconds();
  return moment.utc(milliSecond).format('HH:mm:ss');
};
