import React, { Component } from 'react';

class Input extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTask(this.refs.addTask.value);
    this.refs.addTask.value = "";
  }

  render() {
    return (
      <form className="Input" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add a task..." ref="addTask" />
        <button type="submit">Add</button>
      </form>
    )
  }

}

export default Input;