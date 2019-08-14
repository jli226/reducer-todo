import React from "react";
import "./ToDoTask.css";

function TodoTask(props) {
  return (
    <div
      className={`${props.completed ? "completed" : ""}`}
      onClick={() =>
        props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.id })
      }
    >
      <p>{props.item}</p>
    </div>
  );
}
export default TodoTask;
