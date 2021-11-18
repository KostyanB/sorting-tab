import getDaysCount from './getDaysCount';

export const createDaysArr = (activeMonth, activeYear) => {
    const daysArr = [];

    for (let i = 1; i <= getDaysCount(activeMonth, activeYear); i++) {
        daysArr.push(i);
    }
    return daysArr;
};
export default createDaysArr;