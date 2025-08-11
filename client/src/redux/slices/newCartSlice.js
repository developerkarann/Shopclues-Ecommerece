import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: [],
    status: 'idle',
    error: null
}

export const fetchCart = createAsyncThunk('cart/fetchdata', async (token) => {
    let resData = []
    const response = await axios(`${import.meta.env.VITE_SERVER}/cart`, {
        headers: {
            Authorization: token,
        }
    })
        .then((res) => {
            resData = res.data.cart
        }).catch((err) => {
            // console.log(err.response.data)
        })
    return resData
})

const newCartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCart.pending, (state) => {
            state.status = 'pending'
        })
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            state.status = 'sucess',
                state.data = action.payload
        })
        builder.addCase(fetchCart.rejected, (state) => {
            state.status = 'failed'
        })
    }
});


export default newCartSlice.reducer;
