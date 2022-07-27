import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todo/fetchTodos", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    loading: false,
    todo: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.loading = false;
      state.todo = action.payload;
      state.error = null;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.loading = false;
      state.todo = [];
      state.error = action.error.message;
    });
  },
});

export default todoSlice.reducer;
