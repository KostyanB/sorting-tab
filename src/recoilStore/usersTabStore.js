import { atom, selector } from 'recoil';
import env from '../env.json';
//recoil states
import { sortingArrState } from './usersDataStore';
//helpers
import getSlicedArr from '../helpers/getSlicedArr'

const {
    initRowOnPage,
    initActivePage,
    initSortColumn,
    initDirectSort,
} = env.initialStates.initUsersTab;

export const rowOnPageState = atom({
    key: 'rowOnPageState',
    default: initRowOnPage,
});

export const directSortState = atom({
    key: 'directSortState',
    default: initDirectSort,
});

export const sortColumnState = atom({
    key: 'sortColumnState',
    default: initSortColumn,
});

export const activePageState = atom({
    key: 'activePageState',
    default: initActivePage,
});

export const arrFilterState = atom({
    key: 'arrFilterState',
    default: '',
});

export const dataOnPageState = selector({
    key: 'dataOnPageState',
    get: ({ get }) => getSlicedArr(
        get(activePageState),
        get(rowOnPageState),
        get(sortingArrState)
    ),
});