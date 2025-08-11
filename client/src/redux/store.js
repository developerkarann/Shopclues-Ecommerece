import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/auth'
import newCartSlice from './slices/newCartSlice'
import productSlice from './slices/productSlice'
import wishlistSlice from './slices/wishlistSlice'

export const store = configureStore({
    reducer: {
        products: productSlice,
        wishlist: wishlistSlice,
        cart: newCartSlice,
        auth: authSlice,
    },
    devTools: true
})