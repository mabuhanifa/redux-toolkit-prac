import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counterSlice";
import customtodoReducer from "../customtodoSlice";
import newReducer from "../newSlice";
import postReducer from "../postSlice";
import todoReducer from "../todoSlice";

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
