import { createSlice } from "@reduxjs/toolkit";
import env from '../env.json';
import { getData } from './getDataFromServerSlice';
import getDataProjections from '../helpers/getDataProjections';
import sortArray from '../helpers/sortArray';
import getSlicedArr from '../helpers/getSlicedArr';
import getDaysCount from '../helpers/getDaysCount';
import filterArray from "../helpers/filterArray";

const {
    initialStates: {
        initStatOnPage: {
            initSortingDataArr,
            initRowOnPage,
            initActivePage,
            initDataOnPage,
            initSortColumn,
            initDirectSort,
            initActiveMonth,
            initActiveYear,
            initDaysInActiveMonth,
            initUsersCount
        }
    }
} = env;

const setInitSorting = state => {
    state.activePage = initActivePage;
    state.sortColumn = initSortColumn;
    state.directSort = initDirectSort;
};

const setArrState = (state, arr) => {
    state.sortingDataArr = arr;
    state.dataOnPage = getSlicedArr(initActivePage, state.rowOnPage, arr);
    state.usersCount = arr.length;
};

export const statisticOnPageSlice = createSlice({
    name: 'statisticOnPage',
    initialState: {
        dbProjection: [],
        sortingDataArr: initSortingDataArr,
        dataOnPage: initDataOnPage,
        activePage: initActivePage,
        rowOnPage: initRowOnPage,
        sortColumn: initSortColumn,
        directSort: initDirectSort,
        activeMonth: initActiveMonth,
        activeYear: initActiveYear,
        daysInActiveMonth: initDaysInActiveMonth,
        filteredArr: [],
        usersCount: initUsersCount,
    },
    reducers: {
        setActivePage: (state, data) => {
            state.dataOnPage = getSlicedArr(data.payload, state.rowOnPage, state.sortingDataArr);
            state.activePage = data.payload;
        },
        toggleSortingDirect: state => {
            const reverseDataArr = [...state.sortingDataArr].reverse();
            state.sortingDataArr = reverseDataArr;
            state.dataOnPage = getSlicedArr(initActivePage, state.rowOnPage, reverseDataArr);
            state.directSort = !state.directSort;
            state.activePage = initActivePage;
        },
        setSortingColumn: (state, data) => {
            const newSortingArr = sortArray(data.payload, state.sortingDataArr);
            state.sortingDataArr = newSortingArr;
            state.dataOnPage = getSlicedArr(initActivePage, state.rowOnPage, newSortingArr);
            state.directSort = true;
            state.activePage = initActivePage;
            state.sortColumn = data.payload;
        },
        setReverseSortingColumn: (state, data) => {
            const newSortingArr = sortArray(data.payload, state.sortingDataArr).reverse();
            state.sortingDataArr = newSortingArr;
            state.dataOnPage = getSlicedArr(initActivePage, state.rowOnPage, newSortingArr);
            state.directSort = false;
            state.activePage = initActivePage;
            state.sortColumn = data.payload;
        },
        findUserStatistic: (state, data) => {
            const filteredArr = filterArray(data.payload, state.dbProjection);
            setArrState(state, filteredArr);
            setInitSorting(state);
        },
        resetStatistic: state => {
            const sortingArr = sortArray(initSortColumn, state.dbProjection);
            setArrState(state, sortingArr);
            setInitSorting(state);
        }
    },
    extraReducers: {
        [ getData.fulfilled ]: (state, action) => {
            const { result, activeMonth, activeYear } = action.payload;
            const daysCount = getDaysCount(activeMonth, activeYear);
            const projectionArr = getDataProjections(result, daysCount, activeMonth, activeYear);
            state.dbProjection = projectionArr;
            const startSortingArr = sortArray(initSortColumn, projectionArr);
            setArrState(state, startSortingArr)
            state.activeMonth = activeMonth;
            state.activeYear = activeYear;
            state.daysInActiveMonth = daysCount;
        }
    }
});

export const {
    setActivePage,
    toggleSortingDirect,
    setSortingColumn,
    setReverseSortingColumn,
    findUserStatistic,
    resetStatistic
} = statisticOnPageSlice.actions;

export const selectDataOnPage = state => state.statisticOnPage.dataOnPage;
export const selectActivePage = state => state.statisticOnPage.activePage;
export const selectRowOnPage = state => state.statisticOnPage.rowOnPage;
export const selectDirectSort = state => state.statisticOnPage.directSort;
export const selectSortColumn = state => state.statisticOnPage.sortColumn;
export const selectActiveMonth = state => state.statisticOnPage.activeMonth;
export const selectActiveYear = state => state.statisticOnPage.activeYear;
export const selectDaysInActiveMonth = state => state.statisticOnPage.daysInActiveMonth;
export const selectUsersCount = state => state.statisticOnPage.usersCount;

export default statisticOnPageSlice.reducer;