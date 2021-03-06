import createVisitTimeText from './createVisitTimeText';

const getTime = (date, time) =>
  new Date(`${date} ${time.split('-').join(':')}`);

const calcVisitTime = ({ visitDate, timeStart, timeEnd }) => {
  const visitDay = new Date(visitDate).getDate();
  const visitTime =
    (getTime(visitDate, timeEnd) - getTime(visitDate, timeStart)) / 60000;
  const visitTimeText = createVisitTimeText(visitTime);

  return {
    visitDay,
    visitTime,
    visitTimeText,
  };
};
export default calcVisitTime;
