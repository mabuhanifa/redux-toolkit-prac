import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice";
import customtodoReducer from "../customtodoSlice";
import postReducer from "../postSlice";
import todoReducer from "../todoSlice";
import newReducer from "./newSlice";

const store = configureStore({
  reducer: {
    todo: postReducer,
    posts: todoReducer,
    counter: counterReducer,
    customtodo: customtodoReducer,
    newtodos: newReducer,
  },
});

export default store;
