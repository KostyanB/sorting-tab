import { createSlice } from "@reduxjs/toolkit";
import env from '../env.json';

const {
    initialStates: {
        initSortParam: {
            initSortColumn,
            initDirectSort
        }
    }
} = env;

export const sortParamSlice = createSlice({
    name: 'sortParam',
    initialState: {
        sortColumn: initSortColumn,
        directSort: initDirectSort
    },
    reducers: {
        setSortColumn: (state, data) => {
            state.sortColumn = data.payload;
            state.directSort = true;
        },
        toggleDirect: state => {
            state.directSort = !state.directSort;
        }
    }
});

export const {
    setSortColumn,
    toggleDirect
} = sortParamSlice.actions;

export const selectSortColumn = state => state.sortParam.sortColumn;
export const selectDirectSort = state => state.sortParam.directSort;

export default sortParamSlice.reducer;