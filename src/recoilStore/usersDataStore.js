import { atom, selector, selectorFamily } from 'recoil';
import env from '../env.json';
// helpers
import getDataProjection from '../helpers/getDataProjection';
import sortArray from '../helpers/sortArray';
import filterArray from '../helpers/filterArray';
//recoil states
import {
    directSortState,
    sortColumnState,
    arrFilterState
} from './usersTabStore';
//
const {
    initActivePeriod,
    initDaysCount,
    initDbUrl
} = env.initialStates.initUsersData;

//activePeriod {activeMonth, activeYear}
export const activePeriodState = atom({
    key: 'activePeriodState',
    default: initActivePeriod,
});

export const daysCountState = atom({
    key: 'daysCountState',
    default: initDaysCount,
});

export const dbUrlState = atom({
    key: 'dbUrlState',
    default: initDbUrl,
});

const usersDataQuery = selectorFamily({
    key: 'usersDataQuery',
    get: (url) => async () => {
        const response = await fetch(url);
        if (response.error) {
            throw response.error;
        }
        return response.json();
    },
});

const usersDataState = selector({
    key: 'usersDataState',
    get: ({ get }) => get(usersDataQuery(get(dbUrlState))),
});

const projectionArrState = selector({
    key: 'projectionArrState',
    get: ({ get }) => getDataProjection(get(usersDataState), get(daysCountState)),
});

export const sortingArrState = selector({
    key: 'sortingArrState',
    get: ({ get }) => {
        const direct = get(directSortState);
        const column = get(sortColumnState);
        const filter = get(arrFilterState);
        const arr = filter
            ? filterArray(filter, get(projectionArrState))
            : get(projectionArrState);

        if (direct) {
            return sortArray(column, arr);
        } else {
            return sortArray(column, arr).reverse();
        }
    },
});

export const usersCountState = selector({
    key: 'usersCountState',
    get: ({ get }) => get(sortingArrState).length
});