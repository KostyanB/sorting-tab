import { createSlice } from "@reduxjs/toolkit";
import env from '../env.json';
import getDataProjections from '../functions/getDataProjections';
import sortArray from '../functions/sortArray';
import getSlicedArr from '../functions/getSlicedArr';

// запрос БД товаров с сервера
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
            initActiveYear
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
        activeYear: initActiveYear
    },
    reducers: {
        setStartPage: (state, data) => {
            const { statisticDb, daysArr } = data.payload;
            const { projectionArr } = getDataProjections(statisticDb, daysArr);
            const startSortingArr = sortArray(initSortColumn, projectionArr);
            state.sortingDataArr = startSortingArr;
            state.dataOnPage = getSlicedArr(initActivePage, state.rowOnPage, startSortingArr);
            state.directSort = initDirectSort;
            state.activePage = initActivePage;
            state.sortColumn = initSortColumn;
        },
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
            state.directSort = initDirectSort;
            state.activePage = initActivePage;
            state.sortColumn = data.payload;
        },
    }
});

export const {
    setStartPage,
    setActivePage,
    toggleSortingDirect,
    setSortingColumn,
} = statisticOnPageSlice.actions;

// массив .юзеров
export const selectdataOnPage = state => state.statisticOnPage.dataOnPage;
export const selectActivePage = state => state.statisticOnPage.activePage;
export const selectDirectSort = state => state.statisticOnPage.directSort;
export const selectSortColumn = state => state.statisticOnPage.sortColumn;
export const selectActiveMonth = state => state.statisticOnPage.activeMonth;
export const selectActiveYear = state => state.statisticOnPage.activeYear;

export default statisticOnPageSlice.reducer;