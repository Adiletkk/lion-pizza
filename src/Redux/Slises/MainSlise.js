import { createSlice } from "@reduxjs/toolkit";


const mainSlise = createSlice({
    name: 'main',
    initialState: {
        value: 99,
        name: 'Karlin'  
    },
    reducers: {
        incremend: (state) => {
            state.value += 1;
        },
    },
});
export const {incremend} = mainSlise.actions
export const mainSlisereducer = mainSlise.reducer
