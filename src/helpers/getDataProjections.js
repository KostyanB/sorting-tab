import calcVisitTime from './calcVisitTime';
// массив визитов -> ассоциативный массив
const createDatesProjections = (datesArr, daysArr) => {
    const newDatesObj = {};
    let totalVisit = 0;

    daysArr.forEach((day, index) => {
        const findDay = datesArr.find(date => date['Date'] === day);
        if (findDay) {
            //получаем объект из визита { visitTime, visitMinute, visitHour, visitDay }
            const { Date: visitDate, End: timeEnd, Start: timeStart } = findDay;
            const timeObj = calcVisitTime({ visitDate, timeEnd, timeStart });
            totalVisit += timeObj.visitTime;
            newDatesObj[timeObj.visitDay] = { ...timeObj, date: visitDate };
        } else {
            newDatesObj[index + 1] = { visitDay: index + 1, visitTime: 0, visitTimeText: '0', date: day };
        }
    });

    return ({
        newDatesObj,
        totalVisit
    });
};
// объект данных юзера
const createUserData = (userData, daysArr) => {
    const {
        newDatesObj,
        totalVisit
    } = createDatesProjections(userData.Days, daysArr);

    return ({
        id: userData.id,
        userName: userData.Fullname,
        total: totalVisit,
        days: newDatesObj,
    });
};

const getDataProjections = (dB, daysArr) => {
    const projectionArr = [];

    daysArr && dB.forEach(user => {
        const obj = createUserData(user, daysArr);
        projectionArr.push(obj);
    });

    return projectionArr
};
export default getDataProjections;