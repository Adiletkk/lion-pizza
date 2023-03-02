import { createSlice } from "@reduxjs/toolkit";


const authSlise = createSlice({
    name: 'auth',
    initialState: {
        isAuth: 12,
    },
    reducers: {
        login: (state)=> {
            state.isAuth = true
        },
    },
});
export const {incremend} = authSlise.actions
export const authSlisereducer = authSlise.reducer
