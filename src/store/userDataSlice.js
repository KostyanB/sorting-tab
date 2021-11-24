import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import env from '../env.json';
import getDataProjection from '../helpers/getDataProjection';
import sortArray from '../helpers/sortArray';
import filterArray from "../helpers/filterArray";

const {
    initialStates: {
        initStatOnPage: {
            initData,
            initStatus,
            initError,
            initSortingData,
            initActivePage,
            initSortColumn,
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
};

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        data: initData,
        status: initStatus,
        error: initError,
        sortingData: initSortingData,
        activePage: initActivePage,
        sortColumn: initSortColumn,
        usersCount: initUsersCount,
    },
    reducers: {
        setActivePage: (state, data) => {
            state.activePage = data.payload;
        },
        toggleSortingDirect: state => {
            state.sortingData = [...state.sortingData].reverse();
            state.activePage = initActivePage;
        },
        setSortingColumn: (state, data) => {
            state.sortingData = sortArray(data.payload, state.sortingData);
            state.activePage = initActivePage;
            state.sortColumn = data.payload;
        },
        setReverseSortingColumn: (state, data) => {
            state.sortingData = sortArray(data.payload, state.sortingData).reverse();
            state.activePage = initActivePage;
            state.sortColumn = data.payload;
        },
        findUserStatistic: (state, data) => {
            const filteredArr = filterArray(data.payload, state.data);
            state.usersCount = filteredArr.length;
            state.sortingData = filteredArr;
            setInitSorting(state);
        },
        resetStatistic: state => {
            const sortingArr = sortArray(initSortColumn, state.data);
            state.usersCount = sortingArr.length;
            state.sortingData = sortingArr
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
            const { result, days } = action.payload;
            state.usersCount = result.length;
            const projectionArr = getDataProjection(result, days);
            state.data = projectionArr;
            state.sortingData = sortArray(initSortColumn, projectionArr);
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
export const selectSortingData = state => state.userData.sortingData;
export const selectActivePage = state => state.userData.activePage;
export const selectDirectSort = state => state.userData.directSort;
export const selectSortColumn = state => state.userData.sortColumn;
export const selectUsersCount = state => state.userData.usersCount;

export default userDataSlice.reducer;