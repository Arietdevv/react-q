import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  name: string;
  image: string;
  completed: boolean;
}

interface todoState {
  todos: Todo[];
}

const initialState: todoState = {
  todos: [],
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: state.todos.length + 1,
        name: action.payload,
        image: action.payload,
        completed: false,
      };

      state.todos.push(newTodo);
    },
    complatedTodo: (state, action: PayloadAction<number>) => {
      const findTodo = state.todos.find((el) => el.id === action.payload);
      if (findTodo) {
        findTodo.completed = !findTodo.completed;
      }
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
    },
  },
});

export const { complatedTodo, addTodo, deleteTodo } = todoReducer.actions;

export default todoReducer.reducer;
