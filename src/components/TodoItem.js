import React from "react";

import "./TodoItem.css";

const TodoItem = ({ name, isDone, setTodo, deleteTodo }) => (
  <div className="todo-item">
    <span className="todo-item__completed" onClick={() => setTodo(!isDone)}>
      {isDone && <img alt="done" src={`${process.env.PUBLIC_URL}/tick.png`} />}
    </span>
    <span className="todo-item__name">{name}</span>
    <span onClick={() => deleteTodo()} className="todo-item__delete">
      X
    </span>
  </div>
);

export default TodoItem;
