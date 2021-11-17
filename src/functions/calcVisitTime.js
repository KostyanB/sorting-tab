export const calcMinHour = visitTime => {
    const visitMinute = Math.floor(visitTime % 60);
    const visitHour = Math.floor(visitTime / 60);
    return {
        visitMinute,
        visitHour
    }
};

export const calcVisitTime = ({ visitDate, timeStart, timeEnd }) => {
    const getTime = (date, time) => new Date(`${date} ${time.split('-').join(':')}`);

    const visitDay = new Date(visitDate).getDate();
    const visitTime = ((getTime(visitDate, timeEnd) - getTime(visitDate, timeStart)) / 60000);
    const { visitMinute, visitHour } = calcMinHour(visitTime);

    return {
        visitTime,
        visitMinute,
        visitHour,
        visitDay
    };
};