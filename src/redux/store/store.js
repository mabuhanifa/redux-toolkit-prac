import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../todoSlice";
const store = configureStore({ todo: todoSlice });
export default store;