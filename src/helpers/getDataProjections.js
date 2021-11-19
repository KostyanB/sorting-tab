import calcVisitTime from './calcVisitTime';
import toLocale from './toLocale';

// массив визитов -> ассоциативный массив
const getDatesObj = (...args) => {
    const [datesArr, daysCount, month, year] = args;
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
            newDatesObj[timeObj.visitDay] = { ...timeObj, date: visitDate };
        } else {
            newDatesObj[day] = { visitDay: day, visitTime: 0, visitTimeText: '0', date: `${year}-${toLocale(month)}-${toLocale(day)}` };
        }
    }

    return ({
        newDatesObj,
        totalVisit
    });
};
// объект данных юзера
const createUserData = (...args) => {
    const [userData, ...other] = args;
    const { newDatesObj, totalVisit } = getDatesObj(userData.Days, ...other);

    return ({
        id: userData.id,
        userName: userData.Fullname,
        total: totalVisit,
        days: newDatesObj,
    });
};

const getDataProjections = (...args) => {
    const [data, days, ...other] = args
    const projectionArr = [];

    days && data.forEach(item => {
        const obj = createUserData(item, days, ...other);
        projectionArr.push(obj);
    });

    return projectionArr
};
export default getDataProjections;