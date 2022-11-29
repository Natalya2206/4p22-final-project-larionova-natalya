import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,

    reducers: {
        increment: (state) => {
            state = state + 1;

            return state;
        },
        decrement: (state) => {
            state = state - 1;

            return state;
        },
    }
})

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;