import calcVisitTime from './calcVisitTime';
// массив визитов -> ассоциативный массив
const createDatesObj = (datesArr, daysCount) => {
  const newDatesObj = {};
  let totalVisit = 0;

  const getFindedDay = (arr, day) =>
    arr.find(item => new Date(item['Date']).getDate() === day);

  const createTimeObj = day => {
    //получаем объект из визита { visitTime, visitMinute, visitHour, visitDay }
    const { Date: visitDate, End: timeEnd, Start: timeStart } = day;
    return calcVisitTime({ visitDate, timeEnd, timeStart });
  };

  const incrementTotalVisit = visitTime => (totalVisit += visitTime);

  const addTimeObjInDatesObj = (key, timeObj) =>
    (newDatesObj[key] = { ...timeObj });

  const handleCurrentDay = day => {
    const timeObj = createTimeObj(day);
    incrementTotalVisit(timeObj.visitTime);
    addTimeObjInDatesObj(timeObj.visitDay, timeObj);
  };

  const handleZeroVisitDay = day => {
    const timeObj = { visitDay: day, visitTime: 0, visitTimeText: '0' };
    addTimeObjInDatesObj(day, timeObj);
  };

  for (let day = 1; day <= daysCount; day++) {
    const currentDay = getFindedDay(datesArr, day);
    if (currentDay) {
      handleCurrentDay(currentDay);
    } else {
      handleZeroVisitDay(day);
    }
  }

  return {
    newDatesObj,
    totalVisit,
  };
};
// объект данных юзера
const createUserData = (userData, daysCount) => {
  const { newDatesObj, totalVisit } = createDatesObj(userData.Days, daysCount);

  return {
    id: userData.id,
    userName: userData.Fullname,
    total: totalVisit,
    days: newDatesObj,
  };
};

const getDataProjection = (users, daysCount) => {
  const projectionArr = [];

  daysCount &&
    users.forEach(user => {
      const obj = createUserData(user, daysCount);
      projectionArr.push(obj);
    });

  return projectionArr;
};
export default getDataProjection;
