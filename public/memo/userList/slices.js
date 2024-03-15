import { createSlice } from "@reduxjs/toolkit";
import { init } from "./init"

export const userListSlice = createSlice({
    name: "auth",
    initialState: init,
    reducers: {
        updateUserList: (state, action) => {
            state.userList = action.payload;
        },
        initializeUserList: (state) => {
            state.userList = init.users;
        },
        updateMeta: (state, action) => {
            state.meta = action.meta;
        },
        initializeMeta: (state) => {
            state.meta = init.meta;
        },
        initializeState: () => init,
    },
});

export const {
    updateUserList,
    initializeUserList,
    updateMeta,
    initializeMeta,
    initializeState
} = userListSlice.actions;

export default userListSlice.reducer;