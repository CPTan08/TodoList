import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList title="Things to Do" />
    </div>
  );
}

export default App;
