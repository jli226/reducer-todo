import React, { useReducer } from "react";
import ToDoTask from "./ToDoTask";
import { initialState, simpleReducer } from "./../reducers/SimpleReducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(simpleReducer, initialState);
  console.log("todolist state: ", state);

  return (
    <div>
      {/* <p>placeholder TodoList component</p> */}
      {state.tasks.map(todo => (
        <ToDoTask
          key={todo.id}
          completed={todo.completed}
          id={todo.id}
          item={todo.item}
        />
      ))}
    </div>
  );
};

export default TodoList;
