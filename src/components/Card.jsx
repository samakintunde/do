import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }
  }

  deleteTask = (e) => {
    e.preventDefault();
    this.props.removeTask(this.props.todo);
  }

  editTask = () => {
    this.setState({ isEditing: true });
    if (this.state.isEditing) {
      return <input value={this.props.task} />;
    }
    return <button className="Card-edit">Edit</button>;
  }


  render() {
    const { id, task, tags, isDone } = this.props.todo;

    return (
      <div className="Card">
        <div className="Card-details">
          <div className="Card-task">{task}</div>
          <div className="Card-tags">{tags.map(tag => <span className="Card-tag">{tag}</span>)}</div>
        </div>
        <div className="Card-actions">
          {this.editTask}
          <button className="Card-delete" onClick={this.deleteTask.bind(id)}>Del</button>
        </div>
      </div>
    );
  }
}

export default Card;