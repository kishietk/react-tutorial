import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../redux copy/api/authSlice';
import { userApi } from '../redux copy/api/userSlice';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});