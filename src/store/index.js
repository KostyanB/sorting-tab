import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from './userDataSlice'
import modalReducer from './modalSlice';

export default configureStore({
    reducer: {
        userData: userDataReducer,
        modal: modalReducer,
    }
});