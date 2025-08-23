import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: [],
    status: 'idle',
    error: null
}

export const fetchOrders = createAsyncThunk('orders/fetchorder', async (token) => {
    let resData = []
    const response = await axios(`${import.meta.env.VITE_SERVER}/orders`, {
        headers: {
            Authorization: token,
        }
    })
        .then((res) => {
            resData = res.data.orders
        }).catch((err) => {
            // console.log(err.response.data)
        })
    return resData
})

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOrders.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(fetchOrders.fulfilled, (state, action) => {
            state.status = 'sucess',
                state.data = action.payload
        })
        builder.addCase(fetchOrders.rejected, (state) => {
            state.status = 'failed'
        })
    }
});


export default orderSlice.reducer;
