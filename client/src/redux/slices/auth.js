import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const tokenFromStorage = localStorage.getItem('token');

export const loginUser = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER}/login`, { email, password })
        let { token, user } = await response.data
        localStorage.setItem('token', token)
        return response.data
    } catch (err) {
        const message = err.response?.data?.message || 'Login failed. Please try again.';
        return thunkAPI.rejectWithValue(message);
    }
})

export const registerUser = createAsyncThunk('auth/register', async ({ email, password, address }, thunkAPI) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_SERVER}/register`, { email, password, address })
        return response.data
    } catch (err) {
        const message = err.response?.data?.message || 'Register failed. Please try again.';
        return thunkAPI.rejectWithValue(message);
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: tokenFromStorage || null,
        user: null,
        loading: false,
        error: null
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem('token')
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.token;
            state.user = action.payload.user || null
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.token = null;
            state.user = null;
            state.error = action.payload
        })
    }
})


export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer