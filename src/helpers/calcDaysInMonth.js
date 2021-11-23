const calcDaysInMonth = (month, year) => {
    // високосный?
    const yearIsLeap = year => {
        return !((year % 4 || !(year % 100)) && year % 400);
    };

    if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
        return 31;
    } else if ([4, 6, 9, 11].includes(month)) {
        return 30;
    } else {
        return (yearIsLeap(year) ? 29 : 28);
    }
};
export default calcDaysInMonth;