import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    count: number
}

const initialState: InitialState = {
    count: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.count = state.count + 1 },
        deccrement: (state) => { state.count = state.count - 1 },
        incrementByValue: (state, action) => {
            state.count = state.count + action.payload
        }
    }
})


export const { increment, deccrement, incrementByValue } = counterSlice.actions
export default counterSlice.reducer;