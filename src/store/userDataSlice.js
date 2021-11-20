import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import env from '../env.json';
// import { getData } from './getDataFromServerSlice';
import getDataProjections from '../helpers/getDataProjections';
import createDaysArr from '../helpers/createDaysArr';
import sortArray from '../helpers/sortArray';
import getSlicedArr from '../helpers/getSlicedArr';
import filterArray from "../helpers/filterArray";

const {
    initialStates: {
        initStatOnPage: {
            initData,
            initStatus,
            initError,
            initDbProjection,
            initSortingDataArr,
            initDaysArr,
            initRowOnPage,
            initActivePage,
            initDataOnPage,
            initSortColumn,
            initDirectSort,
            initActiveMonth,
            initActiveYear,
            initUsersCount,
        }
    }
} = env;

export const getUserData = createAsyncThunk (
    'userData/getStatistic',
    async function({ usersDbUrl, ...otherParam }, {rejectWithValue}) {
        try {
            const response = await fetch(usersDbUrl);
            if(!response.ok) throw new Error('Server error');
            const result = await response.json();
            return { result, ...otherParam };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setInitSorting = state => {
    state.activePage = initActivePage;
    state.sortColumn = initSortColumn;
    state.directSort = initDirectSort;
};

const setArrState = (state, arr) => {
    state.sortingDataArr = arr;
    state.dataOnPage = getSlicedArr(initActivePage, state.rowOnPage, arr);
};

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        data: initData,
        status: initStatus,
        error: initError,
        dbProjection: initDbProjection,
        sortingDataArr: initSortingDataArr,
        daysArr: initDaysArr,
        dataOnPage: initDataOnPage,
        activePage: initActivePage,
        rowOnPage: initRowOnPage,
        sortColumn: initSortColumn,
        directSort: initDirectSort,
        activeMonth: initActiveMonth,
        activeYear: initActiveYear,
        usersCount: initUsersCount,
    },
    reducers: {
        setActivePage: (state, data) => {
            state.dataOnPage = getSlicedArr(data.payload, state.rowOnPage, state.sortingDataArr);
            state.activePage = data.payload;
        },
        toggleSortingDirect: state => {
            const reverseDataArr = [...state.sortingDataArr].reverse();
            // state.sortingDataArr = reverseDataArr;
            // state.dataOnPage = getSlicedArr(initActivePage, state.rowOnPage, reverseDataArr);
            setArrState(state, reverseDataArr);
            state.directSort = !state.directSort;
            state.activePage = initActivePage;
        },
        setSortingColumn: (state, data) => {
            const newSortingArr = sortArray(data.payload, state.sortingDataArr);
            // state.sortingDataArr = newSortingArr;
            // state.dataOnPage = getSlicedArr(initActivePage, state.rowOnPage, newSortingArr);
            setArrState(state, newSortingArr);
            state.directSort = true;
            state.activePage = initActivePage;
            state.sortColumn = data.payload;
        },
        setReverseSortingColumn: (state, data) => {
            const newReverseSortingArr = sortArray(data.payload, state.sortingDataArr).reverse();
            // state.sortingDataArr = newReverseSortingArr;
            // state.dataOnPage = getSlicedArr(initActivePage, state.rowOnPage, newReverseSortingArr);
            setArrState(state, newReverseSortingArr);
            state.directSort = false;
            state.activePage = initActivePage;
            state.sortColumn = data.payload;
        },
        findUserStatistic: (state, data) => {
            const filteredArr = filterArray(data.payload, state.dbProjection);
            state.usersCount = filteredArr.length;
            setArrState(state, filteredArr);
            setInitSorting(state);
        },
        resetStatistic: state => {
            const sortingArr = sortArray(initSortColumn, state.dbProjection);
            state.usersCount = sortingArr.length;
            setArrState(state, sortingArr);
            setInitSorting(state);
        },
    },
    extraReducers: {
        [ getUserData.pending ]: state => {
            state.status = 'loading';
            state.error = null;
        },
        [ getUserData.fulfilled ]: (state, action) => {
            state.status = 'success';
            const { result, activeMonth, activeYear } = action.payload;
            state.data = result;
            state.activeMonth = activeMonth;
            state.activeYear = activeYear;
            state.usersCount = result.length;
            // массив дат выбранного месяца YYYY-MM-DD
            const daysArr = createDaysArr(activeMonth, activeYear);
            state.daysArr = daysArr;
            // преобразованная исходная DB
            const projectionArr = getDataProjections(result, daysArr);
            state.dbProjection = projectionArr;
            // стартовая сортировка
            const startSortingArr = sortArray(initSortColumn, projectionArr);
            setArrState(state, startSortingArr)
        },
        [ getUserData.rejected ]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

export const {
    setActivePage,
    toggleSortingDirect,
    setSortingColumn,
    setReverseSortingColumn,
    findUserStatistic,
    resetStatistic,
} = userDataSlice.actions;

export const selectError = state => state.userData.error;
export const selectStatus = state => state.userData.status;
export const selectDataOnPage = state => state.userData.dataOnPage;
export const selectActivePage = state => state.userData.activePage;
export const selectRowOnPage = state => state.userData.rowOnPage;
export const selectDirectSort = state => state.userData.directSort;
export const selectSortColumn = state => state.userData.sortColumn;
export const selectActiveMonth = state => state.userData.activeMonth;
export const selectActiveYear = state => state.userData.activeYear;
export const selectUsersCount = state => state.userData.usersCount;
export const selectDaysArr = state => state.userData.daysArr;

export default userDataSlice.reducer;