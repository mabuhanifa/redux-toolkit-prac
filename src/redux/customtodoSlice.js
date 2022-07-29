import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCustomTodo = createAsyncThunk(
  "posts/fetchPosts",
  async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return res.data;
  }
);

const customtodoSclice = createSlice({
  name: "customTodo",
  initialState: {
    loading: false,
    todo: [],
    error: null,
  },
  extraReducers: {
    [fetchCustomTodo.pending]: (state) => {
      state.loading = true;
    },
    [fetchCustomTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todo = action.payload;
      state.error = null;
    },
    [fetchCustomTodo.rejected]: (state, action) => {
      state.todo = [];
      state.error = action.error.message;
    },
  },
});

export default customtodoSclice.reducer;
export const { todoRequest, todoSuccess, todoFailed } =
  customtodoSclice.actions;
