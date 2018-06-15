import React, { Component } from "react";
import Card from "./Card";

const Cards = props => {
  const { removeTask, todos, updateTask } = props;
  return (
    <div>
      {todos.length > 0 ? (
        todos.map(todo => (
          <Card
            removeTask={removeTask}
            updateTask={updateTask}
            todo={todo}
            key={todo.id}
          />
        ))
      ) : (
        <p>No tasks added...</p>
      )}
    </div>
  );
};

export default Cards;
