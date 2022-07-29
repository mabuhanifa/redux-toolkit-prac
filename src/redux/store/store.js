import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice";
import customtodoReducer from "../customtodoSlice";
import postReducer from "../postSlice";
import todoReducer from "../todoSlice";

const store = configureStore({
  reducer: {
    todo: postReducer,
    posts: todoReducer,
    counter: counterReducer,
    customtodo: customtodoReducer,
  },
});

export default store;
