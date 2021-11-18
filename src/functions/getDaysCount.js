// количество дней в месяце
const getDaysCount = (month, year) => {
    // високосный?
    const yearIsLeap = year => {
        return !((year % 4 || !(year % 100)) && year % 400);
    };

    if ([0, 2, 4, 6, 7, 9, 11].includes(month)) {
        return 31;
    } else if ([3, 5, 8, 10].includes(month)) {
        return 30;
    } else {
        return (yearIsLeap(year) ? 29 : 28);
    }
};
export default getDaysCount;