import { registerUserType } from "@/types/auth-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
    user: registerUserType & { _id: string } | null;
}

const initialState: initialStateType = {
    user: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action: PayloadAction<registerUserType & { _id: string }>) => {
            state.user = action.payload;
        },
        userLoggedOut: (state) => {
            state.user = initialState.user;
        },
    },
});

export default authSlice;
export const { userLoggedIn, userLoggedOut } = authSlice.actions;
