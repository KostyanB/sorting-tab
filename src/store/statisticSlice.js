import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getStatistic } from './getStatisticSlice';

// store пользователей
export const statisticAdapter = createEntityAdapter();

export const statisticSlice = createSlice({
    name: 'statistic',
    initialState: statisticAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder
        .addCase(
            getStatistic.fulfilled,
            statisticAdapter.setAll
        );
    },
});

export const {
    selectById: selectStatisticById,
    selectIds: selectStatisticIds, //все id
    selectEntities: selectStatisticEntities, //!ассоциативный массив по id
    selectAll: selectAllStatistic, //! массив всех пользователей
    selectTotal: selectTotalStatistic, //количество пользователей
} = statisticAdapter.getSelectors((state) => state.statistic);

export default statisticSlice.reducer;