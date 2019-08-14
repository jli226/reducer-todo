import React, { useState, useReducer } from "react";
import { initialState, simpleReducer } from "./../reducers/SimpleReducer";
import ToDoTask from "./ToDoTask";

function AddForm() {
  const [inputState, setInputState] = useState("");
  const [state, dispatch] = useReducer(simpleReducer, initialState);

  const changeInputHandler = event => setInputState(event.target.value);

  const addTodo = () => {
    dispatch({ type: "ADD_TODO", payload: inputState });
    setInputState("");
  };

  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });

  return (
    <div>
      <input
        onChange={changeInputHandler}
        value={inputState}
        placeholder="Enter todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearCompleted}>Clear Completed</button>
      {state.tasks.map(todo => (
        <ToDoTask
          dispatch={dispatch}
          key={todo.id}
          completed={todo.completed}
          id={todo.id}
          item={todo.item}
        />
      ))}
    </div>
  );
}

export default AddForm;
