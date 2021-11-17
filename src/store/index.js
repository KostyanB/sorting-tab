import { configureStore } from '@reduxjs/toolkit';
import getStatisticReducer from './getStatisticSlice';
// import statisticReducer from './statisticSlice';
import statisticOnPageReducer from './statisticOnPageSlice'
// import sortParamReducer from './sortParamSlice';

export default configureStore({
    reducer: {
        statisticDb: getStatisticReducer,
        // statistic: statisticReducer,
        statisticOnPage: statisticOnPageReducer,
        // sortParam: sortParamReducer,
    }
});