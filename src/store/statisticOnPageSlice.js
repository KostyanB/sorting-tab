import { createSlice } from "@reduxjs/toolkit";
import env from '../env.json';
import { getStatistic } from './getStatisticSlice';
import getDataProjections from '../functions/getDataProjections';
import sortArray from '../functions/sortArray';
import getSlicedArr from '../functions/getSlicedArr';
import getDaysCount from '../functions/getDaysCount';

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
            initDaysInActiveMonth
        }
    }
} = env;

export const statisticOnPageSlice = createSlice({
    name: 'statisticOnPage',
    initialState: {
        sortingDataArr: initSortingDataArr,
        dataOnPage: initDataOnPage,
        activePage: initActivePage,
        rowOnPage: initRowOnPage,
        sortColumn: initSortColumn,
        directSort: initDirectSort,
        activeMonth: initActiveMonth,
        activeYear: initActiveYear,
        daysInActiveMonth: initDaysInActiveMonth,
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

        setReverseSortingColumn: (state, data) => {
            const newSortingArr = sortArray(data.payload, state.sortingDataArr).reverse();
            state.sortingDataArr = newSortingArr;
            state.dataOnPage = getSlicedArr(initActivePage, state.rowOnPage, newSortingArr);
            state.directSort = false;
            state.activePage = initActivePage;
            state.sortColumn = data.payload;
        },
        setSortingColumn: (state, data) => {
            const newSortingArr = sortArray(data.payload, state.sortingDataArr);
            state.sortingDataArr = newSortingArr;
            state.dataOnPage = getSlicedArr(initActivePage, state.rowOnPage, newSortingArr);
            state.directSort = true;
            state.activePage = initActivePage;
            state.sortColumn = data.payload;
        },
    },
    extraReducers: {
        [ getStatistic.fulfilled ]: (state, action) => {
            const { result, activeMonth, activeYear } = action.payload;
            const daysCount = getDaysCount(activeMonth, activeYear);
            const projectionArr = getDataProjections(result, daysCount);
            const startSortingArr = sortArray(initSortColumn, projectionArr);
            state.sortingDataArr = startSortingArr;
            state.dataOnPage = getSlicedArr(initActivePage, state.rowOnPage, startSortingArr);
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
    setReverseSortingColumn
} = statisticOnPageSlice.actions;

export const selectDataOnPage = state => state.statisticOnPage.dataOnPage;
export const selectActivePage = state => state.statisticOnPage.activePage;
export const selectDirectSort = state => state.statisticOnPage.directSort;
export const selectSortColumn = state => state.statisticOnPage.sortColumn;
export const selectActiveMonth = state => state.statisticOnPage.activeMonth;
export const selectActiveYear = state => state.statisticOnPage.activeYear;
export const selectDaysInActiveMonth = state => state.statisticOnPage.daysInActiveMonth;

export default statisticOnPageSlice.reducer;