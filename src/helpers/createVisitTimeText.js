import toTwoDigit from './toTwoDigit';

const createVisitTimeText = visitTime => {
  const visitHour = Math.floor((visitTime / 3600) % 24);
  const visitMinute = toTwoDigit(Math.floor((visitTime / 60) % 60));
  const visitSecond = toTwoDigit(Math.floor(visitTime % 60));
  const hourText = visitHour > 0 ? `${visitHour}:` : '';

  return `${hourText}${visitMinute}:${visitSecond}`;
};
export default createVisitTimeText;
