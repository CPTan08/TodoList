import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoLists from "./components/TodoLists";

function App() {
  return (
    <div className="App">
      {/* <TodoList title="Things to Do" /> */}
      <TodoLists></TodoLists>
    </div>
  );
}

export default App;
