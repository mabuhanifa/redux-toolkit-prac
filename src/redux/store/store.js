import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../postSlice";
const store = configureStore({
  reducer: { todo: postSlice },
});
export default store;
