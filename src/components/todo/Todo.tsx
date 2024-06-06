import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { rootState } from "../../redux/Store";
import { addTodo, deleteTodo } from "./redux/TodoReducer";

const Todo = () => {
  const [newtodo, setNewtodo] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((state: rootState) => state.todo);
  // console.log(todos);

  function createTodo() {
    if (newtodo.trim() === "") {
      alert("Заполните поля");
      return;
    }
    dispatch(addTodo(newtodo));
    setNewtodo("");
    return;
  }

  function delTodo(id: number) {
    dispatch(deleteTodo(id));
  }

  return (
    <div id="todo">
      <div className="container">
        <div className="todo">
          <h1 style={{ color: "white" }}>TODO</h1>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setNewtodo(e.target.value)}
            value={newtodo}
          />
          <img src="" alt="" />
          <button onClick={createTodo}>create</button>
        </div>
        {todos.map((todo) => (
          <div className="todo_bac">
            <div className="todo_el">
              <h1>{todo.name}</h1>
              <img src={todo.image} alt="" />
              <button onClick={() => delTodo(todo.id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
