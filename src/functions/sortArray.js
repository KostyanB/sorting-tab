const sortByNum = (param, arr) => arr.sort((x, y) => x[param] - y[param]);

const sortByStr = (param, arr) => arr.sort((x, y) => x[param].localeCompare(y[param], 'en'));

const sortByDaysVisitTime = (param, arr) => arr.sort((x, y) => x.days[param].visitTime - y.days[param].visitTime);

const sortArray = (param, arr) => {
    if (param === 'userName') {
        return sortByStr(param, arr);
    } else if (param === 'total') {
        return sortByNum(param, arr);
    } else {
        return sortByDaysVisitTime(param, arr);
    }
};
export default sortArray;