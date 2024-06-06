import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../components/todo/redux/TodoReducer";

const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});

export type rootState = ReturnType<typeof store.getState>;

export default store;
