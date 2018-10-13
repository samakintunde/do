import React, { Component } from "react";
import Modal from "./Modal";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      tags: [],
      date: {},
      error: false,
      modalState: false
    };
  }

  componentDidMount = () => {
    const input = document.querySelector("input");
    input.focus();
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.refs.addTask.value) {
      this.setState({
        modalState: true,
        task: this.refs.addTask.value
      });
      this.refs.addTask.value = "";
    } else {
      this.setState({ error: true });
    }
  };

  submitModal = e => {
    console.log(e);
    e.preventDefault();
    this.setState({
      task: "",
      tags: [],
      date: {},
      error: false,
      modalState: false
    });
    this.props.createTask({
      task: this.state.task,
      tags: this.state.tags
    });
  };

  render() {
    let { modalState } = this.state;

    return (
      <div>
        <form className="Input" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add a task..." ref="addTask" />
          <button type="submit">Add</button>
        </form>

        {/* Show error if there is an error */}
        {this.state.error && (
          <p className="Input-error">
            You should input something.{" "}
            <button
              className="Input-error-close"
              onClick={() => this.setState({ error: false })}
            >
              &times;
            </button>
          </p>
        )}

        {/* Popup modal if modal state is true */}
        <Modal>
          {modalState && (
            <div className="modal-container">
              <form className="modal" onSubmit={this.submitModal}>
                <button
                  className="modal-close-btn"
                  onClick={() => {
                    this.setState({ modalState: false });
                  }}
                >
                  &times;
                </button>
                <input
                  className="modal-task"
                  type="text"
                  defaultValue={this.state.task}
                  contentEditable
                  required
                />
                <div className="modal-date">
                  <label>Due</label>
                  <input
                    type="date"
                    onChange={e => console.log(e.target.value)}
                  />
                </div>
                <div className="modal-tags">
                  <label>Tags</label>
                  <input
                    type="text"
                    onChange={e => {
                      let tags = e.target.value;
                      tags = tags.split(",");
                      tags = tags.map(tag => tag.trim());
                      this.setState({ tags });
                    }}
                  />
                  }
                </div>
                <p className="modal-tag-info">Add tags separated by comma</p>
                <button className="modal-add" type="submit">
                  Add
                </button>
              </form>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}

export default Input;
