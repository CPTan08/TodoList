import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import ToDoLists from "./components/TodoLists";

function App() {
  return (
    <div className="App">
      <TodoList title="Things to Do" />
      <ToDoLists></ToDoLists>
    </div>
  );
}

export default App;
