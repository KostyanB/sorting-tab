import { configureStore } from '@reduxjs/toolkit';
import getDataFromServerReducer from './getDataFromServerSlice';
// import statisticReducer from './statisticSlice';
import statisticOnPageReducer from './statisticOnPageSlice'
// import sortParamReducer from './sortParamSlice';

export default configureStore({
    reducer: {
        data: getDataFromServerReducer,
        // statistic: statisticReducer,
        statisticOnPage: statisticOnPageReducer,
        // sortParam: sortParamReducer,
    }
});