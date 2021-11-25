import { atom, selector, selectorFamily } from 'recoil';
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

//activePeriod {activeMonth, activeYear}
export const activePeriodState = atom({
    key: 'activePeriodState',
    default: null,
});

export const daysCountState = atom({
    key: 'daysCountState',
    default: 0,
});
//usersData
export const usersData = atom({
    key: 'usersData',
    default: null,
});
//error
export const errorState = atom({
    key: 'errorState',
    default: '',
});
//loading
export const loadingState = atom({
    key: 'State',
    default: '',
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

export const dbUrlState = atom({
    key: 'dbUrlState',
    default: '',
});

export const usersDataState = selector({
    key: 'usersDataState',
    get: ({ get }) => get(usersDataQuery(get(dbUrlState))),
});

export const projectionArrState = selector({
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