import calcVisitTime from './calcVisitTime';
// массив визитов -> ассоциативный массив
const createDatesObj = (datesArr, daysCount) => {
    const newDatesObj = {};
    let totalVisit = 0;

    const getFindedDay = (arr, day) => arr.find(item => new Date(item['Date']).getDate() === day);

    for (let day = 1; day <= daysCount; day++) {
        const findDay = getFindedDay(datesArr, day);
        if (findDay) {
            //получаем объект из визита { visitTime, visitMinute, visitHour, visitDay }
            const { Date: visitDate, End: timeEnd, Start: timeStart } = findDay;
            const timeObj = calcVisitTime({ visitDate, timeEnd, timeStart });
            totalVisit += timeObj.visitTime;
            newDatesObj[timeObj.visitDay] = { ...timeObj };
        } else {
            newDatesObj[day] = { visitDay: day, visitTime: 0, visitTimeText: '0' };
        }
    }

    return ({
        newDatesObj,
        totalVisit
    });
};
// объект данных юзера
const createUserData = (userData, daysCount) => {
    const {
        newDatesObj,
        totalVisit
    } = createDatesObj(userData.Days, daysCount);

    return ({
        id: userData.id,
        userName: userData.Fullname,
        total: totalVisit,
        days: newDatesObj,
    });
};

const getDataProjection = (users, daysCount) => {
    const projectionArr = [];

    daysCount && users.forEach(user => {
        const obj = createUserData(user, daysCount);
        projectionArr.push(obj);
    });

    return projectionArr
};
export default getDataProjection;