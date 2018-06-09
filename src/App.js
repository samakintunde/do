import React, { Component } from 'react';
import Input from "./components/Input";
import Cards from "./components/Cards";
import './App.css';
import logo from './logo.png';

const todos = [
  {
    id: 1,
    task: 'Draft design proposal',
    tags: ['design', 'work'],
    isDone: false
  },
  {
    id: 2,
    task: 'Finish Udacity course',
    tags: ['development', 'code', 'javascript'],
    isDone: false
  },
  {
    id: 3,
    task: 'Upload project on Behance',
    tags: ['social', 'design'],
    isDone: false
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    }

  }

  createTask(task) {
    this.state.todos.push({
      task,
      tags: [],
      isDone: false
    });
    this.setState({ todos: this.state.todos });
  }

  removeTask(task) {
    const { todos } = this.state;
    let index = todos.findIndex((todo) => todo.id === task.id);
    let newTodos = todos.splice(index, 1);
    this.setState({ newTodos });
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
          <Cards todos={this.state.todos} removeTask={this.removeTask.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;