import toTwoDigit from './toTwoDigit';

const createDateStr = (day, month, year) =>
  `${year}-${toTwoDigit(month)}-${toTwoDigit(day)}`;

const createDaysArr = (daysCount, activeMonth, activeYear) => {
  const daysArr = [];
  for (let day = 1; day <= daysCount; day++) {
    const dateStr = createDateStr(day, activeMonth, activeYear);
    daysArr.push(dateStr);
  }
  return daysArr;
};
export default createDaysArr;
