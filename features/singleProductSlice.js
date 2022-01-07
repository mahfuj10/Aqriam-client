import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSingleProduct = createAsyncThunk(
    'singleProduct/fetchSingleProduct',
    async (id) => {
        const response = await axios.get(`https://powerful-hollows-26581.herokuapp.com/singleProduct/${id}`);
        return response.data;
    }
);


export const singleProductSlice = createSlice({
    name: 'singleProduct',
    initialState: {
        singleProduct: {},
        status: 'idle',
    },
    reducers: {},
    extraReducers: {
        [fetchSingleProduct.pending]: (state, action) => {
            state.status = "pending";
        },
        [fetchSingleProduct.fulfilled]: (state, action) => {
            state.status = "success";
            state.singleProduct = action.payload;
        },
        [fetchSingleProduct.rejected]: (state, action) => {
            state.status = "rejected";
        }
    },
});

export default singleProductSlice.reducer;