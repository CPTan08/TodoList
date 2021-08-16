import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid"; // 1. import the UUID
import "./TodoList.css";

const TodoList = ({ title }) => {
  const [todoItems, setTodoItems] = useState([
    {
      id: uuidv4(), // 2. add uuid to the item
      name: "Buy Milk",
      isDone: false,
    },
    {
      id: uuidv4(), // 3.add uuid to the item
      name: "Do push up",
      isDone: true,
    },
  ]);

  const [newItemName, setNewItemName] = useState("");
  const handleChange = (e) => {
    setNewItemName(e.target.value);
  };

  function addNewTodo() {
    const newTodoItems = {
      id: uuidv4(),
      name: newItemName,
      isDone: false,
    };
    setTodoItems([...todoItems, newTodoItems]);
  }

  function createSetTodo(id) {
    const todoIndex = todoItems.findIndex((todo) => todo.id === id);
    const updatedTodos = [...todoItems];
    updatedTodos[todoIndex].isDone = !updatedTodos[todoIndex].isDone;

    setTodoItems(updatedTodos);
  }

  function deleteTodo(id) {
    const updatedToDoItems = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(updatedToDoItems);
  }

  function displayTodos() {
    // console.log(this.props);

    return todoItems.map((todo) => {
      // 4. add a method that can change the status of isDone
      const setTodo = createSetTodo(todo.id);

      // add a delete function
      const setdeleteTodo = deleteTodo(todo.id);

      // 5. pass in the method as a prop to Todo component
      return (
        <TodoItem
          key={todo.id}
          name={todo.name}
          isDone={todo.isDone}
          setTodo={setTodo}
          deleteTodo={setdeleteTodo} // add it as a prop
        />
      );
    });
  }

  return (
    <div>
      {/* <button onClick={() => this.props.deleteTodoList(this.props.id)}>
        Delete
      </button> */}
      <div className="header">{title}</div>
      <input
        type="text"
        value={newItemName}
        onChange={handleChange}
        placeholder="Take a break"
      />
      <button onClick={() => addNewTodo()}>add</button>
      <div className="items">{displayTodos()}</div>
    </div>
  );
};

export default TodoList;
