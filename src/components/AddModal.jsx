import React, { Component } from "react";

const AddModal = props => {
  return (
    <form onSubmit={this.confirmAddTask}>
      <input type="text" defaultValue={this.refs.task} required />
    </form>
  );
};

export default AddModal;
