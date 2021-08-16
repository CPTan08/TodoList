import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // 1. import the UUID
import TodoList from "./TodoList";

const TodoLists = () => {
  const [todoLists, setTodoLists] = useState([
    {
      id: uuidv4(),
      title: "Sabrina's TodoList",
    },
  ]);
  const [newListTitle, setNewListTitle] = useState("");

  const addTodoList = (title) => {
    if (title.trim() === "") return; //check if title is empty

    const newTodoList = {
      id: uuidv4(),
      title,
      isDone: false,
    };

    setTodoLists([...todoLists, newTodoList]);
  };

  const deleteTodoList = (id) => {
    const updatedTodoLists = [...todoLists].filter(
      (todoList) => todoList.id !== id
    );

    setTodoLists(updatedTodoLists);
  };

  const handleChange = (e) => {
    setNewListTitle(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={newListTitle}
        onChange={handleChange}
        placeholder="New To Do List"
      />
      <button onClick={() => addTodoList(newListTitle)}>Add</button>
      {todoLists.map((todoList) => (
        <TodoList
          title={todoList.title}
          key={todoList.id}
          deleteTodoList={deleteTodoList}
          id={todoList.id}
        />
      ))}
    </div>
  );
};
export default TodoLists;
