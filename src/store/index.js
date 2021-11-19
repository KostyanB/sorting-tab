import { configureStore } from '@reduxjs/toolkit';
import getDataFromServerReducer from './getDataFromServerSlice';
import statisticOnPageReducer from './statisticOnPageSlice'
import modalReducer from './modalSlice';

export default configureStore({
    reducer: {
        data: getDataFromServerReducer,
        statisticOnPage: statisticOnPageReducer,
        modal: modalReducer,
    }
});