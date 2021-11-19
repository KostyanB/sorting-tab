import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import env from '../env.json';

const {
    initialStates: {
        initDb: {
            initData,
            initStatus,
            initError,
        }
    }
} = env;
// запрос БД товаров с сервера
export const getData = createAsyncThunk (
    'statistic/fetchStatistic',
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

export const getDataFromServerSlice = createSlice({
    name: 'data',
    initialState: {
        data: initData,
        status: initStatus,
        error: initError,
    },
    reducers: {},
    extraReducers: {
        [ getData.pending ]: state => {
            state.status = 'loading';
            state.error = null;
        },
        [ getData.fulfilled ]: (state, action) => {
            state.status = 'success';
            state.data = action.payload.result;
        },
        [ getData.rejected ]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

export const selectData = state => state.data.data;
export const selectError = state => state.data.error;
export const selectStatus = state => state.data.status;

export default getDataFromServerSlice.reducer;