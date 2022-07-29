import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state,action) => {
      state.counter -= 1;
    },
    incrementByValue: (state, action) => {
      state.counter = action.payload;
    },
    reset: (state, action) => {
        state.counter = 0;
    }
  },
});

export const { increment, decrement, incrementByValue,reset } = counterSlice.actions;
export default counterSlice.reducer;
