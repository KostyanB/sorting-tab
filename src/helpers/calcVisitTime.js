import toLocale from './toLocale';

const createVisitTimeText = visitTime => {
    if (visitTime > 0) {
        const visitMinute = toLocale(Math.floor(visitTime % 60));
        const visitHour = toLocale(Math.floor(visitTime / 60));
        return `${toLocale(visitHour)}:${toLocale(visitMinute)}`;
    } else {
        return '0';
    }
};

const getTime = (date, time) => new Date(`${date} ${time.split('-').join(':')}`);

const calcVisitTime = ({ visitDate, timeStart, timeEnd }) => {
    const visitDay = new Date(visitDate).getDate();
    const visitTime = ((getTime(visitDate, timeEnd) - getTime(visitDate, timeStart)) / 60000);
    const visitTimeText = createVisitTimeText(visitTime);

    return {
        visitDay,
        visitTime,
        visitTimeText,
    };
};
export default calcVisitTime;