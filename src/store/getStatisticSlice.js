import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import env from '../env.json';

const {
    initialStates: {
        initDb: {
            initStatisticDb,
            initStatus,
            initError
        }
    }
} = env;
// запрос БД товаров с сервера
export const getStatistic = createAsyncThunk (
    'statistic/fetchStatistic',
    async function({usersDbUrl, activeMonth, activeYear}, {rejectWithValue}) {
        try {
            const response = await fetch(usersDbUrl);
            if(!response.ok) throw new Error('Server error');
            const result = await response.json();
            return {result, activeMonth, activeYear};
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getStatisticSlice = createSlice({
    name: 'statisticDb',
    initialState: {
        statisticDb: initStatisticDb,
        status: initStatus,
        error: initError,
    },
    reducers: {},
    extraReducers: {
        [ getStatistic.pending ]: state => {
            state.status = 'loading';
            state.error = null;
        },
        [ getStatistic.fulfilled ]: (state, action) => {
            state.status = 'success';
            state.statisticDb = action.payload.result;
        },
        [ getStatistic.rejected ]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

export const selectStatisticDb = state => state.statisticDb.statisticDb;
export const selectError = state => state.statisticDb.error;
export const selectStatus = state => state.statisticDb.status;

export default getStatisticSlice.reducer;