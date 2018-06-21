import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.refs.addTask.value) {
      this.props.createTask(this.refs.addTask.value);
      this.refs.addTask.value = "";
      this.setState({ error: false });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    const errorOrNot = this.state.error ? (
      <p className="Input-error">
        You should input something.{" "}
        <button
          className="Input-error-close"
          onClick={() => this.setState({ error: false })}
        >
          &times;
        </button>
      </p>
    ) : null;

    return (
      <div>
        <form className="Input" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add a task..." ref="addTask" />
          <button type="submit">Add</button>
        </form>
        {errorOrNot}
      </div>
    );
  }
}

export default Input;
