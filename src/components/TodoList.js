import React from "react";
import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid"; // 1. import the UUID
import "./TodoList.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
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
      ],
    };
  }

  handleChange = (event) => {
    this.setState({ newItemName: event.target.value });
  };

  addNewTodo() {
    const { newItemName: name } = this.state;
    if (!name || !name.length) {
      return;
    }

    this.setState({
      newItemName: "",
      todos: [
        ...this.state.todos,
        {
          id: uuidv4(),
          name: name,
          isDone: false,
        },
      ],
    });
  }

  createSetTodo(todo) {
    return (isDone) => {
      const currentTodo = this.state.todos.filter(
        (todoToFilter) => todoToFilter.id === todo.id
      )[0];
      currentTodo.isDone = isDone;
      this.setState({ todos: [...this.state.todos] });
    };
  }

  createDeleteTodo(todo) {
    return () => {
      const todosWithoutItem = this.state.todos.filter(
        (todoToFilter) => todoToFilter.id !== todo.id
      );
      this.setState({ todos: [...todosWithoutItem] });
    };
  }

  displayTodos() {
    console.log(this.props);
    return this.state.todos.map((todo) => {
      // 4. add a method that can change the status of isDone
      const setTodo = this.createSetTodo(todo);

      // add a delete function
      const deleteTodo = this.createDeleteTodo(todo);

      // 5. pass in the method as a prop to Todo component
      return (
        <TodoItem
          key={todo.id}
          name={todo.name}
          isDone={todo.isDone}
          setTodo={setTodo}
          deleteTodo={deleteTodo} // add it as a prop
        />
      );
    });
  }

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <input
          type="text"
          value={this.state.newItemName}
          onChange={this.handleChange}
          placeholder="Take a break"
        />
        <button onClick={() => this.addNewTodo()}>add</button>
        <div className="items">{this.displayTodos()}</div>
      </div>
    );
  }
}

export default TodoList;
