import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem('cart', JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save cart', e);
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadFromLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.find(item => item.id === product.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }

      saveToLocalStorage(state);
    },

    removeFromCart: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }

      saveToLocalStorage(state);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.find(item => item.id === id);
      if (item && quantity >= 1) {
        item.quantity = quantity;
      }
      saveToLocalStorage(state);
    },

    clearCart: (state) => {
      state.length = 0;
      saveToLocalStorage(state);
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
