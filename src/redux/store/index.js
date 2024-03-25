import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../api/authSlice';
import { userApi } from '../api/userSlice';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            userApi.middleware,
        ),
});