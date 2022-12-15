import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/auth/login/userSlice';

const store = configureStore({
    reducer: {
        user: usersReducer,
    },
});

export default store;
