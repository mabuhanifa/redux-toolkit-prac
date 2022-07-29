import { createSlice } from "@reduxjs/toolkit";

const customtodoSclice = createSlice({
  name: "customTodo",
  initialState: {
    loading: false,
    todo: [],
    error: null,
  },
  reducers: {
    todoRequest: (state) => {
      state.loading = true;
    },
    todoSuccess: (state, action) => {
      state.loading = false;
      state.todo = action.payload;
      state.error = null;
    },
    todoFailed: (state, action) => {
      state.todo = [];
      state.error = action.error.message;
    },
  },
});

export default customtodoSclice.reducer;
export const { todoRequest, todoSuccess, todoFailed } =
  customtodoSclice.actions;
