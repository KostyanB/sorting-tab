import { calcVisitTime } from './calcVisitTime';

// массив визитов -> ассоциативный массив
const getDatesObj = (datesArr, daysCount) => {
    const newDatesObj = {};
    let totalVisit = 0;

    for (let day = 1; day <= daysCount; day++) {
    // daysArr.forEach(day => {
        // const findDay = datesArr.find(item => new Date(item['Date']).getDate() === day);
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
    // });
    }

    return ({
        newDatesObj,
        totalVisit
    });
};
// объект данных юзера
const createUserData = (userData, daysCount) => {
    const { newDatesObj, totalVisit } = getDatesObj(userData.Days, daysCount);

    return ({
        id: userData.id,
        userName: userData.Fullname,
        total: totalVisit,
        days: newDatesObj,
    });
};

const getDataProjections = (data, daysCount) => {
    // const projectionObj = {};
    const projectionArr = [];
    //
    daysCount && data.forEach(item => {
        const obj = createUserData(item, daysCount);
        // projectionObj[item.id] = obj;
        projectionArr.push(obj);
    });

    return projectionArr
};
export default getDataProjections;