import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../auth/slices.js";
import userListReducer from "../userList/slices.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        userList: userListReducer,
    },
});