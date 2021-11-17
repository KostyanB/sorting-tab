const createDaysArr = (activeMonth, activeYear) => {
    const daysArr = [];

    const yearIsLeap = year => {
        return !((year % 4 || !(year % 100)) && year % 400);
    };

    const getDaysCount = (month, year) => {
        if ([0, 2, 4, 6, 7, 9, 11].includes(month)) {
            return 31;
        } else if ([3, 5, 8, 10].includes(month)) {
            return 30;
        } else {
            return (yearIsLeap(year) ? 29 : 28);
        }
    };

    for (let i = 1; i <= getDaysCount(activeMonth, activeYear); i++) {
        daysArr.push(i);
    }
    return daysArr;
};
export default createDaysArr;