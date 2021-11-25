const sortByNum = (param, arr) => arr.sort((x, y) => x[param] - y[param]);

const sortByStr = (param, arr) => arr.sort((x, y) => x[param].localeCompare(y[param], 'en'));

const sortByDaysVisitTime = (param, arr) => arr.sort((x, y) => x.days[param].visitTime - y.days[param].visitTime);

const sortArray = (param, arr) => {
    const newArr = [...arr]
    if (param === 'userName') {
        return sortByStr(param, newArr);
    } else if (param === 'total') {
        return sortByNum(param, newArr);
    } else {
        const a = sortByDaysVisitTime(param, newArr);
        return a;
    }
};
export default sortArray;