import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API endpoint
const LOGIN_URL = 'http://localhost:5000/api/user/login';
const SIGNIN_URL = 'http://localhost:5000/api/user/signin';

// Async thunk for login
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(LOGIN_URL, credentials);
            
            const token = response.data.token;

            // Save token in localStorage
            localStorage.setItem('authToken', token);

            return { token };
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data || 'Login failed');
        }
    }
);
//Tunk for signin
export const signinUser = createAsyncThunk(
    'auth/signinUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post(SIGNIN_URL, credentials);
            return { response };
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response?.data || 'Login failed');
        }
    }
)
// Slice
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('authToken') || null,
        isLoading: false,
        error: null,
        success: false,
        rsuccess: false
    },
    reducers: {
        logout: (state) => {
            state.token = null;
            localStorage.removeItem('authToken');
        },
        clearError: (state) => {
            state.error = null; // Reset the error state
        },
        clearSuccess: (state) => {
            state.rsuccess = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload.token;
                state.success = true
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(signinUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(signinUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload.token;
                state.rsuccess = true;
            })
            .addCase(signinUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { logout,clearError, clearSuccess } = authSlice.actions;

export default authSlice.reducer;
