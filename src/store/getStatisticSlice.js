import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import env from '../env.json';
import getDataProjections from '../functions/getDataProjections';

const {
    backend: {
        usersDbUrl
    },
    initialStates: {
        initDb: {
            initStatisticDb,
            initStatisticObj,
            initStatisticArr,
            initStatus,
            initError
        }
    }
} = env;
// запрос БД товаров с сервера
export const getStatistic = createAsyncThunk (
    'statistic/fetchStatistic',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch(usersDbUrl);
            if(!response.ok) throw new Error('Server error');
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getStatisticSlice = createSlice({
    name: 'statisticDb',
    initialState: {
        statisticDb: initStatisticDb,
        statisticObj: initStatisticObj,
        statisticArr: initStatisticArr,
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
            state.statisticDb = action.payload;
            const { projectionObj, projectionArr } = getDataProjections(action.payload);
            state.statisticObj = projectionObj;
            state.statisticArr = projectionArr;
        },
        [ getStatistic.rejected ]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

// массив .юзеров
export const selectStatisticDb = state => state.statisticDb.statisticDb;
export const selectStatisticOdj = state => state.statisticDb.statisticOdj;
export const selectStatisticArr = state => state.statisticDb.statisticArr;

export const selectError = state => state.statisticDb.error;
export const selectStatus = state => state.statisticDb.status;

export default getStatisticSlice.reducer;