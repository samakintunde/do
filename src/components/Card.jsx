import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: this.props.todo.task,
      isEditing: false
    };
  }

  deleteTask = e => {
    e.preventDefault();
    this.props.removeTask(this.props.todo.id);
  };

  editTask = () => {
    this.setState({ isEditing: !this.state.isEditing });
    this.props.updateTask(this.props.todo, this.state.newTask);
  };

  render() {
    const { id, task, tags, isDone } = this.props.todo;
    let { isEditing } = this.state;

    const editOrNot = isEditing ? (
      <button className="Card-edit" onClick={this.editTask}>
        Save
      </button>
    ) : (
      <button className="Card-edit" onClick={this.editTask}>
        Edit
      </button>
    );

    const inputOrNot = isEditing ? (
      <input
        className="Card-task"
        defaultValue={task}
        onChange={e => this.setState({ newTask: e.target.value })}
      />
    ) : (
      <div className="Card-task">{task}</div>
    );

    return (
      <div className="Card">
        <div className="Card-details">
          {inputOrNot}
          <div className="Card-tags">
            {tags.map(tag => <span className="Card-tag">{tag}</span>)}
          </div>
        </div>
        <div className="Card-actions">
          {editOrNot}
          <button className="Card-delete" onClick={this.deleteTask.bind(id)}>
            Del
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
