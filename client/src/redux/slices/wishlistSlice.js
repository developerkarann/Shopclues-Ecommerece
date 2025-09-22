import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
    try {
        const data = sessionStorage.getItem('wishlist');
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

const saveToLocalStorage = (state) => {
    try {
        sessionStorage.setItem('wishlist', JSON.stringify(state));
    } catch (e) {
        console.error('Failed to save wishlist', e);
    }
};

const initialState = loadFromLocalStorage();

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        toggleWishlist: (state, action) => {
            const productId = action.payload.id;
            const index = state.findIndex((p) => p.id === productId);

            if (index === -1) {
                state.push(action.payload);
            } else {
                state.splice(index, 1);
            }
            saveToLocalStorage(state);
        },
        clearWishlist: (state) => {
            state.length = 0;
            saveToLocalStorage(state);
        }
    },
});

export const { toggleWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
