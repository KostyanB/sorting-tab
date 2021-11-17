import { calcVisitTime } from './calcVisitTime';

// массив визитов -> ассоциативный массив
const getDatesObj = (datesArr, daysArr) => {
    const newDatesObj = {};
    let totalVisit = 0;

    daysArr.forEach(day => {
        const findDay = datesArr.find(item => new Date(item['Date']).getDate() === day);
        if (findDay) {
            //получаем объект из визита { visitTime, visitMinute, visitHour, visitDay }
            const { Date: visitDate, End: timeEnd, Start: timeStart } = findDay;
            const timeObj = calcVisitTime({ visitDate, timeEnd, timeStart });
            totalVisit += timeObj.visitTime;
            // newDateArr.push({ ...timeObj, date: visitDate });
            newDatesObj[timeObj.visitDay] = { ...timeObj, date: visitDate };
        } else {
            newDatesObj[day] = { visitTime: 0, visitMinute: 0, visitHour: 0, visitDay: day };
        }
    });

    return ({
        newDatesObj,
        totalVisit
    });
};
// объект данных юзера
const createUserData = (userData, daysArr) => {
    const { newDatesObj, totalVisit } = getDatesObj(userData.Days, daysArr);

    return ({
        id: userData.id,
        userName: userData.Fullname,
        total: totalVisit,
        days: newDatesObj,
    });
};

const getDataProjections = (data, daysArr) => {
    const projectionObj = {};
    const projectionArr = [];
    //
    daysArr && data.forEach(item => {
        const obj = createUserData(item, daysArr);
        projectionObj[item.id] = obj;
        projectionArr.push(obj);
    });

    return ({
        projectionObj,
        projectionArr
    });
};
export default getDataProjections;