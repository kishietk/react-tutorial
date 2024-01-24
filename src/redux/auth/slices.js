import { createSlice } from "@reduxjs/toolkit";
import { init } from "./init"

export const authSlice = createSlice({
    name: "auth",
    initialState: init,
    reducers: {
        login: (state, action) => {
            state.isLogin = action.payload;
        },
        logout: () => init,
        updateUser: (state, action) => {
            state.user = action.payload;
        },
        updateToken: (state, action) => {
            state.token = action.payload;
        },
        updateAuth: (state, action) => {
            state = action.payload
        },
        initializeUser: (state) => {
            state.user = init.user;
        },
        initializeToken: (state) => {
            state.token = init.token;
        },
    },
});

export const {
    login,
    logout,
    updateUser,
    updateToken,
    updateAuth,
    initializeUser,
    initializeToken,
} = authSlice.actions;

export default authSlice.reducer;