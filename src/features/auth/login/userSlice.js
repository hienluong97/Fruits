import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import usersApi from '../../../API/usersApi';

// First, create the thunk
export const register = createAsyncThunk('users/register', async (payload, thunkAPI) => {
    // call api
    const responseData = await usersApi.register(payload);
    // save localStorage
    localStorage.setItem('accessToken', responseData.jwt);
    localStorage.setItem('user', JSON.stringify(responseData.user));

    // return userdatta
    return responseData.user;
});

export const login = createAsyncThunk('users/signin', async (payload, thunkAPI) => {
    // call api
    const responseData = await usersApi.login(payload);
    // save localStorage
    localStorage.setItem('accessToken', responseData.jwt);
    localStorage.setItem('user', JSON.stringify(responseData.user));

    // return userdatta
    return responseData.user;
});

const initialState = {
    current: JSON.parse(localStorage.getItem('user')) || {},
    settings: 2,
    loading: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state, action) {
            state.current = {};
        },
    },
    extraReducers: {
        [register.pending]: (state, action) => {
            state.loading = true;
        },
        [register.fulfilled]: (state, action) => {
            state.current = action.payload;
            state.loading = false;
        },
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
            state.loading = false;
        },
    },
});

// Action creators are generated for each case reducer function
const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
