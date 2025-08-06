import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: [],
    status: 'idle',
    error: null
}

export const fetchProducts = createAsyncThunk('fetchProducts', async()=>{
    let resData = []
    const response = await axios(`https://fakestoreapi.in/api/products`)
    .then((res)=>{
         resData = res.data.products
    }).catch((err)=>{
        console.log('[Getting error while fetching product data from API]', err.message)
    })
    return resData
})

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchProducts.pending, (state)=>{
            state.status = 'loading'
        })
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.status = 'success',
            state.data = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state)=>{
            state.status = 'failed'
        })
    }
})

export default productSlice.reducer