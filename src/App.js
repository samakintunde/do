import React, { Component } from "react";
import Input from "./components/Input";
import Cards from "./components/Cards";
import uuidv4 from "uuid/v4";
import "./App.css";
import logo from "./logo.png";

const todos = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  createTask(task) {
    this.state.todos.push({
      id: uuidv4(),
      task,
      tags: [],
      isDone: false
    });
    this.setState({ todos: this.state.todos });
    console.log(todos[0].id);
  }

  removeTask(id) {
    const { todos } = this.state;
    let index = todos.findIndex(todo => todo.id === id);
    console.log(index);
    let newTodos = todos.splice(index, 1);
    this.setState({ newTodos });
  }

  updateTask(task, newTask) {
    const { todos } = this.state;
    let index = todos.findIndex(todo => todo.id === task.id);
    todos[index].task = newTask;
    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* Logo and name */}
          <div className="App-brand">
            <img src={logo} alt="Do" />
          </div>
          {/* Input area */}
          <Input createTask={this.createTask.bind(this)} />
        </div>
        {/* App body containing cards */}
        <div className="App-body">
          <Cards
            todos={this.state.todos}
            removeTask={this.removeTask.bind(this)}
            updateTask={this.updateTask.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
