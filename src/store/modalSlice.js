import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import env from '../env.json';

const {
    backend: {
        getDataUrl,
        getDataApi,
    },
    initialStates: {
        initModal: {
            initModalData,
            initOpenModal,
            initStatus,
            initError,
        }
    }
} = env;

export const getModalData = createAsyncThunk (
    'modal/fetchModal',
    async function(date, {rejectWithValue}) {
        const url = `${getDataUrl}${date}${getDataApi}`
        try {
            const response = await fetch(url);
            if(!response.ok) throw new Error('Server error');
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        modalData: initModalData,
        openModal: initOpenModal,
        status: initStatus,
        error: initError,
    },
    reducers: {
        setCloseModal: state => {
            state.openModal = false;
        },
        setOpenModal: state => {
            state.openModal = true;
        }
    },
    extraReducers: {
        [ getModalData.pending ]: state => {
            state.status = 'loading';
            state.error = null;
        },
        [ getModalData.fulfilled ]: (state, action) => {
            state.status = 'success';
            state.modalData = action.payload;
            state.openModal = true;
        },
        [ getModalData.rejected ]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
            state.openModal = true;
        }
    }
});

export const {
    setCloseModal,
    setOpenModal,
} = modalSlice.actions;

export const selectModalData = state => state.modal.modalData;
export const selectOpenModal = state => state.modal.openModal;
export const selectError = state => state.modal.error;
export const selectStatus = state => state.modal.status;
export const selectMessage = state => state.modal.message;

export default modalSlice.reducer;