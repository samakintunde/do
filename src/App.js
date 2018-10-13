import React, { Component } from "react";
import Input from "./components/Input";
import Cards from "./components/Cards";
import uuidv4 from "uuid/v4";
import db from "./fire";
import "./App.css";
import logo from "./logo.png";

let todosArr = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  getTodos = () => {};

  componentWillMount = () => {
    db.settings({ timestampsInSnapshots: true });
    db.enablePersistence()
      .then(res => {
        let prevTodos = this.state.todos;
        db.collection("todos")
          .get()
          .then(snapshot => {
            snapshot.docs.forEach(doc => {
              prevTodos.push(doc.data());
              this.setState({ todos: prevTodos });
            });
          });
      })
      .catch(err => {
        if (err.code === "failed-precondition") {
          console.log("You can only use this in one tab at a time");
        } else if (err.code === "unimplemented") {
          console.log("Your browser doesn't allow us save");
        }
      });
  };

  componentDidMount = () => {
    todosArr = this.state;
  };

  createTask(todo) {
    db.collection("todos").add({
      id: uuidv4(),
      task: todo.task,
      tags: todo.tags,
      isDone: false
    });
  }

  removeTask(id) {
    const { todos } = this.state;
    let index = todos.findIndex(todo => todo.id === id);
    let newTodos = todos.splice(index, 1);
    this.setState({ newTodos });
    db.collection("todos")
      .doc(id)
      .delete()
      .then(res => {
        console.log(res);
      });
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
