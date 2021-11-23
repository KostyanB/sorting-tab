import toTwoDigit from './toTwoDigit';
import calcDaysInMonth from './calcDaysInMonth';

const createDateStr = (day, month, year) => `${year}-${toTwoDigit(month)}-${toTwoDigit(day)}`;

const createDaysArr = (activeMonth, activeYear) => {
    const daysArr = [];
    const daysCount = calcDaysInMonth(activeMonth, activeYear);
    for (let day = 1; day <= daysCount; day++) {
        const dateStr = createDateStr(day, activeMonth, activeYear);
        daysArr.push(dateStr);
    }
    return daysArr;
};
export default createDaysArr;