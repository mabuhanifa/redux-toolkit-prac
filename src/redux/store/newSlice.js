import { createSlice } from "@reduxjs/toolkit";

const customtodoSclice = createSlice({
  name: "customTodo",
  initialState: {
    loading: false,
    todo: [],
    error: null,
  },
  reducers: {
    // newRequest: (state) => {
    //   state.loading = true;
    // },
    newSuccess:(state, action)=> {
      state.todo = (action.payload);
      
    },
    // newFailed: (state, action) => {
    //   state.todo = [];
    //   state.error = action.error.message;
    // },
  },
});

export default customtodoSclice.reducer;
export const fetchNew = (state) => state.newtodos.todo;
export const {  newSuccess } =
  customtodoSclice.actions;
