import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../postSlice";
import todoReducer from "../todoSlice";

const store = configureStore({
  reducer: {
    todo: postReducer,
    posts: todoReducer,
  },
});

export default store;
