import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // 1. import the UUID
import TodoList from './TodoList';

const ToDoLists = () => {
  const [todoLists, setTodoLists] = useState([
    {
      id: uuidv4(),
      title: "Sabrina's TodoList",
    },
  ]);

  return (
    <div>
      {todoLists.map((todoList) => (
        <TodoList title={todoList.title} key={todoList.id} />
      ))}
    </div>
  );
};
export default ToDoLists;
