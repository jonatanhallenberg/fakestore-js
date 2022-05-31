import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 100 },
    reducers: {
        increase: state => {
            state.count = state.count + 1;
        },
        decrease: state => {
            state.count = state.count - 1;
        },
        increaseCountWithX: (state, action) => {
            state.count = state.count + action.payload;
        }
    }
});

export const { increase, decrease, increaseCountWithX } = counterSlice.actions;

export default counterSlice.reducer;

