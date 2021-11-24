import { atom, selector } from 'recoil';
import env from '../env.json';

const {
    initialStates: {
        initStatOnPage: {
            initData,
            initStatus,
            initError,
            initSortingData,
            initRowOnPage,
            initActivePage,
            initSortColumn,
            initDirectSort,
            initUsersCount,
        }
    }
} = env;
//activePeriod {activeMonth, activeYear}
export const activePeriodState = atom({
    key: 'activePeriodState',
    default: null,
});
//daysCount
export const daysCountState = atom({
    key: 'daysCountState',
    default: 0,
});
//rowOnPage
export const rowOnPageState = atom({
    key: 'rowOnPageState',
    default: initRowOnPage,
});
//directSort
export const directSortState = atom({
    key: 'directSortState',
    default: initDirectSort,
});
// export const daysCount = selector({
//     key: 'daysCount',
//     get: ({ get }) => get(daysCountState)
// });
