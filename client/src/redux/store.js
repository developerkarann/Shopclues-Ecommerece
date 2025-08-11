import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './slices/productSlice'
import  wishlistSlice  from './slices/wishlistSlice'
import  cartSlice  from './slices/cartSlice'
import  newCartSlice  from './slices/newCartSlice'
import  authSlice  from './slices/auth'

export const store = configureStore({
    reducer: {
        products: productSlice,
        wishlist: wishlistSlice,
        cart: newCartSlice,
        auth: authSlice,
    },
    devTools: true
})