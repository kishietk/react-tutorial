import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/slices.js";
import userListReducer from "../userList/slices.js";
import { apiSlice } from '../api/authSlice.js';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        userList: userListReducer,
        api: apiSlice.reducer, 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});